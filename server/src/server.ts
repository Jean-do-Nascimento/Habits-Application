import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"
import { notificationRoutes } from './lib/notifications-routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)
app.register(notificationRoutes)



app.listen({
  port: 3333 || 'https://habits-application-pk91x1qkb-jean-do-nascimento.vercel.app'
 
}).then(() => {
  console.log('HTTP Server running!')
})