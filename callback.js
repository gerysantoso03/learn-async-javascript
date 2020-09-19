/* Callback Function */

console.log("Start");

function login(email, password, callback) {
  setTimeout(() => {
    console.log("the data was here");
    callback({
      userEmail: email,
      userPassword: password,
    });
  }, 1500);
}

function getUserInvoice(email, callback) {
  let invoice = ["invoice1", "invoice2", "invoice3"];
  setTimeout(() => {
    callback(invoice);
  }, 2000);
}

function getInvoiceDetail(invoice, callback) {
  setTimeout(() => {
    callback("Invoice number 1 finished");
  }, 3000);
}

// Terrible structure of writting async code, too complicated
const user = login("Gerysantos03@gmail.com", 12345, (user) => {
  console.log(user);
  getUserInvoice(user.userEmail, (invoices) => {
    console.log(invoices);
    getInvoiceDetail(invoices, (detail) => {
      console.log(detail);
    });
  });
});

console.log("End");

// Callback
const books = [
  { name: "Gery", timeSpent: 3000 },
  { name: "Santoso", timeSpent: 2000 },
  { name: "Oplet", timeSpent: 4000 },
];

const readBooks = (time, book, callback) => {
  console.log(`Saya membaca buku ${book.name}`);
  setTimeout(() => {
    let sisaWaktu = 0;
    if (time > book.timeSpent) {
      sisaWaktu = time - book.timeSpent;
      time = sisaWaktu;
      console.log(
        `saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`
      );
      callback(sisaWaktu);
    } else {
      console.log("waktu saya habis");
      callback(time);
    }
  }, book.timeSpent);
};

let waktu = 10000;

for (let i = 0; i < 3; i++) {}

let book = readBooks(waktu, books[0], (book) => {
  console.log(book);
});
