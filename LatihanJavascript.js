// Tutorial
console.log('Top-level code!');

const times = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if(a !== parseInt(a, 10) || b !== parseInt(b, 10)){
      reject('Input salah dimasukan, harus integer');
    }else{
      resolve(a * b * c);
    }
  });
};

times(2, 3, 4)
  .then((res) => {
    console.log('Berhasil dengan hasil kali : ', res);
  })
  .catch((err)=>{
    console.log(err);
  });

const divisor = (a, b) => {
  return new Promise((resolve, reject) => {
    if(a !== parseInt(a, 10) || b !== parseInt(b, 10)){
      reject('Not an integer');
    }else{
      resolve(a / b);
    }
  });
};

divisor(56, 4)
  .then((res) =>{
    console.log('Berhasil dengan hasil bagi :', res);
  })
  .catch((err) => {
    console.log(err);
  });

const adder = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a !== parseInt(a, 10) || b !== parseInt(b, 10)) {
      reject('Not an integer!');
    } else {
      resolve(a + b);
    }
  });
};

adder(1, 1)
  .then((res) => {
    console.log('Berhasil dengan hasil:', res);
  })
  .catch((err) => {
    console.log(err);
  });

// IIFE
(async () => {
  try {
    const hasil = await adder('a', 'a');
    console.log(`Aku adalah hasil dari Async, Await, nilaiku: ${hasil}`);
  } catch (err) {
    console.log('Aku error dengan kode:', err);
  }
})();

(async () => {
  try {
    const hasil = await adder(4, 4);
    console.log(`Aku adalah hasil dari Async, Await, nilaiku: ${hasil}`);
  } catch (err) {
    console.log(err);
  }
})();

(async () =>{
  try{
    const result = await times(4, 5, 10);
    console.log(`Aku adalah hasil dari Async, Await, nilaiku: ${result}`);
  }catch(err){
    console.log(err);
  }
})();

(() => {
  console.log('IIFE sinkron.');
})();

(() =>{
  console.log('Langsung muncul saat pertama kali pop up !!');
})();

console.log('Bottom level-code!');

/* 
  Catatan JavaScript

  // PTI vs ES6
  var namaVariabel = ....
  let namaVariabel = ....
  const namaVariabel = ....

  // Outdated
  function getTodo(req, res) {
    // do something here...
  }

  getTodo(req, res);

  const getTodo = (req, res) => {
    // do something here...
  }

  // JavaScript PTI
  function add(a, b) {
    return a + b;
  }

  console.log(add(1, 1));

  // ES6
  const add = (a, b) => a + b;
  console.log(add(1, 1));

  // JavaScript
  (function() {
    console.log("Coba");
  })();

  // Perbedaan
  function() {}

  () => {}

  // ES6
  (() => {
    console.log("Coba");
  })();

  // Promise / Async Await
  const sendToServer = async () => {
    const cookie = await fetchCookie();
    // Kirim server.
  }

  const fetchCookie = () => {
    let cookie = document.cookie;
    return cookie;
  }

  const solve = () => {
    sendToServer();
    console.log("Terkirim...");
  }

  function A() {
    // Kirim server...
  }

  function B() {
    let cookie = document.cookie;
    A();
    console.log("Terkirim");
  }

  // Promise
  const adder = (a, b) => {
    return new Promise( (resolve, reject) => {
      if(!a.isInteger() || !b.isInteger) {
        reject('Not an integer!');
      }
      else {
        resolve(a + b);
      }  
    });  
  }
  
  adder()
*/
