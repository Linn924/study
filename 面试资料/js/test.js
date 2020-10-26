//实现思路：假设两个栈分别为 stack1 和 stack2，将stack1用于入队操作，将stack2用于出队操作。当stack2为空时，将stack1的元素弹出并推入stack2中。每次出队操作，就是对stack2的弹出操作。
let stack1 = [],stack2 = []

function add(node){
    stack1.push(node)
}

function remove(){
    if(stack1.length == 0 && stack2.length == 0) reutrn 

    if(stack2.length == 0){
        for(let i = stack1.length - 1; i>=0; i--){
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}