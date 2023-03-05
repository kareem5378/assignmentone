import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import SingleBlog from "./singleBlog";

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

// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./reducers/counterSlice";
// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h2>React Js Redux Store with Slice State Examle</h2>
//       <p>{count}</p>
//       <button
//         onClick={() => {
//           dispatch(increment());
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }
// export default App;
