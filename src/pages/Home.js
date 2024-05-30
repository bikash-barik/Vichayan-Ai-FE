import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Sidebar from "../layout/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  const onNewChatLightClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-grey-base-2 overflow-hidden flex flex-row flex-wrap items-start justify-start p-[5px] box-border leading-[normal] tracking-[normal] [row-gap:20px]">
       <Sidebar/>
      <main className="flex-1 rounded-xl bg-linen flex flex-col items-end justify-start pt-[100px] px-2.5 pb-[15px] box-border gap-[263px] w-full max-w-full lg:gap-[131px]  lg:pb-5 lg:box-border  mq450:gap-[33px] mq750:gap-[66px] mq750:pt-[136px] mq750:box-border">
        <div className="h-full hidden" />
        <FrameComponent />
        <footer className="w-[659px]  md:hidden flex flex-row items-start justify-center py-0 pr-0 pl-5 box-border gap-[25px] max-w-full text-left text-sm text-gray-300 font-nunito mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border min-w-[156px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative inline-block min-w-[28px]">Plus</div>
              <div className="relative inline-block min-w-[65px]">
                Enterprise
              </div>
              <div className="relative inline-block min-w-[42px]">Career</div>
              <div className="relative inline-block min-w-[30px]">Blog</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
            <div className="relative inline-block min-w-[87px]">
              Privacy Policy
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.5px] pb-0 pr-2.5 pl-0">
            <div className="relative inline-block min-w-[123px]">{`Terms & Conditions`}</div>
          </div>
          <TextField
            className="h-11 w-[104px] font-nunito font-light text-sm text-gray-200"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "10px", marginRight: "8px" }}
                >
                  <img width="24px" height="24px" src="/mageglobe.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "10px" }}>
                  <img
                    width="20px"
                    height="20px"
                    src="/magechevrondown-1.svg"
                  />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "16.275430359937403%",
              height: "44px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#7e7e7e",
                fontSize: 14,
                fontWeight: "Light",
                fontFamily: "Nunito",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>Eng</MenuItem>
          </TextField>
        </footer>
        <footer className="w-[659px] hidden md:flex absolute bottom-3  flex-row items-start justify-center py-0 pr-0 pl-5 box-border gap-[25px] max-w-full text-left text-sm text-gray-300 font-nunito mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border min-w-[156px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative inline-block min-w-[28px]">Plus</div>
              <div className="relative inline-block min-w-[65px]">
                Enterprise
              </div>
              <div className="relative inline-block min-w-[42px]">Career</div>
              <div className="relative inline-block min-w-[30px]">Blog</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
            <div className="relative inline-block min-w-[87px]">
              Privacy Policy
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.5px] pb-0 pr-2.5 pl-0">
            <div className="relative inline-block min-w-[123px]">{`Terms & Conditions`}</div>
          </div>
          <TextField
            className="h-11 w-[104px] font-nunito font-light text-sm text-gray-200"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "10px", marginRight: "8px" }}
                >
                  <img width="24px" height="24px" src="/mageglobe.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "10px" }}>
                  <img
                    width="20px"
                    height="20px"
                    src="/magechevrondown-1.svg"
                  />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "16.275430359937403%",
              height: "44px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#7e7e7e",
                fontSize: 14,
                fontWeight: "Light",
                fontFamily: "Nunito",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>Eng</MenuItem>
          </TextField>
        </footer>
      </main>
    </div>
  );
};

export default Home;
