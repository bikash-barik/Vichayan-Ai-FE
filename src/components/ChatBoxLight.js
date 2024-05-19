import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ChatBoxLight = () => {
  const navigate = useNavigate();

  const onChatBoxLightClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-start max-w-full cursor-pointer text-left text-base text-gray-300 font-nunito"
      onClick={onChatBoxLightClick}
    >
      <div className="flex-1 rounded-mini bg-white flex flex-row items-start justify-between p-5 box-border max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative inline-block min-w-[106px]">
            Ask anything...
          </div>
        </div>
        <div className="w-[132px] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-row items-start justify-start gap-[14.5px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/mageattachment.svg"
            />
            <div className="h-[19.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
              <div className="w-px h-4 relative box-border border-r-[1px] border-solid border-lightgray-100" />
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/bifilter.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <img
                className="w-px h-[15px] relative object-contain"
                alt=""
                src="/line-21.svg"
              />
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/carbonsendfilled.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxLight;
