import React from 'react'

class Car extends React.Component{

  constructor(props)
  {
  super(props);
  this.state={
  
  color:"red",
  brand: "toyata",
  model:"yaris",
  owner:"john"
  };
  }
  
  static getDerivedStateFromProps(props, state) {
    return {color: props.favcolor };
  }
  
  render(){
  
  return(<div>
  <p>
   The model no of the car is :{this.state.model} <br/>
   The owner  of the car is :{this.state.owner}<br/>
   The  color of the car is :{this.state.color}
  </p>
  
  </div>);
  
  }
  
  componentDidMount(){
  
    setTimeout(() => {
      this.setState({owner: "james"})
    }, 3000)
  
  
  }
  


}
export default Car;