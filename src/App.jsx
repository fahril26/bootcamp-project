import Router from "./components/Router";
import WindowWidthContext from "./context/WindowWidthContext";

function App() {
  return (
    <WindowWidthContext>
      <Router />
    </WindowWidthContext>
  );
}

export default App;
