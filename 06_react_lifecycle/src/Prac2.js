import { useState, useEffect } from "react";
import axios from "axios";

export default function Prac2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //useEffect는 비동기 함수를 직접적으로 지원하지 않음
    //비동기 함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
    const axiosUser = async () => {
      const result = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });
    };
    axiosUser();
  }, []);

  return (
    <>
      <div>
        <ul>
          {users.map((user) => {
            return <li></li>;
          })}
        </ul>
      </div>
    </>
  );
}
