import React, { useEffect, useState } from 'react'
import Navbar from './components//Navbar'
import Editor from '@monaco-editor/react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiSolidFileCss } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'

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
          <div>
            <span className='flex items-center gap-2 text-white'>
              <BiLogoHtml5 className='text-red-200' /> HTML
            </span>
            <Editor
              language='html'
              value={html}
              height='50vh'
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              theme='vs-dark'
              onChange={e => setHtml(e || '')}
            />
          </div>
          <div>
            <span className='flex items-center gap-2 text-white'>
              <BiSolidFileCss className='text-blue-200' />
              CSS
            </span>
            <Editor
              theme='vs-dark'
              value={css}
              language='css'
              height='50vh'
              onChange={e => setCss(e || '')}
            />
          </div>
          <div>
            <span className='flex items-center gap-2 text-white'>
              <BiLogoJavascript className='text-yellow-200' /> Javasrcipt
            </span>
            <Editor
              theme='vs-dark'
              language='javascript'
              onChange={e => setJavascript(e || '')}
              height='50vh'
              value={javasrcipt}
            />
          </div>
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
