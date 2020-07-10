const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

// minhaPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {});

// async function executaPromise() {
// const response = await minhaPromise();

// console.log(response);
// console.log(await minhaPromise());
// console.log(await minhaPromise());
// console.log(await minhaPromise());

// minhaPromise().then((response) => {
//   console.log(response);

//   minhaPromise().then((response) => {
//     console.log(response);

//     minhaPromise().then((response) => {
//       console.log(response);
//     });
//   });
// });
// }

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();
