import FormInfoSection from "../FormInfoSection";
import FormStepsSection from "../FormStepsSection";
import SubmitButton from "../buttons/FormButton";
import '../forms/_ChsPlan.scss';

// Import Images
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import toggleLeft from "../../assets/images/toggle-circle-right-svgrepo-com.svg";
import toggleRight from "../../assets/images/toggle-circle-left-svgrepo-com.svg";
import { useState } from "react";

export default function ChsPlan() {

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

    const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <FormStepsSection />
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

            <div className="toggle-wrapper">
                <p style={!toggleState ? {color : "var(--marine-blue)" , fontWeight : '700'} : {color : "var(--cool-gray)" , fontWeight : '500' ,transition : '0.3s ease'}}>Monthly</p>
                <img onClick={(e) => {
                  setToggleState(!toggleState);
                  e.currentTarget.classList.toggle('active');
                }} src={toggleState ? toggleLeft : toggleRight} />
                <p style={toggleState ? {color : "var(--marine-blue)" , fontWeight : '700'} : {color : "var(--cool-gray)" , fontWeight : '500' , transition : '0.3s ease'}}>Yearly</p>
            </div>

            <SubmitButton />
          </form>
        </section>
      </FormInfoSection>
    </>
  );
}
