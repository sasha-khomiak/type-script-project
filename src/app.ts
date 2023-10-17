class MyClass {
  private someMsg: string = "Hello";

  showMsg() {
    console.log(this.someMsg);
  }

  editMsg(txt) {
    this.someMsg = txt;
  }
}

let myObj = new MyClass();

myObj.showMsg();
myObj.editMsg("My name is Sasha");
myObj.showMsg();

// myObj.someMsg = "My name is Sasha";

// class ChildClass extends ParentClass {}

// let objFromParentClass = new ParentClass();
// let objFromChildClass = new ChildClass();

// objFromParentClass.showMsg();
// objFromChildClass.showMsg();
