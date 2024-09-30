import FormStepsSection from "../FormStepsSection";
import FormInfoSection from "../FormInfoSection";

export default function MainPage() {
  return (
    <>
      <FormStepsSection />
      <FormInfoSection
        formHeader="Personal Info"
        formInfo="Please provide your name, email address, and phone number."
      />
    </>
  );
}
