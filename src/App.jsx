import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./Component/Sidebar";
import { Home } from "./Component/Home";
import { Search } from "./Component/Search";
import Header from "./Component/Header";

const App = () => {
  return (
    <Router>
      <div className="flex bg-base-200 min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
