import  { fastify } from 'fastify'
import { prisma } from './lib/prisma'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completiion'
import fastifyCors from '@fastify/cors'

const app  = fastify()
app.register(fastifyCors, {
 origin: '*' 
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)






app.listen({
  host: '0.0.0.0',
  port: 3333,
}).then(() => console.log('Http Server Running!! 3333'))