import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Root2 = ({ onClose }) => {
  return (
    <div className="w-[744px] rounded-6xl bg-white overflow-hidden flex flex-col items-end justify-end p-[30px] box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full text-left text-5xl text-gray-400 font-nunito mq450:gap-[20px]">
      <div className="self-stretch flex flex-col items-end justify-start">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/magemultiply1.svg"
        />
        <div className="self-stretch h-[49px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border gap-[16px]">
          <b className="self-stretch relative mq450:text-lgi">Add to Library</b>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/line-22.svg"
          />
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-xl text-gray-400 font-nunito mq675:gap-[17px]">
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[52px] font-nunito font-medium text-base text-gray-300"
          placeholder="Search library..."
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#848484" },
            "& .MuiInputBase-root": { height: "52px", borderRadius: "10px" },
            "& .MuiInputBase-input": { color: "#7d7d7d" },
          }}
        />
        <div className="w-[684px] overflow-x-auto flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="w-[684px] rounded-xl box-border flex flex-col items-start justify-center py-[13px] px-3.5 gap-[2px] border-[1px] border-solid border-gray-100">
            <b className="self-stretch relative mq450:text-base">{`Society & Humanity`}</b>
            <div className="self-stretch relative text-xs text-darkslategray-300">
              02 Apr 2024
            </div>
          </div>
          <div className="w-[684px] rounded-xl box-border flex flex-col items-start justify-center py-[13px] px-3.5 gap-[2px] border-[1px] border-solid border-gray-100">
            <b className="self-stretch relative mq450:text-base">{`Society & Humanity`}</b>
            <div className="self-stretch relative text-xs text-darkslategray-300">
              02 Apr 2024
            </div>
          </div>
          <div className="w-[684px] rounded-xl box-border flex flex-col items-start justify-center py-[13px] px-3.5 gap-[2px] border-[1px] border-solid border-gray-100">
            <b className="self-stretch relative mq450:text-base">{`Society & Humanity`}</b>
            <div className="self-stretch relative text-xs text-darkslategray-300">
              02 Apr 2024
            </div>
          </div>
        </div>
      </section>
      <div className="w-[318px] flex flex-row items-center justify-start gap-[15px]">
        <Button
          className="h-[57px] flex-1"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#141414",
            fontSize: "20",
            borderColor: "#141414",
            borderRadius: "10px",
            "&:hover": { borderColor: "#141414" },
            height: 57,
          }}
        >
          Create Library
        </Button>
        <Button
          className="h-[57px] w-[110px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#eeeee4",
            fontSize: "20",
            background: "#141414",
            borderRadius: "10px",
            "&:hover": { background: "#141414" },
            width: 110,
            height: 57,
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default Root2;
