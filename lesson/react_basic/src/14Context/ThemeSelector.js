import { useContext } from "react";
import ThemeContext from "./store/theme-context";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>현재 테마: {theme}</h2>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="dark">어두움</option>
        <option value="light">밝음</option>
      </select>
    </div>
  );
}
