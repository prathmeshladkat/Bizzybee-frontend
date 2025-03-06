import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import NavBar from "./components/NavBar";

import Profile from "./components/Profile";
//import Body from "./components/Body";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Request from "./components/Request";
import Signup from "./components/Signup";
import LoginMain from "./components/LoginMain";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsOfService from "./components/TermsOfService";

function Layout() {
  const location = useLocation();
  const hideLayout = ["/", "/signup", "/login"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <NavBar />}{" "}
      {/* Show Header only if not on landing, signup, or login */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/requests" element={<Request />} />
      </Routes>
      {/* Show Footer only if not on landing, signup, or login */}
    </>
  );
}

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
