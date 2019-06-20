import React from 'react'

class DisplayImages extends React.Component{
  render(){
    let imgArray=this.props.imgArray
    return(
      <div style={{display: this.props.viewType==='grid'?'flex':'table', alignContent:'center'}}>
        <div className="column">
          <img src={imgArray[0]} alt="panda1"></img>
          <img src={imgArray[1]} alt="panda2"></img>
        </div>
        <div className="column">
          <img src={imgArray[2]} alt="panda3"></img>
          <img src={imgArray[3]} alt="panda4"></img>
        </div>
      </div>
    )
  }
}

export default DisplayImages