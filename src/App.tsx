import * as React from 'react'
import './App.css'

import { defaultGame, Levels } from './Levels/internal'

import Game from './Levels/Game'

class App extends React.Component<{}, Levels> {

  constructor(props: {}) {
    super(props)
    this.state = defaultGame
  }

  public render() {
    return (
      <svg className='app'>
        <Game
          changeLevel={this.changeLevel}
          state={this.state} />
      </svg>
    )
  }

  private changeLevel = (l: Levels) => {
    this.setState(l)
  }


}

export default App;
