import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/">
      <Route index element={<Home />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
