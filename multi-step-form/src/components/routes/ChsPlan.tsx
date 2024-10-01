import { useState } from "react";
import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";
import SubmitButton from "../buttons/FormButton";

export default function ChsPlan() {
    const [activeStep , setActiveStep] = useState<number>(1);
  return (
    <>
      <FormStepsSection activeStep={activeStep} />
      <FormInfoSection
        formHeader="Personal Info"
        formInfo="Please provide your name, email address, and phone number."
      >
        <section className="form">
          <form>
            <h2>Choosing Plan Section</h2>

            <SubmitButton setActiveStep={setActiveStep} />
          </form>
        </section>
      </FormInfoSection>
    </>
  );
}
