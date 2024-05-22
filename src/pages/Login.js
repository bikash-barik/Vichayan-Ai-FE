import AuthenticationLight from "../components/AuthenticationLight";
const Login = () => {
  return (
    <div className="w-[1440] h-[1090px] relative bg-grey-base-2 overflow-hidden flex flex-col items-center justify-start py-10 px-5 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-sm text-gray-300 font-nunito mq675:gap-[20px]">
      <div className="w-[1720px] flex flex-row items-center justify-between gap-[20px] max-w-full">
        <img
          className="h-[38px] w-[184px] relative object-contain"
          loading="lazy"
          alt=""
          src="/black-logo-png@2x.png"
        />
        <div className="w-[518px] flex flex-row items-center justify-start gap-[25px] max-w-full mq825:w-[130px]">
          <nav className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-sm text-gray-300 font-nunito mq825:hidden">
            <div className="relative inline-block min-w-[28px]">Plus</div>
            <div className="relative inline-block min-w-[65px]">Enterprise</div>
            <div className="relative inline-block min-w-[42px]">Career</div>
            <div className="relative inline-block min-w-[30px]">Blog</div>
            <div className="relative inline-block min-w-[123px] whitespace-nowrap">{`Terms & Conditions`}</div>
          </nav>
          <button className="cursor-pointer py-2 px-[9px] bg-[transparent] rounded-3xs flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-darkslategray-100">
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
      </div>
      <main className="w-[1720px] flex flex-row items-center justify-center py-14 px-0 box-border max-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq825:pt-9 mq825:pb-9 mq825:box-border">
        <AuthenticationLight />
      </main>
      <div className="w-[1720px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="relative font-light inline-block min-w-[85px]">
          Privacy Policy
        </div>
        <div className="relative font-light">
          Copyright © Tanumanasa Research Pvt Ltd 2024
        </div>
      </div>
    </div>
  );
};

export default Login;
