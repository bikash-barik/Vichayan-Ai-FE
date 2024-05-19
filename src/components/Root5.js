import { Button } from "@mui/material";
import InputFieldDark from "./InputFieldDark";

const Root = ({ onClose }) => {
  return (
    <div className="w-[744px] rounded-6xl bg-white overflow-hidden flex flex-col items-end justify-start p-[30px] box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full mq450:gap-[20px]">
      <section className="self-stretch flex flex-col items-end justify-start text-left text-5xl text-gray-400 font-nunito">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/magemultiply1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi">
              Create Library
            </h3>
            <div className="relative text-base font-semibold text-gray-300">{`Organize & group your researches`}</div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/line-22.svg"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[25px] text-left text-sm text-gray-400 font-nunito">
        <InputFieldDark
          label="Title"
          placeholderPlaceholder="Your title goes here..."
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="relative font-semibold">Description (Optional)</div>
          <textarea
            className="bg-[transparent] h-[163px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start p-[15px] font-nunito font-medium text-sm text-gray-300 border-[1px] border-solid border-gray-100"
            placeholder="Description of the library"
            rows={8}
            cols={34}
          />
        </div>
        <InputFieldDark
          label="AI Prompt (Optional)"
          placeholderPlaceholder="Customized instruction for the AI"
          propDisplay="unset"
          propMinWidth="unset"
          propWidth="238px"
        />
      </section>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-[352px] gap-[20px] mq450:pl-5 mq450:box-border mq675:pl-44 mq675:box-border">
        <Button
          className="h-[57px] flex-1 min-w-[101px]"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#141414",
            fontSize: "20",
            borderColor: "#141414",
            borderRadius: "10px",
            "&:hover": { borderColor: "#141414" },
          }}
        >
          Cancel
        </Button>
        <Button
          className="h-[57px] flex-1 min-w-[101px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#eeeee4",
            fontSize: "20",
            background: "#141414",
            borderRadius: "10px",
            "&:hover": { background: "#141414" },
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Root;
