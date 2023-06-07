import "./App.css";
import LoginForm from "./component/LoginForm/LoginForm";
import OtpForm from "./component/OtpForm/OtpForm";
import { BrowserRouter, Route, Routes, route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/otpform" element={<OtpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
