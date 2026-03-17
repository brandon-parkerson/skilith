import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Testimonials />
    </>
  );
}

export default App;
