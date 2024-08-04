import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './components//Navbar'
import MyEditor from './components/MyEditor'
import { LOCAL_STORAGE_KEYS } from './config/constants'
import htmlTemplate from "./template/html.txt"
import cssTemplate from "./template/css.txt"

import _ from 'lodash'
function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")

  const [javasrcipt, setJavascript] =
    useState("")

  useEffect(() =>{


    fetch(htmlTemplate)
    .then(res => res.text())
    .then(data => setHtml(data))


    fetch(cssTemplate)
    .then(res => res.text())
    .then(data => setCss(data))

  }, [])

  const [result, setResult] = useState('')

  const updateResult = useCallback(() => {
    setResult(`
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
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
          className='w-screen h-[45vh]'
        />
      </main>
    </React.Fragment>
  )
}

export default App
