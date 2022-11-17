import mongoose from 'mongoose'

const connectDB = () => {
    console.log(mongoose)
    if (mongoose.connections[0].readyState) {
        console.log('already connected');
        return;
    }
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },err => {
        if (err) {
            console.log('error',err)
        } else {
            console.log('connected');
        }
        
    })
}

export default connectDB;