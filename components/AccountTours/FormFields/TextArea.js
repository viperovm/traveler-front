import { useState, useEffect } from 'react'

const TextArea = ({
  action,
  name,
  value,
  label,
  type = 'text',
  rows = '5',
}) => {
  const [data, setData] = useState('')

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [value])

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
