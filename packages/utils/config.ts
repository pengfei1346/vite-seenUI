export interface InstallOptions {
    size?: string;
    zIndex: number;
}

let $vitec = { } as InstallOptions

const setConfig = (option: InstallOptions): void => {
    $vitec = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
    return $vitec[key]
}

export {
    getConfig,
    setConfig,
}
