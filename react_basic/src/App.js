// import { useState } from "react";
// import Form from "./13Form/Form";
// import LanguageProvider from "./14Context/LangProvider";
// import LanguageSelector from "./14Context/LangSelector";
// import MyContext from "./14Context/store/lang-context";
import ThemeContext from "./14Context/store/theme-context";
import LangSelector from "./14Context/LangSelector";
import ThemeSelector from "./14Context/ThemeSelector";

function App() {
  //const [language, setLanguage] = useState('ko');
  return (
    <>
      {/* <MyContext.Provider value={{ language, setLanguage }}>
                <LanguageSelector />
            </MyContext.Provider> */}
      {/* <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider> */}
      <ThemeContext>
        <LangSelector></LangSelector>
        <ThemeSelector></ThemeSelector>
      </ThemeContext>
    </>
  );
}

export default App;
