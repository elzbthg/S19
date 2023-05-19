//Testing...
console.log("Hello World");

// Declaring global variables
let username, password, role;

// Login 
function login() {
  username = ("Enter your username:");
  password = ("Enter your password:");
  role = ("Enter your role:");

  if (!username || !password || !role) {
    ("Input should not be empty. Please try again.");
  } else {
    let message;

    switch (role) {
      case "admin":
        message = "Welcome back to the class portal, admin!";
        break;
      case "teacher":
        message = "Thank you for logging in, teacher!";
        break;
      case "student":
        message = "Welcome to the class portal, student!";
        break;
      default:
        message = "Role out of range.";
    }

   (message);
  }
}

// Calculating the average 
function calculateAverage(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  let letter;

  if (average <= 74) {
    letter = "F";
  } else if (average <= 89) {
    letter = "B";
  } else if (average <= 95) {
    letter = "A";
  } else {
    letter = "A+";
  }

  console.log(`Hello, student, your average is ${average}. The letter equivalent is ${letter}`);
}

login();

calculateAverage(93, 91, 98, 99);
