import * as React from 'react'
import './App.css'


// import posed from 'react-pose'

import BlinkingEye from './Eye'

type Game = {
  level: 'intro',
  blink: number,
} | {
  level: 'intro1'
}

class App extends React.Component<{}, Game> {


  constructor(props: {}) {
    super(props)
    this.state = {
      level: 'intro',
      blink: 0
    }
  }

  public componentDidMount () {
    this.intro(0)
  }

  public render() {
    if (this.state.level === 'intro') {
      return (
        <svg className='app'>
          <BlinkingEye x={250} y={220} open={this.state.blink >= 6 || this.state.blink % 2 === 0} />
          <BlinkingEye x={1280-250} y={220} open={this.state.blink >= 6 || this.state.blink % 2 === 0} />
        </svg>
      );
    } else {
      return <div />
    }
  }

  private intro = (n: number) => {
    if (n > 11) {
      this.setState({ level: 'intro1' })
    } else {
      this.setState({ level: 'intro', blink: n })
      const tm = {
          0: 3000,
          1: 1000,
          2: 2000,
          3: 600,
          4: 700,
          5: 900
      }
      setTimeout(() => this.intro(n+1), tm[n] ? tm[n] : 1000)
    }
  }

}

export default App;
