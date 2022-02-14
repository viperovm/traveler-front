import {useState, useEffect, useRef} from 'react'

const Input = ({
  action,
  name,
  type = 'text',
  value
}) => {
  const [data, setData] = useState('')

  const inputFileRef = useRef(null)

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click()
  }

  const onFilechange = e => {
    /*Selected files data can be collected here.*/
    console.log(e.target.files)
  }

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [])

  useEffect(() => {
    action(name, data)
  }, [data])

  const handleData = e => {
    setData(e.target.value)
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
        onChange={type === 'file' ? handleData : onFilechange}
        ref={inputFileRef}
      />
      {type === 'file' && (
        <div className='fake-file-input-wrapper'>
          <div className='fake-file-input' onClick={onBtnClick}>
            <div className='camera-image' />
            <div className='fake-file-input-text'>Добавить новое фото</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Input