export default function PreviousButton() {
  return (
    <div className="button-wrapper">
        <button type='button'
         className='secondary-btn' onClick={() => {
          window.history.back();
         }}>Previous</button>
    </div>
  )
}
