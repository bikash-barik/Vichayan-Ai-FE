import { useMemo } from "react";

const ChatLight = ({
  propMarginTop,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propDisplay2,
  propMinWidth2,
  propDisplay3,
  propMinWidth3,
  propDisplay4,
  propMinWidth4,
}) => {
  const chatLightStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const sourcesStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const seeAllStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const freecodecampStyle = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  const youTubeStyle = useMemo(() => {
    return {
      display: propDisplay3,
      minWidth: propMinWidth3,
    };
  }, [propDisplay3, propMinWidth3]);

  const geeksForGeeksStyle = useMemo(() => {
    return {
      display: propDisplay4,
      minWidth: propMinWidth4,
    };
  }, [propDisplay4, propMinWidth4]);

  return (
    <div
      className="mt-[-1274px] self-stretch flex flex-col items-start justify-start gap-[35px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-xl text-gray-400 font-nunito mq750:gap-[17px]"
      style={chatLightStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq750:flex-wrap">
        <img
          className="h-[35px] w-[35px] relative rounded-xl object-cover"
          alt=""
          src="/photo-by-wells-chan-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[447px] max-w-full mq750:min-w-full">
          <div className="self-stretch relative font-semibold mq450:text-base">
            Write a short paragraph on what is javascript hoisting.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-base text-gray-300 mq750:flex-wrap">
        <img
          className="h-[35px] w-[35px] relative overflow-hidden shrink-0"
          alt=""
          src="/vif-2.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[447px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative font-semibold">
              JavaScript hoisting is a behind-the-scenes process where variable
              and function declarations are moved to the top of their containing
              scope during the compilation phase. This means that regardless of
              where variables and functions are declared in the code, they are
              effectively "hoisted" to the top of their scope, allowing them to
              be accessed before they are actually defined in the code. However,
              it's important to note that only the declarations are hoisted, not
              the initializations or assignments. This behavior can sometimes
              lead to unexpected results if not understood properly, so it's
              crucial for JavaScript developers to be aware of hoisting in order
              to write reliable and predictable code.
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/magethumbsup.svg"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/magethumbsdown.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/streamlinearrowroundleft.svg"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/magecopy.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-xl text-gray-400">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] min-w-[98px] max-w-full">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/magechecklist.svg"
                  />
                </div>
                <b className="relative mq450:text-base" style={sourcesStyle}>
                  Sources
                </b>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 text-sm text-dimgray-200">
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative font-semibold" style={seeAllStyle}>
                    See All
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/magechevronright.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-[15px] box-border max-w-full text-xs text-gray-300">
              <div className="flex-1 flex flex-col items-start justify-start gap-[9.5px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[536px] pl-0 box-border gap-[5px] max-w-[calc(100%_-_24px)] mq750:pr-[268px] mq750:box-border mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[15px] w-[15px] relative rounded-4xl-5 object-contain"
                        alt=""
                        src="/image-21@2x.png"
                      />
                      <div
                        className="relative font-semibold"
                        style={freecodecampStyle}
                      >
                        freecodecamp
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/magearrowright.svg"
                    />
                  </div>
                  <div className="self-stretch relative text-sm font-semibold text-dimgray-200">
                    What is hoistng in Javascript | Hois...
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-500" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[566px] pl-0 box-border gap-[5px] max-w-[calc(100%_-_24px)] mq750:pr-[283px] mq750:box-border mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[15px] w-[15px] relative rounded-3xs object-contain"
                        alt=""
                        src="/image-28@2x.png"
                      />
                      <div
                        className="relative font-semibold"
                        style={youTubeStyle}
                      >
                        YouTube
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/magearrowright.svg"
                    />
                  </div>
                  <div className="self-stretch relative text-sm font-semibold text-dimgray-200">
                    What is hoistng in Javascript | Hois...
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-500" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[524px] pl-0 box-border gap-[5px] max-w-[calc(100%_-_24px)] mq750:pr-[262px] mq750:box-border mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[15px] w-[15px] relative rounded-3xs object-contain"
                        alt=""
                        src="/image-22@2x.png"
                      />
                      <div
                        className="relative font-semibold"
                        style={geeksForGeeksStyle}
                      >
                        Geeks for Geeks
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/magearrowright.svg"
                    />
                  </div>
                  <div className="self-stretch relative text-sm font-semibold text-dimgray-200">
                    What is hoistng in Javascript | Hois...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLight;
