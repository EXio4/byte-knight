
export interface IntroData {
    blink: number,
}

export type Levels = {
    level: 'intro',
    data: IntroData
} | {
    level: 'intro1',
}

type AsProps<T> = T & {
    changeLevel: (l: Levels) => void,
}

export type IntroProps = AsProps<IntroData>

export const defaultGame: Levels = {
    level: 'intro',
    data: { blink: -1 }
}