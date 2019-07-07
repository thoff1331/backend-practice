const todo = [];

const addItem = (req, res) => {
  console.log("hit");
  todo.push(req.body.name);
  console.log(todo);
  console.log(req.body.name);
  res.json(todo);
};

module.exports = {
  addItem
};
