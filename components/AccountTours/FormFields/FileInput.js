import { useState, useEffect, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const FileInput = ({ action, name, value, max }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [preview, setPreview] = useState([])

  const inputFileRef = useRef(null)

  console.log(value)

  useEffect(() => {
    if (value) {
      let arr = preview
      arr.push(value)
      setPreview(arr)
    }
  }, [value])

  useEffect(() => {
    if (max) {
      if (preview.length >= max) {
        setActive(false)
      }
    }
  }, [max, preview])

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click()
  }

  const onFilechange = e => {
    setLoading(true)
    if (e.target.files[0]) {
      setData(e.target.files[0])
      action(e.target.files[0])
    }
    
  }

  useEffect(() => {
    if (preview && loading) {
      setLoading(false)
    }
  }, [preview, loading])

  // useEffect(() => {
  //   if (value) {
  //     setData(value)
  //   }
  // }, [])

  // useEffect(() => {
  //   action(data)
  // }, [data])

  // const handleData = e => {
  //   setData(e.target.value)
  // }
  // const handleSend = () => {
  //   action(name, data)
  // }

  return (
    <>
      <input
        name={name}
        // value={data}
        type='file'
        onChange={onFilechange}
        ref={inputFileRef}
        accept='image/*'
      />
      <div className='fake-file-input-wrapper'>
        <div
          className={`fake-file-input file-input ${
            active ? 'file-input-active' : 'file-input-inactive'
          }`}
          onClick={onBtnClick}
        >
          <div className='camera-image' />
          <div className='fake-file-input-text'>Добавить новое фото</div>
        </div>
        {preview.map((item, index) => (
          <>
            <div
              className='fake-file-input image-container'
              style={{
                backgroundImage: 'url(' + item + ')',
              }}
              key={index}
            />
            {index === 1 || (index - 1) % 3 === 0 ? (
              <div className={'fake-file-input-break'} />
            ) : (
              ''
            )}
          </>
        ))}
        {loading && (
          <div className='fake-file-input loader-spinner' onClick={onBtnClick}>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        )}
      </div>
    </>
  )
}

export default FileInput
