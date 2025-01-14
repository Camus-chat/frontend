import Image from 'next/image';

export default function ComingSoon(){
  return (
    <div className="m-0 w-full h-full bg-white flex justify-around">
      <div className="bg-transparent flex items-center [&>*]:bg-transparent ml-28">
        <Image src="/images/comingsoon.svg" alt="이미지" width={480} height={720} />
      </div>
      <div className=" bg-transparent flex flex-col justify-center pb-20 mr-52">
        <div className="bg-transparent my-8 flex flex-row justify-center items-center">
          <Image src="/images/logo.svg" alt="이미지" width={64} height={64} />
          <p className="text-5xl text-center text-black font-[600] ml-4">COMING SOON</p>
        </div>
        <div className="bg-transparent text-2xl text-center text-black font-[400] my-4">
          AI 안전 채팅을 통해 당신을 지켜드립니다.
        </div>
      </div>
    </div>
  )
}