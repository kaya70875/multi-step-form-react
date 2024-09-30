import "./App.css";
import FormInfoSection from "./components/FormInfoSection";
import FormStepsSection from "./components/FormStepsSection";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="form-wrapper">
        <FormStepsSection />
        <FormInfoSection
          formHeader="Personal Info"
          formInfo="Please provide your name, email address, and phone number."
        />
      </div>
    </div>
  );
}

export default App;
