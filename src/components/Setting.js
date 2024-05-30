import { Button } from "@mui/material";
import PortalPopup from "./PortalPopup";
import Root from "./Root";
import { useCallback, useState } from "react";

// eslint-disable-next-line no-unused-vars
const Setting = ({ onClose }) => {
  const [isFrame1Open, setFrame1Open] = useState(false);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  return (
    <div className="w-[744px] rounded-6xl bg-white overflow-auto hide-scrollbar flex flex-col items-end justify-start pt-[30px] px-[30px] pb-[31px] box-border gap-[30px] leading-[normal] tracking-[normal] max-w-full max-h-full mq450:gap-[15px]">
      <header className="self-stretch flex flex-col items-end justify-start text-left text-5xl text-gray-400 font-nunito">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/magemultiply1.svg"
          onClick={onClose}
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
            Settings
          </h3>
          <div className="self-stretch relative text-base font-semibold text-gray-300 whitespace-nowrap">{`Organize & group your researches`}</div>
        </div>
      </header>
      <section className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full text-left text-base text-gray-300 font-nunito mq675:gap-[20px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[392px] pl-0 gap-[20px] border-b-[1px] border-solid border-gray-600 mq450:flex-wrap mq450:p-5 mq450:box-border mq675:pr-[196px] mq675:box-border">
          <div className="h-[26px] w-[59px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[4px] text-gray-400">
            <b className="relative inline-block min-w-[59px]">General</b>
            <img
              className="self-stretch h-0.5 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/line-221.svg"
            />
          </div>
          <div className="w-[90px] flex flex-col items-start justify-start gap-[4px]">
            <div className="relative inline-block min-w-[90px]">
              Accessibility
            </div>
            <img
              className="self-stretch h-0 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-[59px] flex flex-col items-start justify-start gap-[4px]">
            <div className="relative inline-block min-w-[59px]">Security</div>
            <img
              className="self-stretch h-0 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[50px] max-w-full shrink-0 text-xl text-gray-400 mq675:gap-[25px]">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start pt-0 px-0 pb-0 box-border relative gap-[20px] max-w-full">
            <img
              className="h-24 w-24 relative rounded-mini object-cover"
              alt=""
              src="/photo-by-wells-chan@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[3px] min-w-[299px] max-w-full">
              <b className="self-stretch relative mq450:text-base">
                Kanun Nayak
              </b>
              <div className="self-stretch relative text-base text-gray-300 whitespace-nowrap">
                kanun.nayak@gmail.com
              </div>
            </div>
            <button className="cursor-pointer py-2.5 px-3.5 bg-[transparent] w-[88px] rounded-3xs box-border flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-gray-100 hover:bg-dimgray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
              <input
                className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                type="checkbox"
              />
              <b className="relative text-sm inline-block font-nunito text-gray-400 text-left min-w-[26px]">
                Edit
              </b>
            </button>
            <div className="h-[25px] w-[25px] !m-[0] absolute top-[73px] left-[76px] rounded-xl bg-linen flex flex-row items-center justify-start p-[5px] box-border z-[1]">
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/mageedit-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full mq675:gap-[20px]">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[40px] max-w-full mq675:gap-[20px]">
              <div className="flex-1 flex flex-col items-end justify-start gap-[5px] min-w-[344px] max-w-full mq450:min-w-full">
                <b className="self-stretch relative mq450:text-base">
                  Language Preferences
                </b>
                <div className="self-stretch relative text-base font-medium text-gray-300">
                  Choose your preferred language for the app interface.
                </div>
              </div>
              <button className="cursor-pointer py-2.5 px-3.5 bg-[transparent] rounded-3xs overflow-x-auto flex flex-row items-center justify-start gap-[7.5px] border-[1px] border-solid border-gray-100">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/mageglobe1.svg"
                />
                <b className="relative text-sm inline-block font-nunito text-gray-400 text-left min-w-[26px]">
                  Eng
                </b>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/magechevrondown1.svg"
                />
              </button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[40px] max-w-full mq675:gap-[20px]">
              <div className="flex-1 flex flex-col items-end justify-start gap-[5px] min-w-[351px] max-w-full mq450:min-w-full">
                <b className="self-stretch relative mq450:text-base">
                  Export Chat Logs
                </b>
                <div className="self-stretch relative text-base font-medium text-gray-300">
                  Download a copy of your conversation history for your records
                  or offline viewing.
                </div>
              </div>
              <Button
                className="h-[49px] w-[104px]"
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#141414",
                  fontSize: "14",
                  borderColor: "#848484",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#848484" },
                  width: 104,
                  height: 49,
                }}
              >
                Export
              </Button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[40px] max-w-full mq675:gap-[20px]">
              <div className="flex-1 flex flex-col items-end justify-start gap-[5px] min-w-[351px] max-w-full mq450:min-w-full">
                <b className="self-stretch relative mq450:text-base">
                  Delete Account
                </b>
                <div className="self-stretch relative text-base font-medium text-gray-300">
                  Permanently remove your account and all associated data.
                </div>
              </div>
              <Button
                className="h-[49px] w-[104px]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#eeeee4",
                  fontSize: "14",
                  background: "#fc3a3a",
                  borderRadius: "10px",
                  "&:hover": { background: "#fc3a3a" },
                  width: 104,
                  height: 49,
                }}
                onClick={openFrame1}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </section>
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Root onClose={closeFrame1} />
        </PortalPopup>
      )}
    </div>
  );
};

export default Setting;
