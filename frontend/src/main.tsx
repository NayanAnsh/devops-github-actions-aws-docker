import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Login from "./Login";


const root = document.getElementById("root");
if(!root){
  throw "How did you managet to get this error"
}
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
