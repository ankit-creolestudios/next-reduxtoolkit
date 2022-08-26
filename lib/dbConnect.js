const mongoose = require("mongoose");
const dbConnect = async () => {
  await mongoose
    .connect(
      `mongodb+srv://root:root@cluster0.jxyhrwx.mongodb.net/task?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    )
    .then((res) => res)
    .catch((error) => console.log(error));
};
export default dbConnect;
