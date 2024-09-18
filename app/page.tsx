import Image from "next/image";
import BG_IMAGE from "../image/배경 이미지 1.png";

export default function Home() {
  return (
    <div className=" relative">
      <div className="w-full h-full absolute -z-10">
        <Image
          src={BG_IMAGE}
          alt="logoImage"
          objectPosition="center"
          height={300}
        />
      </div>
      <div className="pt-14 pl-5">
        <span className="font-extrabold text-sm text-white">
          반쪽을 찾아 떠나는 특별한 1박2일
        </span>
        <div
          className="
        w-[220px] rounded-full border border-color_main bg-[#FFFFFFBF] flex flex-col justify-center items-start mt-3
        font-semibold text-color_main text-sm
        "
        >
          <span>카메라 없는 TV 로맨스 예능</span>
          <span>일반인 소개팅 프로그램</span>
        </div>
        <div
          className="
        bg-color_main w-24 h-6 rounded-full flex justify-center items-center mt-20
        text-white text-xs
        "
        >
          <span>자세히보기 &gt;</span>
        </div>
      </div>
    </div>
  );
}
