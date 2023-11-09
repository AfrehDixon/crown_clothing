import "./App.css";
import Header from "./Component/Header/Header";
import SignInUp from "./Component/Header/SignInUp";
import Shop from "./Component/Shop/Shop";
import HomePage from "./HomePage";
import "./homepagestyle.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/signin" element={<SignInUp />} />

      </Routes>
    </div>
  );
}

export default App;
