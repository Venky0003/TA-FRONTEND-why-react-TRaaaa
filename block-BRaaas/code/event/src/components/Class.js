import React from 'react';



export class Hero extends React.Component {

  handleClick(name) {
    alert(`Hello ${name}`);
  }
  render(){
    return(
      <>
       <button onClick={() => this.handleClick('John')}>John</button>
      </>
    )
  }
}

export default Hero;