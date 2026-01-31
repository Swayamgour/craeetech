import { useEffect, useState } from "react";
// import Hero from "./pages/Home/Hero";
import Loader from "./components/Loader";
import Home from "./pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);



  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && <Home />}
    </>
  );
}

export default App;
