import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainPage from "./components/routes/MainPage";
import ChsPlan from "./components/routes/ChsPlan";
import FormProvider from "./context/FormContext";
import AddOns from "./components/routes/AddOns";
import ConfirmPage from "./components/routes/ConfirmPage";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="app">
          <div className="form-wrapper">
            <Routes>
              <Route path="/" element={<MainPage></MainPage>}></Route>
              <Route path="/select-plan" element={<ChsPlan></ChsPlan>}></Route>
              <Route path="/add-ons" element={<AddOns></AddOns>}></Route>
              <Route path="/confirm" element={<ConfirmPage></ConfirmPage>}></Route>
            </Routes>

          </div>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
