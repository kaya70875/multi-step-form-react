import { useFormContext } from "../../context/FormContext";
import SubmitButton from "../buttons/FormButton";
import PreviousButton from "../buttons/PreviousButton";
import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";
import '../forms/_ConfirmPage.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ConfirmPage() {
    const { formData } = useFormContext();
    const [addOnsTotal, setAddOnsTotal] = useState(0);

    // Calculate add-ons total when formData.addOns or formData.billing changes
    useEffect(() => {
        const total = formData.addOns.reduce((acc, addOn) => {
            return acc + addOn.price;
        }, 0);
        setAddOnsTotal(total);
    }, [formData.addOns, formData.billing]);

    return (
        <>
            <FormStepsSection currentStep={4} />
            <FormInfoSection formHeader="Finishing Up" formInfo="Double-check everything looks OK before comfirming.">
                <form className="confirm-wrapper">
                    <div className="sections-wrapper">
                        <section className="plan-info">
                            <header className="plan-info-header">
                                <h2>{`${formData.plan}(${formData.billing})`}</h2>
                                <Link to="/select-plan">Change</Link>
                            </header>
                            {formData.billing === 'Monthly' ? (
                                <p>
                                    ${formData.price}/Mo
                                </p>
                            ) : (
                                <p>
                                    ${formData.price * 10}/Yr
                                </p>
                            )}
                        </section>
                        <section className="add-ons-info">
                            {formData.addOns.map(addOn => (
                                <div className="add-on-info" key={addOn.title}>
                                    <h4>{addOn.title}</h4>
                                    {formData.billing === 'Monthly' ? (
                                        <p>+${addOn.price}/Mo</p>
                                    ) : (
                                    <p>+${addOn.price}/Yr</p>
                                )}
                                </div>
                            ))}
                        </section>
                        <section className="total">
                            <p>Total ({formData.billing})</p>
                            {formData.billing === 'Monthly' ? (
                                <h2>${formData.price + addOnsTotal}/Mo</h2>
                            ) : (
                                <h2>${formData.price * 10 + addOnsTotal}/Yr</h2>
                            )}
                        </section>
                    </div>
                    <div className="buttons-wrapper">
                        <SubmitButton isLastStep={true}/>
                        <PreviousButton />
                    </div>

                </form>
            </FormInfoSection>

        </>
    )
}
