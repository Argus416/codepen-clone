import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './components//Navbar'
import MyEditor from './components/MyEditor'
import { LOCAL_STORAGE_KEYS } from './config/constants'
import _ from 'lodash'
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

  const updateResult = useCallback(() => {
    setResult(`
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${javasrcipt}</script>
    `)
  }, [html, css, javasrcipt])

  useEffect(() => {
    Object.values(LOCAL_STORAGE_KEYS).forEach(value => {
      if (
        !_.isNull(localStorage.getItem(value)) ||
        !_.isEmpty(localStorage.getItem(value))
      ) {
        if (value === 'html') setHtml(localStorage.getItem(value) ?? '')
        if (value === 'css') setCss(localStorage.getItem(value) ?? '')
        if (value === 'javascript')
          setJavascript(localStorage.getItem(value) ?? '')
      }
    })
  }, [])

  useEffect(() => {
    updateResult()
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
