// 1. String.charAt()
// charAt() 方法从一个字符串中返回指定的字符。

// var anyString = "Brave new world"

// console.log(anyString.charAt(0)) //B
// console.log(anyString.charAt(1)) // r
// console.log(anyString.charAt(2)) //a
// console.log(anyString.charAt(3)) //v
// console.log(anyString.charAt(4)) //e
// console.log(anyString.charAt(999)) // 空



// 2. String.concat()
// concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

// let hello = 'Hello, '
// console.log(hello.concat('Kevin', '. Have a nice day.')) // Hello, Kevin. Have a nice day.

// let greetList = ['Hello', ' ', 'Venkat', '!']
// "".concat(...greetList)  // "Hello Venkat!"
// "".concat({})    // [object Object]
// "".concat([])    // ""
// "".concat(null)  // "null"
// "".concat(true)  // "true"
// "".concat(4, 5)  // "45"

// 3. String.endsWith()
// endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

// const str1 = 'Cats are the best!'
// console.log(str1.endsWith('best', 17)) // true

// const str2 = 'Is this a question'
// console.log(str2.endsWith('?')) //false


// 4. String.includes(searchString[, position])
// includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。区分大小写
// searchString:要在此字符串中搜索的字符串
// position 可选:从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

// var str = 'To be, or not to be, that is the question.';

// console.log(str.includes('To be'))       // true
// console.log(str.includes('question'))    // true
// console.log(str.includes('nonexistent')) // false
// console.log(str.includes('To be', 1))    // false 从当前字符串的1索引位置开始搜寻子字符串
// console.log(str.includes('TO BE'))       // false


// 5. String.indexOf(searchValue [, fromIndex])
// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。区分大小写
// searchValue:要被查找的字符串值。
// fromIndex 可选:数字表示开始查找的位置。可以是任意整数，默认值为 0。

// "Blue Whale".indexOf("Blue")       // 返回 0
// "Blue Whale".indexOf("Blute")      // 返回 -1
// "Blue Whale".indexOf("Whale", 0)   // 返回 5
// "Blue Whale".indexOf("Whale", 5)   // 返回 5
// "Blue Whale".indexOf("", -1)       // 返回 0
// "Blue Whale".indexOf("", 9)        // 返回 9
// "Blue Whale".indexOf("", 10)       // 返回 10
// "Blue Whale".indexOf("", 11)       // 返回 10
// "Blue Whale".indexOf("blue")      // 返回 -1


// 6. String.match(regexp)
// match() 方法检索返回一个字符串匹配正则表达式的结果。
// regexp 一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。
// 如果你没有给出任何参数并直接使用match() 方法 ，你将会得到一 个包含空字符串的 Array ：[""] 。
// 如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。

// var str = 'For more information, see Chapter 3.4.5.1'
// var re = /see (chapter \d+(\.\d)*)/i
// var found = str.match(re)

// console.log(found)

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。

// var str = "Nothing will come of nothing."
// str.match()   // returns [""]


// 7. String.padEnd(targetLength [, padString])
// padEnd()  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
// targetLength:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
// padString 可选:填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。

// 'abc'.padEnd(10)          // "abc       " 长度为10
// 'abc'.padEnd(10, "foo")   // "abcfoofoof"
// 'abc'.padEnd(6, "123456") // "abc123"
// 'abc'.padEnd(1)           // "abc"


// 8. String.padFirst(targetLength [, padString])
// padStart() 方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。
// targetLength:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
// padString 可选:填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。

// 'abc'.padStart(10)         // "       abc"
// 'abc'.padStart(10, "foo")  // "foofoofabc"
// 'abc'.padStart(6,"123465") // "123abc"
// 'abc'.padStart(8, "0")     // "00000abc"
// 'abc'.padStart(1)          // "abc"


// 9. String.repeat(count)
// count:介于 0 和 +Infinity 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。

// "abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
// "abc".repeat(0)      // ""
// "abc".repeat(1)      // "abc"
// "abc".repeat(2)      // "abcabc"
// "abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
// "abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity


