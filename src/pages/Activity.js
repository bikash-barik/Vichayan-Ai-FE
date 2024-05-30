import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import ActivityItems from "../components/ActivityItems";
import Sidebar from "../layout/Sidebar";

const Activity = () => {
  const navigate = useNavigate();

  const onNewChatLightClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-grey-base-2 overflow-hidden flex flex-row flex-wrap items-start justify-start p-[5px] box-border leading-[normal] tracking-[normal] [row-gap:20px]">
      {/* <div className="h-[1070px] w-[326px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border gap-[35px] max-w-full mq450:gap-[17px]">
        <img
          className="w-[184px] h-[38px] relative object-contain"
          loading="lazy"
          alt=""
          src="/black-logo-png@2x.png"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-11 font-nunito text-base text-gray-400 cursor-pointer"
          placeholder="New Chat"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <img width="24px" height="24px" src="/icroundplus.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#141414" },
            "& .MuiInputBase-root": {
              height: "44px",
              paddingRight: "15px",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": { color: "#141414" },
          }}
          onClick={onNewChatLightClick}
        />
        <FrameComponent2 />
        <FrameComponent1 />
      </div> */}
         <Sidebar/>

      <main className="flex-1 rounded-xl bg-linen overflow-hidden flex flex-col items-start justify-start py-0 px-[30px] box-border w-full max-w-full ">
        <header className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-[30px] px-0 pb-7 max-w-full gap-[20px] text-left text-13xl text-gray-400 font-nunito border-b-[1px] border-solid border-silver-200 mq725:flex-wrap">
          <h1 className="m-0 relative text-inherit font-bold font-inherit">
            Your Activity
          </h1>
          <TextField
            className="[border:none] bg-[transparent] h-11 w-[367px] font-nunito text-base text-gray-300 max-w-full"
            placeholder="Search your library"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="24px" height="24px" src="/magesearch.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#cacaca" },
              "& .MuiInputBase-root": {
                height: "44px",
                backgroundColor: "#fff",
                paddingLeft: "15px",
                borderRadius: "15px",
              },
              "& .MuiInputBase-input": { paddingLeft: "8px", color: "#7d7d7d" },
              width: "367px",
            }}
          />
        </header>
        <section className="self-stretch hide-scrollbar flex flex-row items-start justify-center max-w-full">
          <ActivityItems />
        </section>
      </main>
    </div>
  );
};

export default Activity;
