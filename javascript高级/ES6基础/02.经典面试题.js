let arr = [];

for (let i = 0; i < 2; i++) {
	arr[i] = function () {
		console.log(i);
	}
}

arr[0](); // 0
arr[1](); // 1


for (var i = 0; i < 2; i++) {
	arr[i] = function () {
		console.log(i);
	}
}

arr[0](); // 2
arr[1](); // 2
