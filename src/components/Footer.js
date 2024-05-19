const Footer = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-end py-[15px] pr-2.5 pl-[874px] box-border gap-[35px] max-w-full shrink-0 text-left text-sm text-gray-300 font-nunito mq1300:flex-wrap mq1300:pl-[437px] mq1300:box-border mq450:pl-5 mq450:box-border mq800:gap-[17px] mq800:pl-[218px] mq800:box-border">
      <div className="flex-1 flex flex-row items-start justify-between min-w-[325px] max-w-full gap-[20px] mq800:flex-wrap">
        <div className="relative inline-block min-w-[28px]">Plus</div>
        <div className="relative inline-block min-w-[65px]">Enterprise</div>
        <div className="relative inline-block min-w-[42px]">Career</div>
        <div className="relative inline-block min-w-[30px]">Blog</div>
        <div className="relative inline-block min-w-[87px]">Privacy Policy</div>
        <div className="relative inline-block min-w-[123px]">{`Terms & Conditions`}</div>
      </div>
      <button className="cursor-pointer py-2 px-[9px] bg-[transparent] rounded-3xs overflow-x-auto flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-darkslategray-100">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/mageglobe.svg"
        />
        <div className="relative text-sm font-nunito text-gray-300 text-left inline-block min-w-[25px]">
          Eng
        </div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/magechevrondown.svg"
        />
      </button>
    </div>
  );
};

export default Footer;
