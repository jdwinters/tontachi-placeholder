const express = require("express");
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}else{
  const path = require("path");
  app.use('./client/public', express.static(path.join(__dirname, 'public')));
}

const PORT = process.env.PORT || 5224;
app.listen(PORT);