import "./App.css";
import "./dark.scss";
import Home from "./component/Home/Home";
import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "app" : "app dark"}>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <div className="content">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
