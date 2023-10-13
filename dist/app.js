function protectedMethod() {
  return "Something";
}

class myClass {
  myPublicMethod() {
    return protectedMethod();
  }
}

let myObj = new myClass();

console.log(myObj.myPublicMethod());
