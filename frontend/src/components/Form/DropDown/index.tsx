import styles from './index.module.scss';
import FormWrapper from '@/components/Form/Wrapper';

interface Props {
  name: string;
  options: DropDownItems[];
}

const DropDown = ({ name, options }: Props) => {
  return (
    <FormWrapper name={name}>
      <select className={styles.select}>
        {options.map((items) => (
          <option key={items.value} value={items.value}>
            {items.name}
          </option>
        ))}
      </select>
    </FormWrapper>
  );
};

export default DropDown;
