import './_FormStepsSection.scss';

export default function FormStepsSection() {
  return (
    <div className="steps-wrapper">
        <div className="form-elements-wrapper">
            <section className="form-element-wrapper">
                <div className="number active">1</div>
                <div className="info-section">
                    <p>Step 1</p>
                    <h2>YOUR INFO</h2>
                </div>
            </section>

            <section className="form-element-wrapper">
                <div className="number">2</div>
                <div className="info-section">
                    <p>Step 2</p>
                    <h2>SELECT PLAN</h2>
                </div>
            </section>

            <section className="form-element-wrapper">
                <div className="number">3</div>
                <div className="info-section">
                    <p>Step 3</p>
                    <h2>ADD-ONS</h2>
                </div>
            </section>

            <section className="form-element-wrapper">
                <div className="number">4</div>
                <div className="info-section">
                    <p>Step 4</p>
                    <h2>SUMMARY</h2>
                </div>
            </section>
        </div>
    </div>
  )
}
