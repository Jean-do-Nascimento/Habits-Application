import { FastifyInstance } from "fastify"
import  WebPush from "web-push"
import { z } from "zod"

const  publicKey= 'BBBJCFhSRAfNNBYxwmh8yJzlkIfB8CIm7MxC-T6cqh4JqVtiOvL7C3lXRHLGrpDreA_UE2G0p7SWmAtfVaXrCNo'
const privateKey= '4Pg6xg9ZSFFXa4DWpp3OCYh759tQFjLl5Oc315vVAAo'

WebPush.setVapidDetails(
    'http://localhost:3333',
    publicKey,
    privateKey,
)


export async function notificationRoutes(app: FastifyInstance) {

   app.get('/push/public_key', () => {
    return{
        publicKey
    }
})

app.post('/push/register', (request, reply) =>{
    console.log(request.body)

    return reply.status(201).send()
})

app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
        subscription: z.object({
            endpoint: z.string(),
            keys: z.object({
                p256dh: z.string(),
                auth: z.string(),
            })
        }) 
    })
    
    const { subscription } = sendPushBody.parse(request.body)
    
    WebPush.sendNotification(subscription, 'HELLO DO BACKEND')

    return reply.status(201).send() 
})

}