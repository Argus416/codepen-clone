import React, { useEffect, useState } from 'react'
import Navbar from './components//Navbar'
import Editor from '@monaco-editor/react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiSolidFileCss } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import MyEditor from './components/MyEditor'

function App() {
  const [html, setHtml] = useState(`<h1 class="yo">Hello world</h1>
`)
  const [css, setCss] = useState(`h1{
    background-color: red;
}
`)
  const [javasrcipt, setJavascript] =
    useState(`const yo = document.querySelector('.yo')

yo.addEventListener('click', ()=>{
    console.log('yo')
})
`)

  const [result, setResult] = useState('')

  useEffect(() => {
    setResult(`
<head>
<style>${css}</style>
</head>
  <body>${html}</body>
  <script>${javasrcipt}</script>
`)
  }, [html, css, javasrcipt])

  return (
    <React.Fragment>
      <Navbar />

      <main>
        <section className='grid grid-cols-3 bg-black/80 px-4 overflow-hidden'>
          <MyEditor
            value={html}
            type='html'
            preview='Html'
            onChange={setHtml}
          />
          <MyEditor
            value={css}
            type='css'
            preview='Css'
            onChange={setCss}
          />

          <MyEditor
            value={javasrcipt}
            type='javascript'
            preview='Javascript'
            onChange={setJavascript}
          />
        </section>

        <iframe
          srcDoc={result}
          className='w-screen h-[45vh] bg-red-200 '
        />
      </main>
    </React.Fragment>
  )
}

export default App
