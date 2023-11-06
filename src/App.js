import "./App.css";
import Shop from "./Component/Shop/Shop";
import HomePage from "./HomePage";
import "./homepagestyle.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shops" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
