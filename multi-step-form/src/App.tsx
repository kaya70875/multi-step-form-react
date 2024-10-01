import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainPage from "./components/routes/MainPage";
import ChsPlan from "./components/routes/ChsPlan";
import FormProvider from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="app">
          <div className="form-wrapper">
            <Routes>
              <Route path="/" element={<MainPage></MainPage>}></Route>
              <Route path="/select-plan" element={<ChsPlan></ChsPlan>}></Route>
            </Routes>

          </div>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
