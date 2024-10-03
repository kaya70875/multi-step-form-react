import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import MainPage from "./components/routes/MainPage";
import ChsPlan from "./components/routes/ChsPlan";
import AddOns from "./components/routes/AddOns";
import ConfirmPage from "./components/routes/ConfirmPage";
import ThankYou from "./components/routes/ThankYou";
import FormProvider from "./context/FormContext";
import ProtectedRoute from "./components/protected-routes/ProtectedRoute";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="app">
          <div className="form-wrapper">
            <AnimatePresence mode="wait">
              <Routes >
                <Route path="/" element={<MainPage />} />
                <Route path="/select-plan" element={<ChsPlan />} />
                <Route path="/add-ons" element={<AddOns />} />
                <Route path="/confirm" element={<ConfirmPage />} />
                <Route
                  path="/thank-you"
                  element={
                    <ProtectedRoute>
                      <ThankYou />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
