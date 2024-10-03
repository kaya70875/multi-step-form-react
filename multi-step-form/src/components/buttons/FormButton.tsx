import './_FormButton.scss'

interface SubmitButtonProps {
  isLastStep?: boolean;
}

export default function SubmitButton({isLastStep = false} : SubmitButtonProps) {
  return (
    <div className='button-wrapper'>
      <button type='submit' className='primary-btn'>{isLastStep ? 'Confirm' : 'Next Step'}</button>
    </div>
  )
}
