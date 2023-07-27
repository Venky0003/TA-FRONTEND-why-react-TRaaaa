import colors from '../data/colors.json';

function App(props) {
  const keys = Object.keys(colors); //for extracting the names as keys
  return (
    keys.map((key) => <Color info={colors[key]} name={key} />)
  );
}

function Color(props) {
  return (
    <>
      <div className="container flex justify-between ">
        <h2 className="flex-10 title">{props.name}</h2>
        <div className="flex-85">
          <div className="flex wrap">
            {props.info.map((color, i) => (
              <div className="main-box"key={i}>
                <p className="color-box"style={{ backgroundColor: color }}></p>
                {i === 0 ? (
                  <span className='span-name'>{(i + 1) * 50}</span>
                ) : (
                  <span  className='span-name'>{(i - 1 + 1) * 100}</span>
                )}
                <span className="span-color">{color}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
