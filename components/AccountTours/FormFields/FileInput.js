import { useState, useEffect } from 'react'

const FileInput = ({ action, name, old_data, label, type = 'text' }) => {
  const [data, setData] = useState('')

  useEffect(() => {
    action({
      ...old_data,
      [name]: data,
    })
  }, [name, data])

  const handleData = e => {
    setData(e.target.value)
  }

  return <input name={name} value={data} type={type} onChange={handleData} />
}

export default FileInput
