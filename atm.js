class User {
  constructor(fName, lName, accountNum, pinNumber, balance) {
    this.fName = fName;
    this.lName = lName;
    this.accountNum = accountNum;
    this.pinNumber = pinNumber;
    this.accBalance = balance;
    this.accReceipt = "";
  }

  get balance() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.accBalance);
  }

  get receipt() {
    return this.accReceipt;
  }

  deposit(amount) {
    this.accBalance += amount;
    this.accReceipt += `Deposit: ${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)} // New Balance: ${this.balance}\n`;
  }

  withdrawal(amount) {
    this.accBalance -= amount;
    this.accReceipt += `Withdrawal: ${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)} // New Balance: ${this.balance}\n`;
  }
}

let user = new User("Aiden", "Thomas", "69420", "6969", 69000);

while (true) {
  let valid = false;
  let firstLast = prompt(
    "Please enter your first and last names (case sensitive): "
  );

  switch (firstLast) {
    case `${user.fName} ${user.lName}`:
      window.alert(`Hello, ${user.fName}!`);
      valid = true;
      break;
    default:
      window.alert("That was incorrect!");
  }

  if (valid === true) {
    break;
  }
}

while (true) {
  let loggedIn = false;
  let pin = prompt("Please enter the pin for your account:");

  switch (pin) {
    case `${user.pinNumber}`:
      window.alert("Successfully signed in.");
      loggedIn = true;
      break;
    default:
      window.alert("That was incorrect!");
  }

  if (loggedIn === true) {
    break;
  }
}

while (true) {
  let choice = prompt(
    "(1) To get balance\n(2) To make a deposit\n(3) To make a withdrawal\n(4) To view receipt\n(5) To exit the atm"
  );

  if (choice === "5") {
    window.alert("Exited ATM.");
    break;
  } else if (choice === "1") {
    window.alert(`Balance: ${user.balance}`);
  } else if (choice === "2") {
    let depositAmount = prompt(
      "Please enter the amount you would like to deposit:"
    );
    user.deposit(parseFloat(depositAmount));
    window.alert(`New Balance: ${user.balance}`);
  } else if (choice === "3") {
    let withdrawAmount = prompt(
      "Please enter the amount you would like to withdraw:"
    );
    if (withdrawAmount > user.accBalance) {
      window.alert("The balance cannot be negative!");
    } else {
      user.withdrawal(parseFloat(withdrawAmount));
      window.alert(`New Balance: ${user.balance}`);
    }
  } else if (choice === "4") {
    window.alert(user.receipt);
  } else {
    window.alert("Please choose from one of the choices!");
  }
}
