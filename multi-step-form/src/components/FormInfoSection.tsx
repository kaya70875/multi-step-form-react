import './_FormInfoSection.scss'

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

      <section className='form'></section>
    </div>
  )
}
