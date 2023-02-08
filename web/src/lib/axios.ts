import axios from 'axios'

export const api = axios.create({

    baseURL: 'https://habits-application-jktj.vercel.app'
})