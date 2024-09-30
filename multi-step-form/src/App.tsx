import { Route, Routes , BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainPage from "./components/routes/MainPage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="form-wrapper">
          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
