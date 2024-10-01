import FormStepsSection from "../FormStepsSection";
import FormInfoSection from "../FormInfoSection";
import { useState } from "react";
import SubmitButton from "../buttons/FormButton";

export default function MainPage() {
  const [activeStep , setActiveStep] = useState<number>(1);
  return (
    <>
      <FormStepsSection activeStep={activeStep}/>
      <FormInfoSection
        formHeader="Personal Info"
        formInfo="Please provide your name, email address, and phone number."
      >
        <section className='form'>
        <form>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='e.g. Stephen King' />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email Adress</label>
            <input type="text" name='email' placeholder='e.g. Stephenking@lorem.com' />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name='phone' placeholder='e.g. +1 234 567 890' />
          </div>
          
          <SubmitButton setActiveStep={setActiveStep}/>
        </form>
      </section>
      </FormInfoSection>
    </>
  );
}
