
import * as React from 'react'
import posed from 'react-pose'

import * as _ from 'lodash'

interface BlinkProps {
    x: number,
    y: number,

    open: boolean,
}

interface BlinkState {
    id: string,
}

const Ellipse = posed.ellipse({
    closed: {
        ry: 0,
    },
    open: {
        ry: 90,
    }
})

class BlinkingEye extends React.Component<BlinkProps, BlinkState> {

    constructor(props: BlinkProps) {
        super(props)
        this.state = {
            id: _.uniqueId(),
        }
    }

    public componentDidMount() {
        this.setState({
            id: _.uniqueId()
        })
    }

    public render() {
        return (
            <React.Fragment>
                <defs>
                    <clipPath id={this.state.id}>
                        <Ellipse cx={this.props.x} cy={this.props.y} rx={170} ry={90} pose={this.props.open ? 'open' : 'closed'} fill='#fff' opacity={0.8} />
                    </clipPath>
                </defs>
                <g id={this.state.id + '_inside'} clipPath={`url(#${this.state.id})`} fill='coral' fillOpacity={0.6}>
                    <circle cx={this.props.x + 25} cy={this.props.y-20} r={140} />
                    <circle cx={this.props.x - 25} cy={this.props.y-20} r={140} />
                </g>
            </React.Fragment>
        )
    }
}

export default BlinkingEye