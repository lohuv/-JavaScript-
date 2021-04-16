function Stack() {
    this.dataStore = [];//保存栈内元素
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

//实现push方法
function push(element) {
    this.dataStore[this.top++] = element;
    //新入栈的元素就被放在 top 的当前值对应的位置，然后再将变量 top 的值加 1，指向下一个位置。
}

//pop()方法和push方法相反
function pop() {
    return  this.dataStore[--this.top]
}
//peek() 方法返回数组的第 top-1 个位置的元素，即栈顶元素：
function peek() {
    return this.dataStore[this.top-1];
}
//length ()
function length() {
    return this.top;
}
//清除栈
function clear() {
    this.top = 0;
}
export { Stack };

