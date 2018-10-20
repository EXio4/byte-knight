
import * as React from 'react'
import * as Int from './internal'

import Intro from './Intro'

interface GameProps {
    state: Int.Levels,
    changeLevel: (p: Int.Levels) => void,
}

export default (props: GameProps): React.ReactElement<any> => {
    switch (props.state.level) {
        case 'intro':
            return (<Intro {...props.state.data} changeLevel={props.changeLevel} />)
        case 'intro1':
            return <div />
    }
}