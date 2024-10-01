import { useNavigate } from 'react-router-dom';
import './_FormButton.scss'

export default function SubmitButton({setActiveStep} : {setActiveStep : React.Dispatch<React.SetStateAction<number>>;}) {
  const navigate = useNavigate();
  const handleClick = () => {
    setActiveStep((prev: number) => prev + 1);
    navigate('/select-plan');
  };

  return (
    <div className='button-wrapper'>
      <button className='primary-btn' onClick={handleClick}>Next Step</button>
    </div>
  )
}
