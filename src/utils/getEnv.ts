import ENV from 'src/enviroment.json'

const appEnviroment = `${process.env.NEXT_PUBLIC_ENVIROMENT}`


export function getEnv(key: 'BASE_URL'): string {
    // @ts-ignore
    return ENV[appEnviroment]?.[key]
}