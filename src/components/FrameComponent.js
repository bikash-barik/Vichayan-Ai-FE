import ChatBoxLight from "./ChatBoxLight";
import FrameComponent1 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-gray-400 font-nunito">
      <div className="w-[732px] flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[10px] text-center">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-[50px] w-[50px] relative object-cover"
              loading="lazy"
              alt=""
              src="/vichayan-logo-png-black@2x.png"
            />
          </div>
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi mq1050:text-7xl">
            How can I help you?
          </h1>
        </div>
        <ChatBoxLight />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px_24px] min-h-[203px] max-w-full text-sm">
          <FrameComponent1
            scienceTechnology={`Science & Technology`}
            researchOnScientificInqui="Research on scientific inquiry, technological innovation, engineering principles, and mathematical concepts."
          />
          <FrameComponent1
            scienceTechnology={`Society & Humanity`}
            researchOnScientificInqui="Research on  human society, behavior, culture, and interactions such as psychology, sociology, anthropology."
            propDisplay="inline-block"
            propMinWidth="127px"
            propTextAlign="left"
          />
          <FrameComponent1
            scienceTechnology="Health Science"
            researchOnScientificInqui="Research focuses on the study of human health, well-being, diseases, medical treatments, and healthcare systems."
            propDisplay="inline-block"
            propMinWidth="96px"
            propTextAlign="justify"
          />
          <FrameComponent1
            scienceTechnology={`Earth & Environment`}
            researchOnScientificInqui="Research  involves the study of the Earth's natural systems, environmental processes, ecosystems."
            propDisplay="unset"
            propMinWidth="unset"
            propTextAlign="justify"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
