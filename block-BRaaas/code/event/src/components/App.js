import fruits from "./fruits"

function handleClick() {
  alert('Hello React Event');
}
function handleClick3() {
  alert('To learn React use https://reactjs.org');
  alert('React and ReactDOM works together');
  alert(' Babel helps in writing JSX');
}

function handleName(name) {
  alert(`Hello ${name}`);
}

function handleClickFruit (fruit) {
  alert(`Fruit name: ${fruit}`);
};


function App(props) {

  return (
    <>
      <div className="container text-center padding-50">
        <button className="margin-all" onClick={handleClick}>Click Me!</button>
        <button className="margin-all" onClick={handleClick3}>How can I help you?</button>
        <button className="margin-all" onClick={(event) => handleName('Arya')}>Arya</button>
        <button className="margin-all" onClick={(event) => handleName('John')}>John</button>
        <button className="margin-all" onClick={(event) => handleName('Bran')}>Bran</button>
       {fruits.map((fruit) =>
        <div className="margin-all" key={fruit.id}>
        <button onClick={() => handleClickFruit(fruit.value)}>{fruit.id}</button>
         </div>
       )}
      </div>
    </>
  );
}


export default App



