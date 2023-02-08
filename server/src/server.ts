import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"
import { notificationRoutes } from './lib/notifications-routes'


const app = Fastify()
const port = process.env.PORT || 3333

app.register(cors)
app.register(appRoutes)
app.register(notificationRoutes)


app.listen({
  port: 3333 || port,
  host: '0.0.0.0'
}).then(() => {
  console.log('HTTP Server running!')
})


//Adress?:  https://habits-application.vercel.app 