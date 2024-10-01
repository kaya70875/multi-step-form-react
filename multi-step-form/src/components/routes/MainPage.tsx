import FormStepsSection from "../FormStepsSection";
import FormInfoSection from "../FormInfoSection";
import { useState } from "react";
import SubmitButton from "../buttons/FormButton";

export default function MainPage() {
  const [activeStep , setActiveStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
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
            <input type="text" name='name' placeholder='e.g. Stephen King' onChange={handleChange}/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email Adress</label>
            <input type="text" name='email' placeholder='e.g. Stephenking@lorem.com' onChange={handleChange}/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name='phone' placeholder='e.g. +1 234 567 890' onChange={handleChange}/>
          </div>
          
          <SubmitButton setActiveStep={setActiveStep}/>
        </form>
      </section>
      </FormInfoSection>
    </>
  );
}
