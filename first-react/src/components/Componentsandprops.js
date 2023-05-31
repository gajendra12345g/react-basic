import React from 'react';
class Greeting extends React.Component{
  render(){
    return (
    <h1>Hii, {this.props.name}! your age is {this.props.age}</h1>
    )
  }
  }
const Componentsandprops=()=>{
  return (
    <>
    <Greeting name="gajendra" age="22"/>
    </>
  )
}
export default Componentsandprops;