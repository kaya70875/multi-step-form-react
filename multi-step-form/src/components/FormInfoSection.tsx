import './_FormInfoSection.scss'

interface FormInfoSectionProps {
  formHeader: string;
  formInfo: string;
  children: React.ReactNode;
}

export default function FormInfoSection({formHeader , formInfo , children} : FormInfoSectionProps) {
  return (
    <div className='form-info-section'>
      <header className='form-header'>
        <h2>{formHeader}</h2>
        <p>{formInfo}</p>
      </header>

      {children}
      
    </div>
  )
}
