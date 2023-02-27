import * as React from 'react'
import {render} from 'react-dom'

function App() {
  return (
    <div>
      <h1>
        react-testing-library examples{' '}
        
      </h1>
      <div>
        <p>Run command npm test</p>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
