import "./_FormStepsSection.scss";

interface FormStepsSectionProps {
  currentStep: number;
}

export default function FormStepsSection({currentStep} : FormStepsSectionProps) {
  const steps = [
    { number: 1, title: "YOUR INFO" },
    { number: 2, title: "SELECT PLAN" },
    { number: 3, title: "ADD-ONS" },
    { number: 4, title: "SUMMARY" },
  ];

  return (
    <div className="steps-wrapper">
      <div className="form-elements-wrapper">
        {steps.map((step) => (
          <section className="form-element-wrapper">
            <div className={`number ${step.number === currentStep ? 'active' : ''}`}>{step.number}</div>
            <div className="info-section">
              <p>Step {step.number}</p>
              <h2>{step.title}</h2>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
