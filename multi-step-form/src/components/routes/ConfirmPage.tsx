import { useFormContext } from "../../context/FormContext";
import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";

export default function ConfirmPage() {
    const {formData} = useFormContext();
  return (
    <>
        <FormStepsSection currentStep={4} />
        <FormInfoSection formHeader="Finishing Up" formInfo="Double-check everything looks OK before comfirming."> 
            <form className="confirm-wrapper">
                <section className="plan-info">
                    <header className="plan-info-header">
                        <h2>{`${formData.plan}(${formData.billing})`}</h2>
                        <p>Change</p>
                    </header>
                    <p id="total-price">{formData.price}</p>
                </section>
                <section className="add-ons-info">
                    {formData.addOns.map(addOn => (
                        <div className="add-on-info" key={addOn.title}>
                            <p>{addOn.title}</p>
                            <p>{addOn.price}</p>
                        </div>
                    ))}
                </section>
                <section className="total">
                    <p>Total (per {formData.billing})</p>
                </section>
            </form>
        </FormInfoSection>
    
    </>
  )
}
