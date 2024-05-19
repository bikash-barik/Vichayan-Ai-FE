import { useState, useCallback } from "react";
import Layout from "./Layout";
import PortalPopup from "./PortalPopup";
import Root4 from "./Root4";

const FrameComponent4 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);

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
      <section className="w-[1524px] !m-[0] absolute top-[0px] left-[calc(50%_-_762px)] bg-grey-base-2 box-border overflow-hidden flex flex-row items-center justify-between pt-[30px] px-0 pb-7 gap-[20px] max-w-full z-[1] text-left text-base text-gray-300 font-nunito border-b-[1px] border-solid border-silver-200 mq750:flex-wrap">
        <div className="w-60 flex flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/magechevronleft.svg"
            />
            <b className="flex-1 relative">Back to JavaScript</b>
          </div>
          <h3 className="m-0 relative text-5xl font-bold font-inherit text-gray-400 mq450:text-lgi">
            Hoisting in JavaScript
          </h3>
        </div>
        <div className="w-[175px] flex flex-row items-center justify-start gap-[35px] text-gray-400">
          <div
            className="flex flex-row items-center justify-start gap-[8px] cursor-pointer"
            onClick={openFrame}
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/magefolderopen.svg"
            />
            <div className="relative inline-block min-w-[34px]">Files</div>
          </div>
          <div
            className="flex flex-row items-center justify-start gap-[8px] cursor-pointer"
            onClick={openFrame1}
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/mageshare.svg"
            />
            <div className="relative inline-block min-w-[42px]">Share</div>
          </div>
        </div>
      </section>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Layout onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Root4 onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent4;
