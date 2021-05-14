export interface InstallOptions {
    size?: string;
    zIndex: number;
}

let $SEEN = { } as InstallOptions

const setConfig = (option: InstallOptions): void => {
    $SEEN = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
    return $SEEN[key]
}

export {
    getConfig,
    setConfig,
}
