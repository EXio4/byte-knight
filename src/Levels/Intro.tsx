import * as React from 'react'
import BlinkingEye from '../Eye'
import { IntroProps } from './internal'


export default class Intro extends React.Component<IntroProps> {

    public componentDidMount () {
        this.intro(-1)
    }

    public render () {
        return (
            <React.Fragment>
                <BlinkingEye x={250} y={220} open={this.props.blink >= 6 || this.props.blink % 2 === 0} />
                <BlinkingEye x={1280-250} y={220} open={this.props.blink >= 6 || this.props.blink % 2 === 0} />
            </React.Fragment>
        )
    }


    private intro = (n: number) => {
        if (n > 11) {
          this.props.changeLevel({ level: 'intro1' })
        } else {
          this.props.changeLevel({ level: 'intro', data: { blink: n } })
          const tm = {
              0: 1000,
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
