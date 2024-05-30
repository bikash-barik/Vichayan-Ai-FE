import AuthenticationLight from "../components/AuthenticationLight";
import Navbar from "../components/Navbar";
const Login = () => {
  return (
    <div className="w-full bg-grey-base-2 ">  
    <Navbar/>
    <div className="w-full h-full relative   flex flex-col items-center justify-start py-10 px-5 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-sm text-gray-300 font-nunito mq675:gap-[20px]">
      <main className="w-full flex flex-row items-center justify-center py-14 px-0 box-border max-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq825:pt-9 mq825:pb-9 mq825:box-border">
        <AuthenticationLight />
      </main>
      <div className="w-full h-full flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="relative font-light inline-block min-w-[85px]">
          Privacy Policy
        </div>
        <div className="relative font-light">
          Copyright © Tanumanasa Research Pvt Ltd 2024
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
