import React, { useEffect, useState, ChangeEvent } from 'react'
import Editor from '@monaco-editor/react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiSolidFileCss } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'

interface IMyEditor {
  type: 'html' | 'css' | 'javascript'
  preview: 'Html' | 'Css' | 'Javascript'
  value: string
  onChange: (value: string, event: ChangeEvent<{}>) => void
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
        onChange={onChange}
      />
    </div>
  )
}

export default MyEditor
