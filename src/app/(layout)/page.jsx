import "../(layout)/style.css";

export default function Home() {
  return (
    <div className="home-hero-bg relative">
      <div className="bg-[#FFF3E3] pt-[62px] pb-[37px] w-[643px] pl-[39px] rounded-[10px] absolute top-[153px] right-[58px]">
        <h3 className="font-semibold text-[16px] leading-[24px] text-[#333333]">
          New Arrival
        </h3>
        <h2 className="mt-[4px] mb-[17px] w-[440px] font-bold text-[52px] leading-[65px] text-[#B88E2F]">Discover Our New Collection</h2>
        <p className="mb-[46px] w-[507px] font-medium text-[18px] leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="font-bold text-[16px] leading-[24px] py-[24px] px-[72px] bg-[#B88E2F] uppercase text-white">BUY Now</button>
      </div>
    </div>
  );
}
