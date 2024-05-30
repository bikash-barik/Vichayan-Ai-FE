import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Root1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonDark1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-[640px] rounded-6xl bg-white overflow-hidden flex flex-col items-end justify-center p-[30px] box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full mq320:gap-[20px]">
      <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-xl text-gray-400 font-nunito">
        <img
          className="w-6 h-6 cursor-pointer relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/magemultiply1.svg"
          onClick={onClose}
        />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] max-w-full">
          <img
            className="h-[50px] w-[50px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/magelogout1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[335px] max-w-full">
            <b className="self-stretch relative mq450:text-base">
              Are you sure logging out?
            </b>
            <div className="self-stretch relative text-base text-gray-300">
              You can always log back in at any time.
            </div>
          </div>
        </div>
      </section>
      <div className="w-[295px] flex flex-row items-center justify-start gap-[15px]">
        <Button
          className="h-[52px] flex-1"
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
          Cancel
        </Button>
        <Button
          className="h-[52px] flex-1 cursor-pointer"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#eeeee4",
            fontSize: "16",
            background: "#141414",
            borderRadius: "10px",
            "&:hover": { background: "#141414" },
            height: 52,
          }}
          onClick={onButtonDark1Click}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Root1;
