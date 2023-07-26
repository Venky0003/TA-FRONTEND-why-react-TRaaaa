function Header() {
    return (
      <header>
        <nav className="container flex justify-between align-center">
       <div>
       <img className="logo" src="/images/logo1.png" alt="Logo"/>
       </div>
      <ul className="flex">
        <li className="links">Home</li>
        <li className="links">About </li>
        <li className="links">Contact</li>
      </ul>
      </nav>
      </header>
    );
  }
  

  export default Header //from 1 file only one default export

export function add(){
    alert('hello')
}
// it will be exported as object
