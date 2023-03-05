import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Nav = lazy(() => import("./Navbar/index"));
const Content = lazy(() => import("./blogContent/index"));
const NewBlog = lazy(() => import("./newBlog"));
const ErrorPage = lazy(() => import("./errorPage"));
const SingleBlog = lazy(() => import("./singleBlog"));

function App() {
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/singleBlog/:id" element={<SingleBlog />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
