import "./App.css";
import Nav from "./Navbar/index";
import Content from "./blogContent/index";
import NewBlog from "./newBlog";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./errorPage";
import SingleBlog from "./singleBlog";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/singleBlog/:id" element={<SingleBlog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
