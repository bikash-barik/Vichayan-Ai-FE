import { useState, useCallback } from "react";
import Layout from "./Layout";
import PortalPopup from "./PortalPopup";
import Root4 from "./Root4";
import Root2 from "./Root2";

const TitleContainer = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);

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

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <section className="w-full box-border overflow-hidden flex flex-row items-center justify-between pt-[30px] px-0 pb-7 max-w-full gap-[20px] text-left text-13xl text-gray-400 font-nunito border-b-[1px] border-solid border-silver-200 mq750:flex-wrap">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi mq1050:text-7xl">
          JavaScript Hoisting
        </h1>
        <nav className="m-0 flex flex-row items-center justify-start gap-[35px] max-w-full whitespace-nowrap text-left text-base text-gray-400 font-nunito mq450:flex-wrap mq450:gap-[17px]">
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
          <div
            className="flex flex-row items-center justify-start gap-[8px] cursor-pointer"
            onClick={openFrame2}
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/magebookmark.svg"
            />
            <div className="relative inline-block min-w-[104px]">
              Add to Library
            </div>
          </div>
        </nav>
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
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Root2 onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default TitleContainer;
