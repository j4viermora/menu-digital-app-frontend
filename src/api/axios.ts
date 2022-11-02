import axios from 'axios'
import { getEnv } from 'src/utils'

const request = axios.create({
    baseURL: getEnv('BASE_URL'),
    timeout: 5000
})

export { request }
