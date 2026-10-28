let obj = {
  name: "Abhay",
  location: { city: "Mathura" }
};

console.log(obj.location.state ??= "UP");
console.log(obj);