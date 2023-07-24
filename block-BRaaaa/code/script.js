let input = document.querySelector(`input[type="text"]`);
let rootelm = document.querySelector('.movie-list');
let listofMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    listofMovies.push({
      name: event.target.value,
      status:false
    });
    event.target.value = '';
    createUI();
  }
});

function createUI() {
 rootelm.innerHTML = '';

  listofMovies.forEach((movie, index) => {
    let li = document.createElement('li');
    li.classList.add('flex' ,'padding-50','list')
    let span = document.createElement('span');
    span.textContent = movie.name;
    let p = document.createElement('p');
    p.textContent = "To Watch"
    p.addEventListener('click', () => {
        movie.status = !movie.status;
        if (movie.status) {
            p.textContent = "Watched";
          } else {
            p.textContent = "To Watch";
          }
          console.log(listofMovies);
    });
    
    li.append(span, p);
    rootelm.append(li);
 
  });
}


