import Bills from '../../../../public/animations/charge-bills.json';
import Wallet from '../../../../public/animations/charge-wallet.json';
import Fit from '../../../../public/animations/fitable.json';

export const DESCRIPTIONS = {
  title: '요금 책정 방식',
  content:
    'CAMUS의 요금제는 서비스 사용량에 따라 지불하는 것을 원칙으로 합니다. 초기 비용 없이 서비스를 도입해보세요.  대시보드를 통해 이용량 추이를 확인하고, 이용 요금을 예측하세요.',
};

export const INFO_CARD = [
  {
    title: '맞춤형 서비스 제공',
    content:
      '다양한 비즈니스 요구사항을 충족할 수 있는 서비스 옵션을 제공합니다.',
    color: 'pink',
    imgSrc: Fit,
  },
  {
    title: '효율적인 비용 측정',
    content:
      '통합 솔루션의 사용량에 따라 요금을 지불하세요. 효율적인 AI 서비스 구조를 제공함으로써 비용 절감이 가능합니다.',
    color: 'skyblue',
    imgSrc: Bills,
  },
  {
    title: '유연한 결제 방식',
    content:
      '언제든 서비스를 가입하고 언제든 서비스를 중단하세요. 서비스 사용량에 대한 비용을 지불하면 서비스 중단이 가능합니다. 서비스 재사용 또한 항상 열려있습니다.',
    color: 'lightgray',
    imgSrc: Wallet,
  },
];
