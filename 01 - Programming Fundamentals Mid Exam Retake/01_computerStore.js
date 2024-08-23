function computerStore(arr) {
    let totalPrice = 0;
    let totalPriceWithoutTaxes = 0;
    let taxes = 0;
    let isSpecial = false;
    let action = arr[0];
    while (action != "regular" && action != "special") {
        let price = Number(arr.shift());
        action = arr[0];
        if (action === "special") {
            isSpecial = true;
        }
        if (price <= 0) {
            console.log("Invalid price!");
            action = arr[0];
            continue;
        }
        totalPriceWithoutTaxes += price;
        taxes += 0.2 * price;
    }
    totalPrice = totalPriceWithoutTaxes + taxes;
    if (isSpecial === true) {
        totalPrice = 0.9 * totalPrice;
    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    }
    else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore(['1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special']);
    