import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "./store";

export default function Login() {
  const login = useSelector((state) => state.login.isLogin);
  console.log(login);

  return <>{login ? <div>로그인하셨습니다</div> : <div>로그아웃</div>}</>;
}
