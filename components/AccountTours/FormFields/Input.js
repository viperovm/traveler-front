import {useState, useEffect} from 'react'

const Input = ({
  action,
  name,
  type = 'text',
  value
}) => {
  const [data, setData] = useState(value ?? '')

console.log(data)

  //  useEffect(() => {
  //    if (value) {
  //      setData(value)
  //    }
  //  }, [value])

  const handleData = e => {
    setData(e.target.value)
    action(name, e.target.value)
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
      />
    </>
  )
}

export default Input