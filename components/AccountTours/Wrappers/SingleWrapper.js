
const SingleWrapper = ({children, label, comment}) => {
  
  return (
    <div className='my-tours-input-section'>
      <div className='input-label'>{label}</div>
      <div className='my-tours-input-full'>
        {children}
        <div className='my-tours-input-explanations'>{comment}</div>
      </div>
    </div>
  )
}

export default SingleWrapper
