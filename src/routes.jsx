import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import About from "./components/About";
import FourOFour from "./components/404/index.jsx";
import User from "./components/User";
import Github, { githubInfoLoader } from "./components/Github/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="user" element={<User />} />
      <Route path="user" element={<User />}>
        {/* Child routes are defined as follows  */}
        <Route path=":userId" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<FourOFour />} />
    </Route>
  )
);
export default router;
