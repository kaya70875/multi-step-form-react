import { useState } from "react";
import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";
import SubmitButton from "../buttons/FormButton";
import '../forms/_ChsPlan.scss';

// Import Images
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

export default function ChsPlan() {
    const [activeStep , setActiveStep] = useState<number>(1);

    const cards = [
        {
            id: '1',
            title: "Arcade",
            price: 9,
            isSelected: false,
            imgSrc: arcade,
        },
        {
            id: '2',
            title: "Advanced",
            price: 12,
            isSelected: false,
            imgSrc: advanced,
        },
        {
            id: '3',
            title: "Pro",
            price: 15,
            isSelected: false,
            imgSrc: pro,
        },
    ];
  return (
    <>
      <FormStepsSection activeStep={activeStep} />
      <FormInfoSection
        formHeader="Select Your Plan"
        formInfo="You have the option of monthly or yearly billing."
      >
        <section className="form">
          <form>
            <div className="cards-wrapper">
                {cards.map(card => (
                    <div className="card" id={card.id}>
                    <header>
                        <img src={card.imgSrc} alt={card.title} />
                    </header>
                    <div className="card-info">
                        <h2>{card.title}</h2>
                        <p>{card.price}</p>
                    </div>
                </div>
                ))}
                
            </div>

            

            <SubmitButton setActiveStep={setActiveStep} />
          </form>
        </section>
      </FormInfoSection>
    </>
  );
}
