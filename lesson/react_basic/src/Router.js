import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./12Router/Header";
import Home from "./12Router/Home";
import About from "./12Router/About";
import NotFound from "./12Router/404";
import Redirect from "./12Router/Redirect";
import User from "./12Router/User";
import UserDetail from "./12Router/UserDetail";
import App from "./App";
import Error from "./12Router/Error";
import Comment from "./12Router/Comment";

// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header></Header>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="*" element={<NotFound />}></Route>
//           <Route path="/redirect" element={<Redirect />}></Route>
//           <Route path="/user" element={<User />}></Route>
//           <Route path="/user/:id" element={<UserDetail />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

//ver2

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "",
        element: <User />,
      },
      {
        path: "userId",
        element: <UserDetail />,
        children: [
          {
            path: "commnet",
            element: <Comment />,
          },
        ],
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
  },
]);
export default Router;
