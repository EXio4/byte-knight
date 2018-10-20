
interface IntroData {
    blink: number,
}

export type Levels = {
    level: 'intro',
    data: IntroData
} | {
    level: 'intro1',
}
