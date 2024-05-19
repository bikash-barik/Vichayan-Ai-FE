import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onMenuContainerClick = useCallback(() => {
    navigate("/activity");
  }, [navigate]);

  const onMenuItemLightClick = useCallback(() => {
    navigate("/libraries");
  }, [navigate]);

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start text-left text-base text-gray-400 font-nunito">
      <div className="self-stretch rounded-mini bg-linen flex flex-row items-start justify-start p-[15px] gap-[10px] top-[0] z-[99] sticky">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/magehome2.svg"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative inline-block min-w-[45px]">Home</b>
        </div>
      </div>
      <div
        className="self-stretch rounded-mini flex flex-row items-start justify-start p-[15px] gap-[10px] cursor-pointer font-outfit"
        onClick={onMenuContainerClick}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/solarhistorylinear.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="relative inline-block min-w-[54px]">Activity</div>
        </div>
      </div>
      <div
        className="self-stretch h-[54px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px] cursor-pointer text-white"
        onClick={onMenuItemLightClick}
      >
        <TextField
          className="self-stretch h-[54px] font-nunito text-base text-gray-400 shrink-0 [debug_commit:1de1738]"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "15px", marginRight: "10px" }}
              >
                <img width="24px" height="24px" src="/magearchivedrawer.svg" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ marginRight: "15px" }}>
                <img width="24px" height="24px" src="/magechevrondown.svg" />
              </InputAdornment>
            ),
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={{
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "15px",
            width: "100%",
            height: "54px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              color: "#141414",
              fontSize: 16,
              fontWeight: "Regular",
              fontFamily: "Nunito",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <MenuItem value={1}>Library</MenuItem>
        </TextField>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[18.5px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] shrink-0 [debug_commit:1de1738]">
            <div className="self-stretch flex flex-row items-center justify-between py-[5px] px-0 gap-[20px]">
              <div className="h-[22px] w-[152px] flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/magehash.svg"
                />
                <div className="self-stretch flex-1 relative flex items-center">
                  Thermodynamics
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/magemultiply.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-[5px] px-0 gap-[20px]">
              <div className="h-[22px] w-[137px] flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/magehash.svg"
                />
                <div className="self-stretch flex-1 relative flex items-center">
                  Science Project
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/magemultiply.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-[5px] px-0 gap-[20px]">
              <div className="h-[22px] w-[175px] flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/magehash.svg"
                />
                <div className="self-stretch flex-1 relative flex items-center">
                  Javascript Essentials
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/magemultiply.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
