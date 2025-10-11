'use client';

import { Form } from '@heroui/form';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

import { EMAIL_REGEX, PASSWORD_REGEX, ROUTE } from '@/shared/config';
import { Agreement, Button, Password } from '@/shared/ui';

import EnterpriseSelect from './enterprise-select';
import InputField from './input';
import { PERSONAL } from '../../constants';

interface Props {
  onSubmit: (formData: SignUpFormData) => Promise<void>;
}

const defaultValues = {
  agreed: false,
  isEnterprise: PERSONAL,
};

export const SignUpForm = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm<SignUpFormData>({
    mode: 'onChange',
    defaultValues,
  });

  const onEnterpriseSelect = (value: SignUpFormData['isEnterprise']) => {
    setValue('isEnterprise', value);
  };

  return (
    <Form className='gap-1' onSubmit={handleSubmit(onSubmit)}>
      <EnterpriseSelect
        defaultValue={defaultValues.isEnterprise}
        onSelect={onEnterpriseSelect}
      />
      <InputField
        label='Name'
        name='nickname'
        control={control}
        rules={{
          required: 'Enter your name.',
        }}
      />
      <InputField
        label='Email'
        name='username'
        control={control}
        rules={{
          required: 'Enter your email address.',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Enter a valid email address.',
          },
        }}
      />
      <Controller
        name='password'
        control={control}
        render={({ field, fieldState: { invalid, error } }) => (
          <Password
            {...field}
            label='Password'
            isInvalid={invalid}
            errorMessage={error?.message}
          />
        )}
        rules={{
          required: 'Enter your password.',
          pattern:
            process.env.NODE_ENV !== 'development'
              ? {
                  value: PASSWORD_REGEX,
                  message:
                    'Password must be 8-16 characters, with uppercase, lowercase, digit, and special character (!@#$%^&*).',
                }
              : undefined,
        }}
      />
      <Agreement
        name='agreed'
        control={control}
        rules={{ required: true }}
        className='mt-2'
      >
        <p className='text-sm font-light text-gray-400'>
          {"I agree to CAMUS's "}
          <Link
            href={ROUTE.termsOfService}
            className='font-normal text-blue-600'
          >
            Terms of Service
          </Link>
          {' and '}
          <Link
            href={ROUTE.privacyNotice}
            className='font-normal text-blue-600'
          >
            Privacy Policy
          </Link>
          {
            ' which includes my consent to receive marketing information from CAMUS. I can unsubscribe from marketing communications at any time.'
          }
        </p>
      </Agreement>
      <Button
        type='submit'
        className='mt-5 w-full'
        size='lg'
        color={isValid ? 'primary' : 'default'}
        isDisabled={!isValid}
        isLoading={isSubmitting}
      >
        Create account
      </Button>
    </Form>
  );
};
