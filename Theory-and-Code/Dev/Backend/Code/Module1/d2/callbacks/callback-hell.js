getUser(1, (err, user)=>{
if(err) return;
getOrder(user.id, (err, orders)=>{
    if(err) return;

    calculateTotal(orders, (err, total)=>{
        if(err) return;
        console.log(`Total orders for user ${user.id}: $${total}`);
    })

})
})