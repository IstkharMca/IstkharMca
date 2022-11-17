// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  mongoose from 'mongoose'
export default function handler(req, res) {
  if (mongoose.connections[0].readyState) {
    return res.status(200).json({ connection: 'Already connected' })
}
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},err => {
    if (err) console.log('error',err);
    return res.status(200).json({ connection: 'connected' })
})
}
