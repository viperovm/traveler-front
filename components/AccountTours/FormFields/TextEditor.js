import { useState, useEffect, useRef } from 'react'


const TextEditor = ({ action, name, value }) => {

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])


  const [data, setData] = useState('')

  useEffect(() => {
    if(value){
      setData(value)
    }
  }, [value])

  const handleData = e => {
    setData(e.target.value)
    action(name, e.target.value)
  }

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      value={data}
      config={{
        toolbar: [
          'bold',
          'italic',
          'blockQuote',
          '|',
          // 'link',
          'numberedList',
          'bulletedList',
          '|',
          // 'imageUpload',
          // 'mediaEmbed',
          // '|',
          'undo',
          'redo',
        ],
      }}
      onChange={(event, editor) => {
        console.log(editor)
        const data = editor.getData()
        action(name, data)
      }}
    />
  ) : (
    <div>Editor loading</div>
  )
}

export default TextEditor
