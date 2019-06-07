import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      curIndex : 0,
      images : []
    }
  }
  componentDidMount(){
this.setState({
  images: carouselData
})
  }

  leftClick = () => {
    const index = this.state.curIndex;
    const indexLength = this.state.images;
    (index > 0 ? this.setState({curIndex : index -1}) : this.setState({curIndex : indexLength.length - 1}))
  }

  rightClick = () => {
    const index = this.state.curIndex;
    const indexLength = this.state.images;
    (index < (indexLength.length-1) ? this.setState({curIndex : index +1}) : this.setState({curIndex : 0}))
  }

  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img className="carousel img" src={carouselData[this.state.curIndex]} alt='Carousel Img' />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}