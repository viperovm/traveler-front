import { useState, useEffect } from 'react'

const NameInput = ({ action, action2, name, type = 'text', value }) => {
  const [data, setData] = useState('')

  useEffect(() => {
    if (value) {
      setData(value)
    }
  })

  const handleData = e => {
    setData(e.target.value)
    action(name, e.target.value)
  }

  const handleDataBlur = () => {
    action2()
  }
  // const handleSend = () => {
  //   action(name, data)
  // }

  return (
    <>
      <input
        name={name}
        value={data}
        type={type}
        onChange={handleData}
        onBlur={handleDataBlur}
      />
    </>
  )
}

export default NameInput
