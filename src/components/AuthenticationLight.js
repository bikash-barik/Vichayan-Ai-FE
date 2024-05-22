import { useCallback } from "react";
import { Button } from "@mui/material";
import InputFieldLight from "./InputFieldLight";
import { useNavigate } from "react-router-dom";

const AuthenticationLight = () => {
  const navigate = useNavigate();

  const onButtonLightClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <main className="w-[1440px] h-[750px] flex flex-row items-center justify-center py-2.5 px-0 box-border max-w-full text-left text-13xl text-gray-400 font-nunito">
      <div className="w-[579px] shadow-[-22px_151px_43px_rgba(0,_0,_0,_0),_-14px_97px_39px_rgba(0,_0,_0,_0.01),_-8px_54px_33px_rgba(0,_0,_0,_0.05),_-4px_24px_24px_rgba(0,_0,_0,_0.09),_-1px_6px_13px_rgba(0,_0,_0,_0.1)] rounded-11xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-10 pb-[35px] box-border relative gap-[50px] min-h-[745px] max-w-full mq675:gap-[25px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi mq750:text-7xl">
            Welcome back!
          </h1>
          <div className="self-stretch relative text-base text-gray-300">
            <span>{`Login to continue with `}</span>
            <b className="text-gray-400">Vichayan AI</b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[45px] text-sm font-inter mq675:gap-[22px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[20px] mt-[35px] [transform:_rotate(180deg)] mq675:flex-wrap">
            <Button
              className="h-[54px] flex-1 [transform:_rotate(180deg)] min-w-[115px]"
              startIcon={
                <img
                  width="24px"
                  height="24px"
                  src="/third-party-accounts.svg"
                />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                background: "#eeeee4",
                borderRadius: "10px",
                "&:hover": { background: "#eeeee4" },
                height: 54,
              }}
            >
              Microsoft
            </Button>
            <Button
              className="h-[54px] flex-[0.77] [transform:_rotate(180deg)] min-w-[115px] mq450:flex-1"
              startIcon={
                <img
                  width="24px"
                  height="24px"
                  src="/third-party-accounts-1.svg"
                />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                background: "#eeeee4",
                borderRadius: "10px",
                "&:hover": { background: "#eeeee4" },
                height: 54,
              }}
            >
              Apple
            </Button>
            <Button
              className="h-[54px] flex-[0.85] [transform:_rotate(180deg)] min-w-[115px] mq450:flex-1"
              startIcon={
                <img
                  width="24px"
                  height="24px"
                  src="/third-party-accounts-2.svg"
                />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                background: "#eeeee4",
                borderRadius: "10px",
                "&:hover": { background: "#eeeee4" },
                height: 54,
              }}
            >
              Google
            </Button>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between opacity-[0.2] gap-[20px] mq675:flex-wrap">
            <img
              className="h-px w-[200px] relative"
              loading="lazy"
              alt=""
              src="/line-2.svg"
            />
            <div className="relative font-medium inline-block min-w-[17px] mq675:w-full">
              Or
            </div>
            <img
              className="h-px w-[200px] relative"
              loading="lazy"
              alt=""
              src="/line-2.svg"
            />
          </div>
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[25px] mq675:gap-[27px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <InputFieldLight
                label="Email Address"
                placeholderPlaceholder="Your email address"
              />
              <div className="self-stretch flex flex-col items-end justify-start gap-[15px]">
                <InputFieldLight
                  label="Password"
                  placeholderPlaceholder="Your password"
                  propMinWidth="72px"
                  propWidth="108px"
                />
                <b className="self-stretch relative text-base font-nunito text-gray-400 text-right">
                  Forgot password?
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[25px]">
              <Button
                className="self-stretch h-[57px] cursor-pointer mq450:pl-5 mq450:pr-5 mq450:box-border"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#eeeee4",
                  fontSize: "20",
                  background: "#141414",
                  borderRadius: "10px",
                  "&:hover": { background: "#141414" },
                  height: 57,
                }}
                onClick={onButtonLightClick}
              >
                Login
              </Button>
              <div className="flex flex-row items-end justify-start gap-[8px]">
                <div className="relative text-base font-semibold font-nunito text-gray-300 text-left">
                  Don’t have an account?
                </div>
                <b className="relative text-base inline-block font-nunito text-gray-400 text-left min-w-[59px] whitespace-nowrap">
                  Sign Up
                </b>
              </div>
            </div>
          </form>
        </div>
        <img
          className="w-[159px] h-[159px] absolute !m-[0] top-[0px] left-[420px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vichayan-logo-png-black1@2x.png"
        />
      </div>
    </main>
  );
};

export default AuthenticationLight;
