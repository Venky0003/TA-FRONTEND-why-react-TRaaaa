let input = document.querySelector(`input[type="text"]`);
let rootelm = document.querySelector('.movie-list');
let listofMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    listofMovies.push({
      name: event.target.value,
      status: false,
    });
    event.target.value = '';
    createUI();
  }
});

function handleStatus(movie, p) {
  movie.status = !movie.status;
  p.innerText = movie.status ? 'Watched' : 'To Watch';
//   console.log(movie.status)
  return movie.status;
}

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('on') && typeof attr[key] === 'function') {
      let event = key.substring(2).toLowerCase();
      element.addEventListener(event, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  if (attr.innerText) {
    element.innerText = attr.innerText;
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });

  return element;
}

function createUI() {
  rootelm.innerHTML = '';

  listofMovies.forEach((movie, index) => {
    let li = elm(
      'li',
      { className: 'flex list padding-50' },
      elm('span', {}, movie.name),
      elm('p', {
        onclick: () => {
          handleStatus(movie, li.querySelector('.status'));
        },
        innerText: movie.status ? 'Watched' : 'To Watch',
      } )
    );
    
    rootelm.append(li);
  });
}
