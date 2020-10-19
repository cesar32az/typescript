import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/ts-crud', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });
    console.log(">>> Database connected")
  } catch (error) {
      console.log(error)
  }
}
export default connect