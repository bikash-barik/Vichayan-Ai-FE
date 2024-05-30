import { useEffect, useState, useContext } from 'react';
import { Switch } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import Menu from './Menu';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import FrameComponent2 from '../components/FrameComponent2';
import FrameComponent3 from '../components/FrameComponent3';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="h-[1070px] w-[326px] rounded-xl bg-white flex flex-col items-start justify-start p-5 box-border gap-[35px] max-w-full mq450:gap-[17px]">
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
          // onClick={onNewChatLightClick}
        />
        <FrameComponent3 />
        <FrameComponent2 />
      </div>
  );
}

export default Sidebar;
