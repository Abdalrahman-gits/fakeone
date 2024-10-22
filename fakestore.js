async function fakestore(url) {
	const response = await fetch(url);
	const products = await response.json();
	console.log(products);
	let totalPrice =
		products[0].price * 3 + products[3].price * 4 + products[2].price * 5;
	return totalPrice;
}

let res = fakestore("https://fakestoreapi.com/products")
	.then((res) => console.log(`The Total Price is ${res}`))
	.catch((rej) => {
		throw new Error("There is a problem happened !!!!!");
	});
