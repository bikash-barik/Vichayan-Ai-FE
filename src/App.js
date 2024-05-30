import { useContext, useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Libraries from "./pages/Libraries";
import ChatInLibrary from "./pages/ChatInLibrary";
import DarkMode from "./components/DarkMode/DarkMode";
import 'tailwindcss/tailwind.css';
import Sidebar from "./layout/Sidebar";
import { SidebarContext } from "./context/SidebarContext";
import useWindowDimensions from "./utils/helper";
import { motion } from 'framer-motion';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const { setShow } = useContext(SidebarContext);
  const { width } = useWindowDimensions();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/activity":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/chat":
        title = "";
        metaDescription = "";
        break;
      case "/libraries":
        title = "";
        metaDescription = "";
        break;
      case "/chat-in-library":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const LoadSideBar = () => {
    const location = useLocation();
    return (
      <>

        {!['/']?.includes(location?.pathname) && (
          <Sidebar />
        )}
      </>
    );
  };

  useEffect(() => {
    if (width < 1024) {
      setShow(false);
    } 
  }, [width]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* <div className="h-full overflow-hidden ">
        <motion.div
          initial={{
            x: -100,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5
            }
          }}
          className=" pointer-events-none  fixed z-40  "
        >
          <div
            onClick={() => {
              setIsDrawerOpen(true);
            }}
            className="fixed pointer-events-auto w-10 h-10 p-1 bg-[red] rounded-full shadow-md left-4 top-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            className={`h-full   ${isDrawerOpen ? '-translate-x-5' : 'mq650:-translate-x-full translate-x-0 '
              } transition-transform relative pointer-events-auto `}
          >
            <LoadSideBar />

            {isDrawerOpen && (
              <div
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
                className="absolute w-8 h-8 p-1 bg-white shadow-md  rounded-full -right-10 top-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            )}
          </div>
        </motion.div>
      </div> */}
      
      <DarkMode setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/libraries" element={<Libraries />} />
        <Route path="/chat-in-library" element={<ChatInLibrary />} />
      </Routes>
    </div>
  );
}
export default App;
