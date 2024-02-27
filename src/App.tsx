import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const preventUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", preventUnload);

    return () => {
      window.removeEventListener("beforeunload", preventUnload);
    };
  }, []);
  return (
    <>
      <h1>Testing beforeunload</h1>
      <p>Close this tab/window and see if you get a prompt</p>
    </>
  );
}

export default App;
