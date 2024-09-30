import './_FormInfoSection.scss'
import SubmitButton from './buttons/FormButton';

interface FormInfoSectionProps {
  formHeader: string;
  formInfo: string;
}

export default function FormInfoSection({formHeader , formInfo} : FormInfoSectionProps) {
  return (
    <div className='form-info-section'>
      <header className='form-header'>
        <h2>{formHeader}</h2>
        <p>{formInfo}</p>
      </header>

      <section className='form'>
        <form action="submit">
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='e.g. Stephen King' />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email Adress</label>
            <input type="text" name='email' placeholder='e.g. Stephenking@lorem.com' />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name='phone' placeholder='e.g. +1 234 567 890' />
          </div>
          
          <SubmitButton />
        </form>
      </section>
    </div>
  )
}
