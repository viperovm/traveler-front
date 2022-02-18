import {useState, useEffect} from 'react'
import Checkbox from '@mui/material/Checkbox'

const inputLabel = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckboxInput = ({action, name, label, comment, value}) => {
  const [data, setData] = useState(false)


  // useEffect(() => {
  //   action({
  //     ...old_data,
  //     [name]: data,
  //   })
  // }, [name, data])

  const handleData = e => {
    setData(e.target.checked)
    action(name, e.target.checked)
  }

   useEffect(() => {
     if (value) {
       setData(value)
     }
   }, [value])

  return (
    <>
      <div className='checkbox-section'>
        <Checkbox
          checked={data}
          onChange={handleData}
          // onBlur={handleBlur}
          {...inputLabel}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
        <div className='checkbox-label-wrapper'>
          <div className='checkbox-label'>{label}</div>
          <div className='checkbox-comment'>{comment}</div>
        </div>
      </div>
    </>
  )
}

export default CheckboxInput
