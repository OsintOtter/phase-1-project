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
    notes: formData.get('notes'),
    location: formData.get('location')
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
  .then(data => {
    console.log(data);
    form.reset(); // Reset the form after successful submission
  })
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
          <span class="species">Species: ${catchItem.species} - </span>
          <span class="bait">Bait: ${catchItem.bait} - </span>
          <span class="catch-time">Time: ${catchItem.catchTime} - </span>
          <span class="notes">Notes: ${catchItem.notes} - </span>
          <span class='location'>Location: ${catchItem.location} - </span>
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
