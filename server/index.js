const express = require("express");
const app = express();
const PORT = 3131;
const c = require("./controller");

app.use(express.json());

app.post("/api/list", c.addItem);
app.delete("/api/list/:id", c.deleteItem);
app.listen(PORT, () => {
  console.log(`Server is up and running on Port ${PORT}`);
});
