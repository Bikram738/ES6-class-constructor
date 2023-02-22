//challenge 2 ES6 class

class Car {          //class with constructor 
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {   /*here model is the child class and car is the parent class*/
  constructor(brand, carModel) {
    super(brand);
    this.model = carModel;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
} 

let myCar = new Model("Ford", "Mustang");
document.getElementById("para").innerHTML = myCar.show();
