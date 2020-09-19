// practice promise function

console.log("Start");

/* Simple Promise */

/*

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Here the user data");
    // resolve({ userEmail: "Gerysantos03@gmail.com" });
    reject(new Error("User not logged in yet"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err));

*/

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("the data was here");
      resolve({
        userEmail: email,
        userPassword: password,
      });
    }, 1500);
  });
}

function getUserInvoice(email) {
  return new Promise((resolve, reject) => {
    let invoice = ["invoice1", "invoice2", "invoice3"];
    setTimeout(() => {
      resolve(invoice);
    }, 2000);
  });
}

function getInvoiceDetail(invoice) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Invoice number 1 finished");
    }, 3000);
  });
}

/* Promise function */
login("Gerysantos03@gmail.com", "123456")
  .then((user) => getUserInvoice(user.userEmail))
  .then((invoice) => getInvoiceDetail(invoice))
  .then((invoiceDetail) => console.log(invoiceDetail))
  .catch((err) => console.log("invoice detail was invalid"));

/* Async Await function */
async function displayData() {
  try {
    const loggedUser = await login("Gerysantos03@gmail.com", "oplet");
    const invoice = await getUserInvoice(loggedUser.userEmail);
    const invoiceDetail = await getInvoiceDetail(invoice);
    console.log(invoiceDetail);
  } catch (err) {
    console.log("invoice detail was invalid");
  }
}

displayData();

console.log("End");

/* promise.all() */
// no matter we set the delay time promise all will returning all the data at the same time

const github = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("my github is");
    resolve({ username: "gerysantoso03" });
  }, 2000);
});

const twitter = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("my twitter is");
    resolve({ username: "akuoplet" });
  }, 5000);
});

Promise.all([github, twitter]).then((result) => console.log(result));
