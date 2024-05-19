import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

const DarkMode = ({ setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 dark_mode">
      <input
        className="hidden dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
