import Manage from './manage.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });


const InfoPlanMessage = () => {
  return (
    <div className="bg-gray-100 flex flex-col gap-3 px-10 py-32">
      <h1 className="text-4xl font-bold">Take advantage of our free Developer plan</h1>
      <p className="text-base/2 tracking-tight font-light text-gray-700 mt-10 pr-5">
        Subscribe to our Developer plan to get your business started with 100 MAUs
        and leverage CAMUS’s other premium features for free.
      </p>
      <ul className="mt-4 text-base font-medium">
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="id_VKCGLrtGO125C46Dg3sJv"
               width="16"
               height="16" className="feather__icon FeatherIcon-sc-2y9jv2-0 eCRFIN">
            <path fill-rule="evenodd" d="M9 15.586 19.293 5.293l1.414 1.414L9 18.414l-5.707-5.707 1.414-1.414L9 15.586Z"
                  clip-rule="evenodd"></path>
          </svg>
          <span className="pl-1">
              Access to all premium features
          </span>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="id_VKCGLrtGO125C46Dg3sJv"
               width="16"
               height="16" className="feather__icon FeatherIcon-sc-2y9jv2-0 eCRFIN">
            <path fill-rule="evenodd" d="M9 15.586 19.293 5.293l1.414 1.414L9 18.414l-5.707-5.707 1.414-1.414L9 15.586Z"
                  clip-rule="evenodd"></path>
          </svg>
          <span className="pl-1">
            Free for unlimited time
          </span>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="id_VKCGLrtGO125C46Dg3sJv"
               width="16"
               height="16" className="feather__icon FeatherIcon-sc-2y9jv2-0 eCRFIN">
            <path fill-rule="evenodd" d="M9 15.586 19.293 5.293l1.414 1.414L9 18.414l-5.707-5.707 1.414-1.414L9 15.586Z"
                  clip-rule="evenodd"></path>
          </svg>
          <span className="pl-1">
            No credit card required <br />
          </span>
        </li>
      </ul>
      <div className="mt-4">
        <Lottie
            loop
            play
            animationData={Manage}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
      </div>
    </div>
  )
}

export default InfoPlanMessage;