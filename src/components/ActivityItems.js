import { useState, useCallback } from "react";
import Root from "./Root";
import PortalPopup from "./PortalPopup";
import Root1 from "./Root1";
import JavascriptItems from "./JavascriptItems";
import FrameComponent from "./FrameComponent";

const ActivityItems = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);
  const [isFrame4Open, setFrame4Open] = useState(false);
  const [isFrame5Open, setFrame5Open] = useState(false);
  const [isFrame6Open, setFrame6Open] = useState(false);

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

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  const openFrame4 = useCallback(() => {
    setFrame4Open(true);
  }, []);

  const closeFrame4 = useCallback(() => {
    setFrame4Open(false);
  }, []);

  const openFrame5 = useCallback(() => {
    setFrame5Open(true);
  }, []);

  const closeFrame5 = useCallback(() => {
    setFrame5Open(false);
  }, []);

  const openFrame6 = useCallback(() => {
    setFrame6Open(true);
  }, []);

  const closeFrame6 = useCallback(() => {
    setFrame6Open(false);
  }, []);

  return (
    <>
      <div className="h-[966px] w-[838px] hide-scrollbar overflow-y-auto shrink-0 flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border gap-[35px] max-w-full text-left text-5xl text-gray-400 font-nunito mq450:gap-[17px] mq725:h-auto">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] shrink-0 max-w-full">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-between py-2.5 px-0 box-border gap-[20px] max-w-full mq725:flex-wrap">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
              Today - Wednesday, May 1, 2024
            </h3>
            <div
              className="flex flex-row items-center justify-start gap-[8px] cursor-pointer text-base"
              onClick={openFrame}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/magetrash3.svg"
              />
              <div className="relative font-semibold inline-block min-w-[85px]">
                Remove All
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-white flex flex-col items-center justify-start p-5 box-border gap-[15px] max-w-full text-base">
            <JavascriptItems />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
              alt=""
              src="/line-5.svg"
            />
            <JavascriptItems propDisplay="inline-block" propMinWidth="87px" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] shrink-0 max-w-full">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-between py-2.5 px-0 box-border gap-[20px] max-w-full mq725:flex-wrap">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
              Today - Wednesday, May 1, 2024
            </h3>
            <div
              className="flex flex-row items-center justify-start gap-[8px] cursor-pointer text-base"
              onClick={openFrame1}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/magetrash3.svg"
              />
              <div className="relative font-semibold inline-block min-w-[85px]">
                Remove All
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-white flex flex-col items-center justify-start p-5 box-border gap-[15px] max-w-full text-base">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
                <div className="flex flex-row items-center justify-start max-w-[calc(100%_-_40px)]">
                  <b className="relative">
                    Write a short paragraph on what is javascript hoisting.
                  </b>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/magemultiply-3.svg"
                  onClick={openFrame2}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start max-w-full text-sm text-gray-300 mq450:gap-[26px] mq1000:gap-[52px]">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch relative font-semibold">
                    JavaScript hoisting is a behind-the-scenes process where
                    variable and function declarations are moved to the top of
                    their ...
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
              alt=""
              src="/line-5.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
                <div className="flex flex-row items-center justify-start max-w-[calc(100%_-_40px)]">
                  <b className="relative">
                    Write a short paragraph on what is javascript hoisting.
                  </b>
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/magemultiply-3.svg"
                  onClick={openFrame3}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start max-w-full text-sm text-gray-300 mq450:gap-[26px] mq1000:gap-[52px]">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch relative font-semibold">
                    JavaScript hoisting is a behind-the-scenes process where
                    variable and function declarations are moved to the top of
                    their ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] shrink-0 max-w-full">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-between py-2.5 px-0 box-border gap-[20px] max-w-full mq725:flex-wrap">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
              Today - Wednesday, May 1, 2024
            </h3>
            <div
              className="flex flex-row items-center justify-start gap-[8px] cursor-pointer text-base"
              onClick={openFrame4}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/magetrash3.svg"
              />
              <div className="relative font-semibold inline-block min-w-[85px]">
                Remove All
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-white flex flex-col items-center justify-start p-5 box-border gap-[15px] max-w-full">
            <JavascriptItems propDisplay="inline-block" propMinWidth="87px" />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
              alt=""
              src="/line-5.svg"
            />
            <JavascriptItems propDisplay="unset" propMinWidth="unset" />
          </div>
        </div>
        {/* <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full shrink-0">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-between py-2.5 px-0 box-border max-w-full gap-[20px] mq725:flex-wrap">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
              Today - Wednesday, May 1, 2024
            </h3>
            <div
              className="flex flex-row items-center justify-start gap-[8px] cursor-pointer text-base"
              onClick={openFrame5}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/magetrash3.svg"
              />
              <div className="relative font-semibold">Remove All</div>
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-white flex flex-col items-center justify-start p-5 box-border gap-[15px] max-w-full text-base">
            <FrameComponent />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-5.svg"
            />
            <FrameComponent />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full shrink-0">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-between py-2.5 px-0 box-border max-w-full gap-[20px] mq725:flex-wrap">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
              Today - Wednesday, May 1, 2024
            </h3>
            <div
              className="flex flex-row items-center justify-start gap-[8px] cursor-pointer text-base"
              onClick={openFrame6}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/magetrash3.svg"
              />
              <div className="relative font-semibold">Remove All</div>
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-white flex flex-col items-center justify-start p-5 box-border gap-[15px] max-w-full">
            <FrameComponent />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-5.svg"
            />
            <FrameComponent />
          </div>
        </div> */}
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Root onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Root1 onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <Root1 onClose={closeFrame3} />
        </PortalPopup>
      )}
      {isFrame4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame4}
        >
          <Root onClose={closeFrame4} />
        </PortalPopup>
      )}
      {isFrame5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame5}
        >
          <Root onClose={closeFrame5} />
        </PortalPopup>
      )}
      {isFrame6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame6}
        >
          <Root onClose={closeFrame6} />
        </PortalPopup>
      )}
    </>
  );
};

export default ActivityItems;
