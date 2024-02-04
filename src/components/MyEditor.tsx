import { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiSolidFileCss } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { LOCAL_STORAGE_KEYS } from '../config/constants'
interface IMyEditor {
  type: 'html' | 'css' | 'javascript'
  preview: 'Html' | 'Css' | 'Javascript'
  value: string
  onChange: (value: string) => string
}

function MyEditor({ value, type, preview, onChange }: IMyEditor) {
  const [icon, setIcon] = useState<Element | null>(null)

  useEffect(() => {
    if (type === 'html') {
      setIcon(<BiLogoHtml5 className='text-red-200' />)
    }

    if (type === 'css') {
      setIcon(<BiSolidFileCss className='text-blue-200' />)
    }

    if (type === 'javascript') {
      setIcon(<BiLogoJavascript className='text-yellow-200' />)
    }
  }, [type])

  const onChangeHandler = (value: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS[type], value)
    return onChange(value)
  }
  return (
    <div>
      <span className='flex items-center gap-2 text-white'>
        {icon !== null && icon} {preview}
      </span>
      <Editor
        language={type}
        value={value}
        height='50vh'
        options={{
          minimap: {
            enabled: false,
          },
        }}
        theme='vs-dark'
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default MyEditor
