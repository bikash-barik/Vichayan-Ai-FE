import { useState, useCallback } from "react";
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
  Button,
} from "@mui/material";
import Setting from "../components/Setting";
import PortalPopup from "../components/PortalPopup";
import Root5 from "../components/Root5";
import Root1 from "../components/Root1";
import Root from "../components/Root";
import { useNavigate } from "react-router-dom";
import LibraryContent from "../components/LibraryContent";
import LibraryCardLight from "../components/LibraryCardLight";
import Footer from "../components/Footer";

const Libraries = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const navigate = useNavigate();

  const onCardButtonsContainerClick = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onFrameContainer8Click = useCallback(() => {
    // Please sync "Library" to the project
  }, []);

  const onNewChatLightClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNavigationItemsContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMenuContainerClick = useCallback(() => {
    navigate("/activity");
  }, [navigate]);

  const onMenuItemLightClick = useCallback(() => {
    navigate("/libraries");
  }, [navigate]);

  const openSetting = useCallback(() => {
    setSettingOpen(true);
  }, []);

  const closeSetting = useCallback(() => {
    setSettingOpen(false);
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-grey-base-2 overflow-hidden flex flex-row flex-wrap items-start justify-start p-[5px] box-border leading-[normal] tracking-[normal] [row-gap:20px] text-left text-base text-gray-400 font-nunito">
        <div className="h-full w-[326px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border gap-[35px] max-w-full mq450:gap-[17px]">
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
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div
              className="self-stretch rounded-mini flex flex-row items-start justify-start p-[15px] gap-[10px] cursor-pointer"
              onClick={onNavigationItemsContainerClick}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/magehome2.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative inline-block min-w-[44px]">Home</div>
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
                <div className="relative inline-block min-w-[54px]">
                  Activity
                </div>
              </div>
            </div>
            <div
              className="self-stretch h-[54px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px] cursor-pointer text-white"
              onClick={onMenuItemLightClick}
            >
              <TextField
                className="self-stretch h-[54px] font-nunito font-bold text-base text-gray-400 shrink-0 [debug_commit:1de1738]"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "15px", marginRight: "10px" }}
                    >
                      <img
                        width="24px"
                        height="24px"
                        src="/magearchivedrawer.svg"
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "15px" }}
                    >
                      <img
                        width="24px"
                        height="24px"
                        src="/magechevrondown.svg"
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
                  backgroundColor: "#eeeee4",
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
                    fontWeight: "Bold",
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start text-dimgray-100">
              <div
                className="self-stretch rounded-mini flex flex-row items-start justify-start p-[15px] gap-[10px] cursor-pointer"
                onClick={openSetting}
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/magesettings.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="self-stretch relative">Settings</div>
                </div>
              </div>
              <div className="self-stretch rounded-mini flex flex-row items-start justify-start p-[15px] gap-[10px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/magetube.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="self-stretch relative">Support</div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[-10px_42px_12px_rgba(0,_0,_0,_0),_-7px_27px_11px_rgba(0,_0,_0,_0.01),_-4px_15px_9px_rgba(0,_0,_0,_0.05),_-2px_7px_7px_rgba(0,_0,_0,_0.09),_0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-mini bg-linen flex flex-col items-start justify-start py-5 px-[15px] gap-[15px] text-5xl">
              <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
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
              <div className="self-stretch relative text-sm text-gray-300">
                Upgrade for image upload, smarter AI, and more Pro Search
              </div>
              <Button
                className="self-stretch h-[42px] cursor-pointer"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#eeeee4",
                  fontSize: "16",
                  background: "#e9a53f",
                  border: "#e9a53f solid 1px",
                  borderRadius: "10px",
                  "&:hover": { background: "#e9a53f" },
                  height: 42,
                }}
                onClick={openFrame}
              >
                Get Vichayan Plus
              </Button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[53px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
                <img
                  className="h-[45px] w-[45px] relative rounded-mini object-cover min-h-[45px]"
                  loading="lazy"
                  alt=""
                  src="/photo-by-wells-chan@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[3px]">
                  <b className="relative inline-block min-w-[98px]">
                    Kanun Nayak
                  </b>
                  <div className="relative text-sm text-gray-300 whitespace-nowrap">
                    kanun.nayak@gmail.com
                  </div>
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                alt=""
                src="/magelogout.svg"
                onClick={openFrame1}
              />
            </div>
          </div>
        </div>
        <main className="h-[1070px] flex-1 rounded-xl bg-linen flex flex-col items-center justify-between py-0 px-[30px] box-border w-full ">
          <LibraryContent />
          <section className="flex flex-row flex-wrap items-center justify-start py-[27.5px] pr-1 pl-0 box-border gap-[40px] max-w-full shrink-0 text-left text-base text-gray-400 font-nunito mq800:gap-[20px]">
            <div
              className="w-[350px] rounded-xl box-border flex flex-col items-center justify-center py-[73px] px-5 gap-[8px] max-w-full cursor-pointer border-[1px] border-dashed border-gray-400"
              onClick={openFrame2}
            >
              <img
                className="w-[60px] h-[60px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icroundplus-1.svg"
              />
              <div className="relative inline-block min-w-[116px]">
                Add new library
              </div>
            </div>
            <LibraryCardLight
              onCardButtonsContainerClick={onCardButtonsContainerClick}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainerClick}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer2Click}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer3Click}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer4Click}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer5Click}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer6Click}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer7Click}
            />
            <LibraryCardLight
              onCardButtonsContainerClick={onFrameContainer8Click}
            />
          </section>
          <Footer />
        </main>
      </div>
      {isSettingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSetting}
        >
          <Setting onClose={closeSetting} />
        </PortalPopup>
      )}
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root5 onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Root1 onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Root onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Libraries;
