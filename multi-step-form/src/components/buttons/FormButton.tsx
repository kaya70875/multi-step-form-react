import { useNavigate } from 'react-router-dom';
import './_FormButton.scss'

interface SubmitButtonProps {
  isLastStep?: boolean;
}

export default function SubmitButton({isLastStep = false} : SubmitButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if(isLastStep) {
      navigate('/thank-you');
    }
  }
  return (
    <div className='button-wrapper'>
      <button type='submit' onClick={handleClick} className='primary-btn'>{isLastStep ? 'Confirm' : 'Next Step'}</button>
    </div>
  )
}
