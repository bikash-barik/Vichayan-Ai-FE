import { useEffect, useState } from "react";
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


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

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

  return (
    <div className={isDarkMode ? "dark" : ""}>
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
