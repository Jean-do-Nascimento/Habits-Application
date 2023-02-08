import axios from 'axios'

export const api = axios.create({

    baseURL: 'https://habits-application.vercel.app/habits'
})