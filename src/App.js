import "./App.css";
import Index from "./Navbar/index";
import Content from "./blogContent/index";
import { useState, useEffect } from "react";

function App() {
  let blogsContent = [
    {
      key: 1,
      author: "Kareem",
      title: "Shaweesh",
      body: "Nice Nice Nice Nice Nice Nice Nice Nice Nice Nice Nice Nice ",
    },
    {
      key: 2,
      author: "Bassam",
      title: "Al-Nabulsi",
      body: "No No No No No No No No No No No No No No No No No No No No ",
    },
    {
      key: 3,
      author: "Omar",
      title: "Bakez",
      body: "Cool Cool Cool Cool Cool Cool Cool Cool Cool Cool Cool Cool ",
    },
    {
      key: 4,
      author: "Wa'ad",
      title: "Al-Awajneh",
      body: "Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok Ok ",
    },
  ];
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBlog(blogsContent);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Index />
      <Content blogsContent={blog} loading={loading} />
    </div>
  );
}

export default App;
