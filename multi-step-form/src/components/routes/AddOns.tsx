import { useFormContext } from "../../context/FormContext";
import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";
import '../forms/_AddOns.scss';

export default function AddOns() {

    const { formData, setFormData } = useFormContext();

    const addOnCards = [
        {
            id: 1,
            title: "Online service",
            description: "Access to multiplayer games",
            price: 1
        },
        {
            id: 2,
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            price: 2
        },
        {
            id: 3,
            title: "Customizable profile",
            description: "Custom theme on your profile",
            price: 2
        },
    ]
    const handleCardClick = (e : React.MouseEvent<HTMLDivElement> , card : {title : string, price : number}) => {
        e.currentTarget.classList.toggle('active');
        if(e.currentTarget.classList.contains('active')){
            setFormData({
                ...formData,
                addOns : [
                    ...formData.addOns, // Retain the previous add-ons
                    {
                    title : card.title,
                    price : card.price.toString()
                }]
            })
        } else {
            setFormData({
                ...formData,
                addOns : formData.addOns.filter(addOn => addOn.title !== card.title)
            })
        }
         
    }

    console.log(formData.addOns);

    return (
        <>
            <FormStepsSection currentStep={3} />
            <FormInfoSection formHeader="Pick add-ons" formInfo="Add-ons help enhance your gaming experience.">

                <div className="addons-wrapper">
                    {formData.billing === 'Monthly' ? (addOnCards.map(card => (
                        <div className="addon-card" id={card.title} key={card.id} onClick={(e) => handleCardClick(e , card)}>
                            <div className="addon-card-content">
                                <div className="card-checkbox">
                                    <input type="checkbox" />
                                </div>
                                <header className="card-header">
                                    <div className="addon-card-title">
                                        <h3>{card.title}</h3>
                                    </div>
                                    <div className="addon-card-description">
                                        <p>{card.description}</p>
                                    </div>
                                </header>

                            </div>
                            <div className="addon-card-price">
                                <p>+${card.price}/mo</p>
                            </div>
                        </div>
                    ))) : (
                        addOnCards.map(card => (
                            <div className="addon-card" key={card.id}>
                                <div className="card-checkbox">
                                    <input type="checkbox" />
                                </div>
                                <div className="addon-card-content">
                                    <div className="addon-card-title">
                                        <h3>{card.title}</h3>
                                    </div>
                                    <div className="addon-card-description">
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                                <div className="addon-card-price">
                                    <p>+${card.price}/yr</p>
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </FormInfoSection>

        </>
    )
}
