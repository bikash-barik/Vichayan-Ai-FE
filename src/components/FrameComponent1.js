import { useMemo } from "react";

const FrameComponent1 = ({
  scienceTechnology,
  researchOnScientificInqui,
  propDisplay,
  propMinWidth,
  propTextAlign,
}) => {
  const scienceTechnologyStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const researchOnScientificStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="w-[352px] rounded-xl box-border flex flex-col items-start justify-start py-[13px] px-3.5 gap-[8px] max-w-full text-left text-sm text-gray-400 font-nunito border-[1px] border-solid border-lightgray-200">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="relative font-semibold" style={scienceTechnologyStyle}>
          {scienceTechnology}
        </div>
      </div>
      <div
        className="self-stretch relative text-xs text-gray-300 text-justify"
        style={researchOnScientificStyle}
      >
        {researchOnScientificInqui}
      </div>
    </div>
  );
};

export default FrameComponent1;
