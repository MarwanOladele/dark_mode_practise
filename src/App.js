import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar/>
        <Home />
      </div>
    </div>
  );
}

export default App;
