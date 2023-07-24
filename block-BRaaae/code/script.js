let input = document.querySelector(`input[type="text"]`);
let rootelm = document.querySelector('.movie-list');
let listofMovies = localStorage.getItem('listofMovies')
  ? JSON.parse(localStorage.getItem('listofMovies'))
  : [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    listofMovies.push({
      name: event.target.value,
      status: false,
    });
    event.target.value = '';
    updateLocalStorage();
    createUI();
  }
});

function handleStatus(movie) {
  movie.status = !movie.status;
  createUI();
}


function updateLocalStorage() {
    localStorage.setItem('listofMovies', JSON.stringify(listofMovies));
  }
// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('on') && typeof attr[key] === 'function') {
//       let event = key.substring(2).toLowerCase();
//       element.addEventListener(event, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   if (attr.innerText) {
//     element.innerText = attr.innerText;
//   }
//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });

//   return element;
// }

function createUI() {
//   rootelm.innerHTML = '';

  let ui = listofMovies.map((movie, index) => {
    let li = React.createElement(
      'li',
      { className: 'flex list padding-50' },
      React.createElement('span', {}, movie.name),
      React.createElement('p', {
        onClick: () => {
          handleStatus(movie);
        },
        children: movie.status ? 'Watched' : 'To Watch',
      })
    );
    return li;
  });
  ReactDOM.render(ui, rootelm);
}
