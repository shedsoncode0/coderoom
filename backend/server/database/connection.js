import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const con = await mongoose.connect(
            process.env.DB_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
            }
        )
        console.log(`Database connected to : ${con.connection.host}`)
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export { connectDB };