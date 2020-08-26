//Promise出现的目的是解决Node.js异步编程中回调地狱的问题。
//Promise是一个构造函数

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve({name: '张三'})
//         }else {
//             reject('失败了') 
//         } 
//     }, 2000);
// });

// promise.then(result => console.log(result)) 
//        .catch(error => console.log(error))


const fs = require('fs')

// let promise = new Promise( (resolve,reject) => {
//     fs.readFile('./1.txt','utf8',(err,result) => {
//         if(err != null){
//             reject(err)
//             return
//         }
//         resolve(result)
//     })
// })

// promise.then( data => console.log(data) ).catch(err => console.log(err))

//解决异步依次读取文件的问题

// let p1 = new Promise( (resolve,reject) => {
//     fs.readFile('./1.txt','utf8',(err,result) => {
//         if(err != null){
//             reject(err)
//             return
//         }
//         resolve(result)
//     })
// })
// let p2 = new Promise( (resolve,reject) => {
//     fs.readFile('./2.txt','utf8',(err,result) => {
//         if(err != null){
//             reject(err)
//             return
//         }
//         resolve(result)
//     })
// })
// let p3 = new Promise( (resolve,reject) => {
//     fs.readFile('./3.txt','utf8',(err,result) => {
//         if(err != null){
//             reject(err)
//             return
//         }
//         resolve(result)
//     })
// })

// p1.then( data => console.log(data) ).catch(err => console.log(err))
// p2.then( data => console.log(data) ).catch(err => console.log(err))
// p3.then( data => console.log(data) ).catch(err => console.log(err))

function p1 () {
	return new Promise ((resolve, reject) => {
		fs.readFile('./1.txt', 'utf8', (err, result) => {
			resolve(result)
		})
	});
}

function p2 () {
	return new Promise ((resolve, reject) => {
		fs.readFile('./2.txt', 'utf8', (err, result) => {
			resolve(result)
		})
	});
}

function p3 () {
	return new Promise ((resolve, reject) => {
		fs.readFile('./3.txt', 'utf8', (err, result) => {
			resolve(result)
		})
	});
}

p1().then((r1)=> {
	console.log(r1);
	return p2();
})
.then((r2)=> {
	console.log(r2);
	return p3();
})
.then((r3) => {
	console.log(r3)
})