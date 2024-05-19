import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import Setting from "./Setting";
import PortalPopup from "./PortalPopup";
import Root3 from "./Root3";
import Root1 from "./Root1";

const FrameComponent2 = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);

  const openSetting = useCallback(() => {
    setSettingOpen(true);
  }, []);

  const closeSetting = useCallback(() => {
    setSettingOpen(false);
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-left text-base text-gray-400 font-nunito">
        <div className="self-stretch flex flex-col items-start justify-start text-dimgray-100">
          <div
            className="self-stretch rounded-mini flex flex-row items-start justify-start p-[15px] gap-[10px] cursor-pointer"
            onClick={openSetting}
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/magesettings.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="self-stretch relative">Settings</div>
            </div>
          </div>
          <div className="self-stretch rounded-mini flex flex-row items-start justify-start p-[15px] gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/magetube.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="self-stretch relative">Support</div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[-10px_42px_12px_rgba(0,_0,_0,_0),_-7px_27px_11px_rgba(0,_0,_0,_0.01),_-4px_15px_9px_rgba(0,_0,_0,_0.05),_-2px_7px_7px_rgba(0,_0,_0,_0.09),_0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-mini bg-linen flex flex-col items-start justify-start py-5 px-[15px] gap-[15px] text-5xl">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[103px] mq450:text-lgi">
              Vichayan
            </h2>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-white font-roboto">
              <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-[31px] h-[25px] relative rounded-8xs"
                    loading="lazy"
                    alt=""
                    src="/rectangle-9.svg"
                  />
                </div>
                <h2 className="m-0 relative text-inherit inline-block italic font-bold font-inherit min-w-[13px] z-[1] ml-[-22px] mq450:text-lgi">
                  +
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-sm text-gray-300">
            Upgrade for image upload, smarter AI, and more Pro Search
          </div>
          <Button
            className="self-stretch h-[42px] cursor-pointer"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#eeeee4",
              fontSize: "16",
              background: "#e9a53f",
              border: "#e9a53f solid 1px",
              borderRadius: "10px",
              "&:hover": { background: "#e9a53f" },
              height: 42,
            }}
            onClick={openFrame}
          >
            Get Vichayan Plus
          </Button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[53px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
            <img
              className="h-[45px] w-[45px] relative rounded-mini object-cover min-h-[45px]"
              loading="lazy"
              alt=""
              src="/photo-by-wells-chan@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[3px]">
              <b className="relative inline-block min-w-[98px]">Kanun Nayak</b>
              <div className="relative text-sm text-gray-300 whitespace-nowrap">
                kanun.nayak@gmail.com
              </div>
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/magelogout.svg"
            onClick={openFrame1}
          />
        </div>
      </div>
      {isSettingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSetting}
        >
          <Setting onClose={closeSetting} />
        </PortalPopup>
      )}
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root3 onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Root1 onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent2;
