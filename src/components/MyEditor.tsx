import React from 'react'
import Editor from '@monaco-editor/react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiSolidFileCss } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'

interface IMyEditor {
  type: 'html' | 'css' | 'javascript'
  preview: 'Html' | 'Css' | 'Javascript'
  value: string
  onChange: () => {}
}
function MyEditor({ value, type, preview, onChange }: IMyEditor) {
  return (
    <React.Fragment>
      <span className='flex items-center gap-2 text-white'>
        <BiLogoHtml5 className='text-red-200' /> {preview}
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
    </React.Fragment>
  )
}

export default MyEditor
