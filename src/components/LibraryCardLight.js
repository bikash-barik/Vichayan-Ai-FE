const LibraryCardLight = ({ onCardButtonsContainerClick }) => {
  return (
    <div className="w-[350px] rounded-xl bg-white flex flex-col items-end justify-between p-[15px] box-border min-h-[240px] max-w-full text-left text-sm text-gray-400 font-nunito">
      <img
        className="w-6 h-6 rounded-8xs overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/magedotshorizontal@2x.png"
      />
      <div className="self-stretch flex flex-col items-center justify-end gap-[8px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[2px] text-xl">
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-base">{`Society & Humanity`}</h3>
          <div className="self-stretch relative text-xs text-darkslategray-300">
            02 Apr 2024
          </div>
        </div>
        <div className="self-stretch relative text-darkslategray-200 whitespace-pre-wrap">
          Research on human society, behavior, culture, and interactions such as
          psychology, sociology, anthropology.
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <img className="h-0.5 w-[220px] relative" alt="" src="/line-8.svg" />
          <div
            className="flex flex-row items-center justify-start gap-[2px] cursor-pointer"
            onClick={onCardButtonsContainerClick}
          >
            <div className="relative inline-block min-w-[35px]">Open</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/magearrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCardLight;
