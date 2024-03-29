import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UseStateEle from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseContextPage from "./pages/UseContextPage";
import UseRefPage from "./pages/UseRefPage";
import UseReducerPage from "./pages/UseReducerPage";
import "./assets/css/main.css";
import UseCallBackPage from "./pages/UseCallBackPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/usestate" element={<UseStateEle />} />
          <Route path="/useeffect" element={<UseEffectPage />} />
          <Route path="/usecontext" element={<UseContextPage />} />
          <Route path="/useref" element={<UseRefPage />} />
          <Route path="/usereducer" element={<UseReducerPage />} />
          <Route path="/usecallback" element={<UseCallBackPage />} />
          <Route path="/usememo" />
          <Route path="/customhook" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
