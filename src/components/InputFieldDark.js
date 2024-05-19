import { useMemo } from "react";

const InputFieldDark = ({
  label,
  placeholderPlaceholder,
  propDisplay,
  propMinWidth,
  propWidth,
}) => {
  const label1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const placeholder1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-gray-400 font-nunito">
      <div
        className="relative font-semibold inline-block min-w-[34px]"
        style={label1Style}
      >
        {label}
      </div>
      <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-[13px] px-[15px] border-[1px] border-solid border-gray-100">
        <input
          className="w-[152px] [border:none] [outline:none] font-medium font-nunito text-base bg-[transparent] h-[22px] relative text-gray-300 text-left inline-block p-0"
          placeholder={placeholderPlaceholder}
          type="text"
          style={placeholder1Style}
        />
      </div>
    </div>
  );
};

export default InputFieldDark;