// 10. String.replace(regexp|substr, newSubStr|function)
// replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
// 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
// 如果pattern是字符串，则仅替换第一个匹配项。原字符串不会改变。
// regexp (pattern):一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
// substr (pattern):一个将被 newSubStr 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。
// newSubStr (replacement):用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。
// function (replacement):一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
// const regex = /dog/gi

// console.log(p.replace(regex, 'ferret'))
// // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
// console.log(p.replace('dog', 'monkey'))
// // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


// 11. String.replaceAll()

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
// const regex = /dog/gi

// console.log(p.replaceAll(regex, 'ferret'))
// // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
// console.log(p.replaceAll('dog', 'monkey'))
// // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// 12. String.search(regex)

// var str = "hey JudE"
// var re = /[A-Z]/g
// var re2 = /[.]/g
// console.log(str.search(re)) //4
// console.log(str.search(re2)) //-1

// 13. String.slice(beginIndex[, endIndex])
//slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

// const str = 'The quick brown fox jumps over the lazy dog.'

// console.log(str.slice(31)) //"the lazy dog."
// console.log(str.slice(4, 19)) //"quick brown fox"
// console.log(str.slice(-4)) //"dog."
// console.log(str.slice(-9, -5)) //"lazy"


// 14. String.split([separator[, limit]])
// split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

// const str = 'The quick brown fox jumps over the lazy dog.'

// const words = str.split(' ') //通过空格分隔成数组
// console.log(words[0])//The


// const chars = str.split('') //分割成单个字符
// console.log(chars[8])//k 

// const strCopy = str.split()
// console.log(strCopy) //[ 'The quick brown fox jumps over the lazy dog.' ]


// 15. String.startsWith(searchString[, position])
// startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。区分大小写
// searchString:要搜索的子字符串。
// position 可选:在 str 中搜索 searchString 的开始位置，默认值为 0。

// var str = "To be, or not to be, that is the question."

// alert(str.startsWith("To be"))         // true
// alert(str.startsWith("not to be"))     // false
// alert(str.startsWith("not to be", 10)) // true


// 16. String.substring(indexStart[, indexEnd])
// substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
// indexStart:需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
// indexEnd:可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

// var anyString = "Mozilla"

// // 输出 "Moz"
// console.log(anyString.substring(0,3))
// console.log(anyString.substring(3,0))
// console.log(anyString.substring(3,-3))
// console.log(anyString.substring(3,NaN))
// console.log(anyString.substring(-2,3))
// console.log(anyString.substring(NaN,3))

// // 输出 "lla"
// console.log(anyString.substring(4,7))
// console.log(anyString.substring(7,4))

// // 输出 ""
// console.log(anyString.substring(4,4))

// // 输出 "Mozill"
// console.log(anyString.substring(0,6))

// // 输出 "Mozilla"
// console.log(anyString.substring(0,7))
// console.log(anyString.substring(0,10))


// 17. String.toLocaleLowerCase()
// toLocaleLowerCase()方法根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。

// 'ALPHABET'.toLocaleLowerCase() // 'alphabet'


// 18. String.toLocaleUpperCase()
// toLocaleUpperCase() 方法根据本地主机语言环境把字符串转换为大写格式，并返回转换后的字符串。

// 'alphabet'.toLocaleUpperCase() // 'ALPHABET'


// 19. String.toLowerCase()
// toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。

// ​console.log( "ALPHABET".toLowerCase() ) // "alphabet"


// 20. String.toString()
// toString() 方法返回指定对象的字符串形式。

// var x = new String("Hello world")
// alert(x.toString())      // 输出 "Hello world"


// 21. String.toUpperCase()
// toUpperCase() 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。

// const sentence = 'The quick brown fox jumps over the lazy dog.'
// console.log(sentence.toUpperCase()) //"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// 22 .String.trim()
// trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。

// const greeting = '   Hello world!   '
// console.log(greeting) //"   Hello world!   "
// console.log(greeting.trim()) //"Hello world!"


// 23. String.valueOf()
// valueOf() 方法返回  String  对象的原始值

// const stringObj = new String('foo')
// console.log(stringObj) //String { "foo" }
// console.log(stringObj.valueOf()) //"foo"