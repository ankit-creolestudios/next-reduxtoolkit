const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://root:root@cluster0.jxyhrwx.mongodb.net/task?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then((res) => res);
