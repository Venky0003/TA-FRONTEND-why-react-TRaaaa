// import Header, { add } from './Header'  // for default
// import * as everything from "./Header" // for all
import Header from './Header'
import Hero from './Hero'
import Articles from './Article'
import Footer from "./Footer"

function App(props) {

  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Footer/>
    </>
  );
}


export default App;
