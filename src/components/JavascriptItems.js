import { useState, useMemo, useCallback } from "react";
import Root1 from "./Root1";
import PortalPopup from "./PortalPopup";

const JavascriptItems = ({ propDisplay, propMinWidth }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const attached1FileStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0 text-left text-base text-gray-400 font-nunito">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[20px] max-w-[calc(100%_-_40px)] mq725:flex-wrap">
            <b className="relative inline-block max-w-full">
              Write a short paragraph on what is javascript hoisting.
            </b>
            <button className="cursor-pointer py-[3px] px-3.5 bg-[transparent] w-[85px] rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-lightgray-200 hover:bg-darkgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgray-100">
              <div className="relative text-xs font-semibold font-nunito text-gray-400 text-left inline-block min-w-[55px]">
                JavaScript
              </div>
            </button>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/magemultiply-3.svg"
            onClick={openFrame}
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-sm text-gray-300 mq1000:flex-wrap">
          <div className="w-[583px] flex flex-col items-start justify-start gap-[15px] max-w-full">
            <div className="self-stretch relative font-semibold">
              JavaScript hoisting is a behind-the-scenes process where variable
              and function declarations are moved to the top of their ...
            </div>
            <div className="flex flex-row items-start justify-start gap-[7px] text-xs text-gray-400">
              <div
                className="relative font-semibold inline-block min-w-[87px]"
                style={attached1FileStyle}
              >
                Attached 1 file :
              </div>
              <div className="relative [text-decoration:underline] font-semibold text-mediumslateblue">
                JavaScript Essentials.pdf
              </div>
            </div>
          </div>
          <img
            className="h-[68px] w-[70px] relative rounded-3xs object-contain"
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root1 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default JavascriptItems;
