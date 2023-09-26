import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";

export default function UserDetail() {
  //Route에 /user/:userId
  const Params = useParams();
  console.log(Params);

  return (
    <>
      <div>
        tkdyd
        {/* 사용자는 {userId}은/는 {users[Number(userId) - 1].name}입니다. */}
        {/* <Link to="commnet">Commnet</Link>
        <Outlet context={{ commnet: users[Number(userId) - 1] }} /> */}
      </div>
    </>
  );
}
