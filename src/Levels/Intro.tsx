import * as React from 'react'

import { IntroProps } from './internal'

import Dialog from './Utils/Dialog'
import BlinkingEye from './Utils/Eye'


export default class Intro extends React.Component<IntroProps> {

    public componentDidMount () {
        this.intro(-1)
    }

    public render () {
        return (
            <React.Fragment>
                <BlinkingEye x={250} y={220} open={this.props.blink >= 6 || this.props.blink % 2 === 0} />
                <BlinkingEye x={1280-250} y={220} open={this.props.blink >= 6 || this.props.blink % 2 === 0} />
                {this.props.blink >= 3 && this.props.blink < 6
                ? <Dialog>
                    Where am I?
                </Dialog>
                : this.props.blink >= 6
                ? <Dialog>
                    ....
                </Dialog>
                : undefined
                }
            </React.Fragment>
        )
    }


    private intro = (n: number) => {
        if (n > 6) {
          this.props.changeLevel({ level: 'intro1' })
        } else {
          this.props.changeLevel({ level: 'intro', data: { blink: n } })
          const tm = {
              0: 1000,
              1: 1000,
              2: 2000,
              3: 600,
              4: 700,
              5: 900,
              6: 6000
          }
          setTimeout(() => this.intro(n+1), tm[n] ? tm[n] : 1000)
        }
      }
}
