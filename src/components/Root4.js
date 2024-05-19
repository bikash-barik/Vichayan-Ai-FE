import { Button } from "@mui/material";

const Root4 = ({ onClose }) => {
  return (
    <div className="w-[530px] rounded-6xl bg-white overflow-hidden flex flex-col items-start justify-start p-[30px] box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full text-left text-5xl text-gray-400 font-nunito mq450:gap-[20px]">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[16px]">
        <div className="self-stretch flex flex-col items-end justify-start shrink-0">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            alt=""
            src="/magemultiply1.svg"
          />
          <b className="self-stretch relative mq450:text-lgi">
            Share this chat
          </b>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/line-221.svg"
        />
      </div>
      <section className="self-stretch flex flex-col items-start justify-start gap-[30px] text-left text-base text-gray-300 font-nunito">
        <div className="self-stretch rounded-3xs flex flex-row items-center justify-between gap-[20px] border-[1px] border-solid border-gray-100 mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start py-0 px-[15px]">
            <div className="relative font-medium">
              https://vichayan.ai/share/...
            </div>
          </div>
          <Button
            className="h-[52px] w-[163px]"
            startIcon={<img width="20px" height="20px" src="/magelink.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#eeeee4",
              fontSize: "16",
              background: "#141414",
              borderRadius: "10px",
              "&:hover": { background: "#141414" },
              width: 163,
              height: 52,
            }}
          >
            Copy Link
          </Button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative">Or share on</div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
            <Button
              className="h-[54px] flex-[0.7387] min-w-[146px] mq450:flex-1"
              startIcon={
                <img width="20px" height="20px" src="/primetwitter.png" />
              }
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                borderColor: "#141414",
                borderRadius: "10px",
                "&:hover": { borderColor: "#141414" },
                height: 54,
              }}
            >
              Twitter
            </Button>
            <Button
              className="h-[54px] flex-1 min-w-[146px] mq450:flex-1"
              startIcon={
                <img width="24px" height="24px" src="/magewhatsapp.svg" />
              }
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                borderColor: "#141414",
                borderRadius: "10px",
                "&:hover": { borderColor: "#141414" },
                height: 54,
              }}
            >
              Whatsapp
            </Button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
            <Button
              className="h-[54px] flex-1 min-w-[146px] mq450:flex-1"
              startIcon={
                <img width="24px" height="24px" src="/magefacebookcircle.svg" />
              }
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                borderColor: "#141414",
                borderRadius: "10px",
                "&:hover": { borderColor: "#141414" },
                height: 54,
              }}
            >
              Facebook
            </Button>
            <Button
              className="h-[54px] flex-[0.8641] min-w-[146px] mq450:flex-1"
              startIcon={
                <img width="24px" height="24px" src="/magediscord.svg" />
              }
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#141414",
                fontSize: "16",
                borderColor: "#141414",
                borderRadius: "10px",
                "&:hover": { borderColor: "#141414" },
                height: 54,
              }}
            >
              Discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root4;
