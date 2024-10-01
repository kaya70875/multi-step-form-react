import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";

export default function AddOns() {
    return (
        <>
            <FormStepsSection currentStep={3} />
            <FormInfoSection formHeader="Pick add-ons" formInfo="Add-ons help enhance your gaming experience.">

            <div className="addons-wrapper"></div>
            </FormInfoSection>

        </>
    )
}
