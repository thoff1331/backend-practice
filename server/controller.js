const todo = [];

const addItem = (req, res) => {
  todo.push(req.body.name);
  console.log(todo);
  console.log(req.body.name);
  res.json(todo);
};
const deleteItem = (req, res) => {
  console.log("hit");
  const item = todo.findIndex(ele => ele === "food");
  console.log(item);
  todo.splice(item, 1);
  res.json(todo);
};

module.exports = {
  addItem,
  deleteItem
};
