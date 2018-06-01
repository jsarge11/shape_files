import React, { Component } from 'react'
import Shape from './Shape'
import './App.css'
export default class App extends Component {
 constructor() {
  super();

  this.state = {
   shapes: [],
   resize_bottom: false,
   resize_top: false,
   resize_left: false,
   resize_right: false,
   mouseX: 0,
   mouseY: 0
  }
 }
 addShape(color) {
  this.setState({ shapes: [...this.state.shapes, color]})
 }
 trackMouse(e) {
  this.setState({ mouseX: e.pageX, mouseY: e.pageY})
 }
 
 render() {
  let { resize_bottom, resize_top, resize_left, resize_right } = this.state;
  let shapesArr = this.state.shapes.map((info, i) => {
   return (
    <div key={i}>
     <Shape color={info} 
            className={`shape_${i}`} 
            borderRadius="50%"
            mouseX={this.state.mouseX}
            mouseY={this.state.mouseY}/>
    </div>
   )
  })

  return (
   <div className="App" onMouseMove={(e)=>this.trackMouse(e)}>
      <Shape backgroundColor="red" borderRadius="50%" />
    </div>
  )
 }
}