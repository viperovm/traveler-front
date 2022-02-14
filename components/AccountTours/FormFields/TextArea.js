import { useState, useEffect } from 'react'

const TextArea = ({
  action,
  name,
  old_data,
  label,
  type = 'text',
  rows = '5',
}) => {
  const [data, setData] = useState('')

  const handleData = e => {
    setData(e.target.value)
    action(name, e.target.value)
  }

  return (
    <textarea
      name={name}
      value={data}
      type={type}
      onChange={handleData}
      rows={rows}
    />
  )
}

export default TextArea
