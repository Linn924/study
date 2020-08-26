function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
Star.prototype.sing = function() {
    console.log('我会唱歌');

}
Star.prototype.sex = '女';
// Object.prototype.sex = '男';
var ldh = new Star('刘德华', 18);
ldh.sex = '男';
console.log(ldh.sex);
console.log(Object.prototype);
console.log(ldh);
console.log(Star.prototype);
console.log(ldh.toString());
