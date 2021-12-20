import React, { useEffect } from "react"
import ReactDOM from "react-dom"

import { run } from "utils/run"

const App = () => {
  useEffect(() => {
    (window as any).run = run
    run().then(console.log).catch(console.error)
  })

  return (
    <h1>
      Hello World
    </h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))