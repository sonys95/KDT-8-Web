import { useContext } from "react";
import ThemeContext from "./store/theme-context";

export default function LangSelector() {
  const { language, setLanguage } = useContext(ThemeContext);

  return (
    <div>
      <h2>현재 선택된 언어 : {language}</h2>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="en">영어</option>
      </select>
    </div>
  );
}
