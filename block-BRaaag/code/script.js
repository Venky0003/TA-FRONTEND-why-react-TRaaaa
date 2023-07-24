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
  updateLocalStorage();
  createUI();
}

function getMovieStaus(movie) {
  return movie.status ? 'Watched' : 'To Watch';
}

function updateLocalStorage() {
  localStorage.setItem('listofMovies', JSON.stringify(listofMovies));
}

function createUI() {
  //   rootelm.innerHTML = '';

  let ui = listofMovies.map((movie, index) => {
    // let li = React.createElement(
    //   'li',
    //   { className: 'flex list padding-50' },
    //   React.createElement('span', {}, movie.name),
    //   React.createElement(
    //     'p',
    //     {
    //       onClick: () => handleStatus(movie),
    //     },
    //     getMovieStaus(movie)
    //   )
    return (
      <li className="flex list padding-50">
        <span>{movie.name}</span>
        <p>{getMovieStaus(movie)}</p>
      </li>
    );
  });
  ReactDOM.render(ui, rootelm);
}

createUI();
