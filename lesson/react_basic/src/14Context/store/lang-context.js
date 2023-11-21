import { createContext } from "react";

//Context 생성
//Provider와 Cousumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: "",
  setLanguage: () => {},
  color: "black",
});

// export function LanguageProvider(props) {
//     const [language, setLanguage] = useState('ko');

//     return <MyContext.Provider value={{ language, setLanguage }}>{props.children}</MyContext.Provider>;
// }

export default MyContext;
