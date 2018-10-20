
import * as React from 'react'
import posed, { PoseGroup } from 'react-pose'

interface DialogProps {
    children: React.ReactNode,
}

const Rect = posed.rect({
    enter: {
        opacity: 0.6,
    },
    exit: {
        opacity: 0,
    }
})
const Text = posed.text({
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
})

export default (props: DialogProps) => {
    return (
        <React.Fragment>
            <PoseGroup>
                <Rect key={'r1'} x={150} y={720-200} width={1280-300} height={720-400} rx={25} ry={25} fill='#222' />
                <Text key={'t1'} x={250} y={720-100} fill='white' fontSize={42}>
                    {props.children}
                </Text>
            </PoseGroup>
        </React.Fragment>
    )
}