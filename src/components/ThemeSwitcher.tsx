import { useThemeContext } from "@/contexts/ThemeContext";
import MoonIcon from "@/svg/MoonIcon";
import SunIcon from "@/svg/SunIcon";

export default function ThemeBrightness() {
  const { isBrightTheme, toggleTheme } = useThemeContext();

  return (
    <div
      className={`${isBrightTheme ? "border-[#ebebeb]" : "border-[#2e2e2e]"} p-1.5 rounded-full flex border-solid border w-fit absolute bottom-5 right-4 gap-1.5`}
    >
      <button
        aria-label="밝은 테마로 전환"
        className={`${isBrightTheme ? "bg-[#e6e6e6]" : "bg-gray-900"} rounded-full`}
        onClick={toggleTheme}
      >
        <SunIcon color={`${isBrightTheme ? "#414141" : "#555"}`} />
      </button>
      <button
        aria-label="어두운 테마로 전환"
        className={`${isBrightTheme ? "" : "bg-[#292929]"} rounded-full`}
        onClick={toggleTheme}
      >
        <MoonIcon color={`${isBrightTheme ? "#414141" : "#cbcbcb"}`} />
      </button>
    </div>
  );
}
