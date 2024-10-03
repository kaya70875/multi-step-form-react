import FormStepsSection from "../FormStepsSection";
import '../forms/_ThankYou.scss';
import completeIdle from '../../assets/images/icon-thank-you.svg';
import FormInfoSection from "../FormInfoSection";

export default function ThankYou() {
  return (
    <>
        <FormStepsSection currentStep={4} />
        <FormInfoSection formHeader="" formInfo="">
          <form className="thank-wrapper">
              <img src={completeIdle} />
              <header className="thank-header">
                  <h1>Thank you!</h1>
                  <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
              </header>
          </form>
        </FormInfoSection>
    </>
  )
}
