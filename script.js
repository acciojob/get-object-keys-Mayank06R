//your JS code here. If required.
const student = {
  name: "John",
};
Object.prototype.getKeys =function () {
	return Object.keys(this)
}
console.log(myObj.getKeys());



// Testing the function
console.log(getKeys(student)); // Output: ["name"]
