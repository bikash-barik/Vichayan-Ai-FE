import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Root3 = ({ onClose }) => {
  return (
    <div className="w-[841px] rounded-6xl bg-white overflow-hidden flex flex-col items-start justify-start p-[30px] box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full text-left text-base text-gray-400 font-nunito mq450:gap-[20px]">
      <header className="self-stretch flex flex-col items-end justify-start text-left text-5xl text-gray-400 font-nunito">
        <img
          className="w-6 h-6 cursor-pointer relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/magemultiply1.svg"
          onClick={onClose}
        />
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-0 gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-center shrink-0">
            <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit whitespace-nowrap">
              Upgrade Your Plan
            </h2>
            <div className="self-stretch relative text-base font-semibold text-gray-300 whitespace-nowrap">
              The free version includes 5 chats and 2 libraries for user
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/line-22.svg"
          />
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-xl text-gray-400 font-nunito mq675:flex-wrap">
        <div className="flex-1 flex flex-col items-center justify-center py-[155px] px-0 box-border min-w-[220px] max-w-full mq650:pt-[101px] mq650:pb-[101px] mq650:box-border">
          <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
            <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-base">
              Upgrade to unlock
            </h3>
            <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-base text-gray-300">
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/magecheck.svg"
                />
                <div className="flex-1 relative font-medium">
                  Unlimited chats
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/magecheck.svg"
                />
                <div className="flex-1 relative font-medium">
                  Unlimited chats
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/magecheck.svg"
                />
                <div className="flex-1 relative font-medium">
                  Unlimited chats
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[175px] pl-0 gap-[5px] text-center mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/magecheck.svg"
                />
                <div className="flex-1 relative font-medium">
                  Unlimited libraries
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[443px] rounded-xl bg-white box-border flex flex-col items-start justify-start py-[13px] px-[19px] gap-[27px] min-w-[443px] max-w-full text-sm text-white border-[1px] border-solid border-gray-100 mq650:min-w-full mq675:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
            <div className="flex-1 rounded-mini bg-gray-400 box-border flex flex-col items-start justify-start py-[13px] px-3.5 gap-[8px] min-w-[126px] border-[1px] border-solid border-linen">
              <div className="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
                <div className="w-[93px] relative inline-block">
                  Billed Yearly
                </div>
                <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-linen rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray-300">
                  <b className="relative text-3xs inline-block font-nunito text-gray-400 text-center min-w-[51px]">
                    Best Value
                  </b>
                </button>
              </div>
              <b className="relative text-base inline-block text-center min-w-[82px]">
                $20/month
              </b>
            </div>
            <div className="flex-1 rounded-mini box-border flex flex-col items-start justify-start py-[13px] px-3.5 gap-[8px] min-w-[126px] text-gray-300 border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-center py-[2.5px] px-0">
                <div className="flex-1 relative">Billed Monthly</div>
              </div>
              <b className="relative text-base inline-block text-gray-400 text-center min-w-[82px]">
                $25/month
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-5xl text-gray-400">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[103px] mq450:text-lgi">
                Vichayan
              </h2>
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-white font-roboto">
                <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-[31px] h-[25px] relative rounded-8xs"
                      loading="lazy"
                      alt=""
                      src="/rectangle-9.svg"
                    />
                  </div>
                  <h2 className="m-0 relative text-inherit inline-block italic font-bold font-inherit min-w-[13px] z-[1] ml-[-22px] mq450:text-lgi">
                    +
                  </h2>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[9.8px] text-center text-sm text-gray-300">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative font-medium inline-block min-w-[64px]">
                  Plan Price
                </div>
                <div className="relative font-medium inline-block min-w-[73px]">
                  $108 / year
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="relative font-medium inline-block min-w-[98px]">
                  Yearly Discount
                </div>
                <div className="relative font-medium inline-block min-w-[26px] whitespace-nowrap">
                  $48
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative font-medium inline-block min-w-[57px]">
                  Total Bill
                </div>
                <div className="relative font-medium inline-block min-w-[64px]">
                  $60 / year
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/line-211.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-gray-400">
                <b className="relative inline-block min-w-[80px]">Due Today</b>
                <b className="relative inline-block min-w-[29px] whitespace-nowrap">
                  $60
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-center text-3xs text-gray-300">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[78px]">
                Payment Method
              </div>
              <div className="flex flex-row items-center justify-start gap-[2px]">
                <img
                  className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/magelockfill.svg"
                />
                <div className="relative font-medium inline-block min-w-[76px]">
                  Secure Checkout
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq450:flex-wrap">
              <TextField
                className="[border:none] bg-[transparent] h-10 flex-1 font-nunito font-medium text-sm text-gray-300 min-w-[174px]"
                placeholder="Card Number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <img
                      width="20px"
                      height="20px"
                      src="/magecreditcardfill.svg"
                    />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#848484" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    paddingLeft: "15px",
                    borderRadius: "10px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "10px",
                    color: "#7d7d7d",
                  },
                }}
              />
              <div className="w-[125px] flex flex-row items-start justify-start gap-[10px]">
                <button className="cursor-pointer py-2 px-[9px] bg-[transparent] flex-1 rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-gray-100 hover:bg-dimgray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                  <div className="relative text-sm font-medium font-nunito text-gray-300 text-left inline-block min-w-[46px]">
                    MM/YY
                  </div>
                </button>
                <button className="cursor-pointer py-2 px-[9px] bg-[transparent] w-[49px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-gray-100 hover:bg-dimgray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                  <div className="relative text-sm font-medium font-nunito text-gray-300 text-left inline-block min-w-[29px]">
                    CVC
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Button
            className="self-stretch h-[57px] mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#eeeee4",
              fontSize: "20",
              background: "#141414",
              borderRadius: "10px",
              "&:hover": { background: "#141414" },
              height: 57,
            }}
          >
            Pay Now
          </Button>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center">
        <b className="relative [text-decoration:underline]">
          Continue with our free version
        </b>
      </div>
    </div>
  );
};

export default Root3;
