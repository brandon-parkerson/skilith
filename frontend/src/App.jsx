import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Explanation from "./Explanation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Testimonials />
      <Explanation />
    </>
  );
}

export default App;
