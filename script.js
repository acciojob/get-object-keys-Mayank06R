//your JS code here. If required.
const student = {
  name: "Mayank",
  age: 22,
  city: "Vadodara"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]
