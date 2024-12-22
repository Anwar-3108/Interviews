getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => calculateTotal(orders))
  .then((total) => console.log("total", total))
  .cathc((err) => console.log("some error: ", err));
