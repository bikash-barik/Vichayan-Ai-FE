import { Button } from "@mui/material";

const Root1 = ({ onClose }) => {
  return (
    <div className="w-[530px] rounded-6xl bg-white overflow-hidden flex flex-col items-end justify-center p-[30px] box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full mq265:gap-[20px]">
      <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-xl text-gray-400 font-nunito">
        <img
          className="w-6 h-6 cursor-pointer relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/magemultiply1.svg"
          onClick={onClose}
        />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] max-w-full">
          <div className="h-[64.5px] w-[64.5px] rounded-[72.73px] bg-darkgray-200 flex flex-row items-start justify-start pt-[7.3px] pb-[7.2px] pr-[7.2px] pl-[7.3px] box-border">
            <div className="h-[50px] w-[50px] rounded-51xl bg-tomato overflow-hidden shrink-0 flex flex-row items-center justify-center p-2.5 box-border">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/mageexclamationtriangle.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[253px] max-w-full">
            <b className="self-stretch relative mq450:text-base">
              Delete this chat?
            </b>
            <div className="self-stretch relative text-base text-gray-300">
              Deleting this chat will permanently remove from activity and this
              can not be undone.
            </div>
          </div>
        </div>
      </section>
      <div className="w-[235px] flex flex-row items-center justify-start gap-[15px]">
        <Button
          className="h-[52px] flex-[0.72]"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#141414",
            fontSize: "16",
            borderColor: "#141414",
            borderRadius: "10px",
            "&:hover": { borderColor: "#141414" },
            height: 52,
          }}
          onClick={onClose}
        >
          Keep
        </Button>
        <Button
          className="h-[52px] flex-1"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#eeeee4",
            fontSize: "16",
            background: "#fc3a3a",
            borderRadius: "10px",
            "&:hover": { background: "#fc3a3a" },
            height: 52,
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Root1;
