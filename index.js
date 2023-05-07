// Logging catches
const form = document.querySelector('#report-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const date = new Date(formData.get('catchTime'));
  const formattedDate = date.toLocaleString();

  const data = {
    species: formData.get('species'),
    bait: formData.get('bait'),
    catchTime: formattedDate,
    notes: formData.get('notes')
  };

  const requestBody = JSON.stringify(data);

  fetch('http://localhost:3000/catches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBody
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

// Displaying catches
const displayCatches = () => {
  const catchesList = document.querySelector('#catches-list');

  fetch('http://localhost:3000/catches')
    .then(response => response.json())
    .then(catches => {
      catchesList.innerHTML = '';

      catches.forEach(catchItem => {
        const catchElement = document.createElement('li');
        catchElement.innerHTML = `
          <span class="species">${catchItem.species}</span>
          <span class="bait">${catchItem.bait}</span>
          <span class="catch-time">${catchItem.catchTime}</span>
          <span class="notes">${catchItem.notes}</span>
        `;
        catchesList.appendChild(catchElement);
      });
    })
    .catch(error => console.error(error));
};

// Updating catches list every 5 seconds
setInterval(displayCatches, 5000);


















// const form = document.querySelector('#report-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const date = new Date(formData.get('catchTime'));
//   const formattedDate = date.toLocaleString();

//   const data = {
//     species: formData.get('species'),
//     bait: formData.get('bait'),
//     catchTime: formattedDate,
//     notes: formData.get('notes')
//   };

//   const requestBody = JSON.stringify(data);

//   fetch('http://localhost:3000/catches', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: requestBody
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// });






















// const form = document.querySelector('#report-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const data = {
//     species: formData.get('species'),
//     bait: formData.get('bait'),
//     catchTime: formData.get('catch-time'),
//     notes: formData.get('notes')
//   };

//   const requestBody = JSON.stringify(data);

//   fetch('http://localhost:3000/catches', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: requestBody
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// });
