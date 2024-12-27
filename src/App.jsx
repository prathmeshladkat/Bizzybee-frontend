//import "./App.css";

import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";

//import Login from "./components/Login";
import Profile from "./components/Profile";
import Body from "./components/Body";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Request from "./components/Request";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import LoginMain from "./components/LoginMain";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/login" element={<LoginMain />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Request />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
