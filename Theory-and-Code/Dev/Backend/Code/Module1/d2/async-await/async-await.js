async function displayUserTotal() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.id);
    const total = await calculateTotal(orders);

    console.log(`total: ${total}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

displayUserTotal();
