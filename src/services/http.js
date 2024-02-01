import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const axiosInstance = (() => {
    const axiosClient = axios.create({
        baseURL,
        timeout: 30000,
        headers: {
            Accept: 'application/json'
        }
    })
    return axiosClient
})()

function makeApiRequest(meta) {
    const { url, method = 'get', headers, params, payload } = meta
    const apiRequestOptions = {
        method: method.toLowerCase(),
        url,
        headers,
        data: payload,
        params
    }

    return axiosInstance.request(apiRequestOptions)
}

export default makeApiRequest