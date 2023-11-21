import { useOutletContext } from "react-router-dom";

export default function Comment() {
  const ctx = useOutletContext();
  console.log(ctx);
  return <div>Comment</div>;
}
