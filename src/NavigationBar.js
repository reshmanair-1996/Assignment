import React from 'react'
import DisplayImages from './DisplayImages';
import panda1 from './images/panda1.jpg'
import panda2 from './images/panda2.jpg'
import panda3 from './images/panda3.jpg'
import panda4 from './images/panda4.jpg'

class NavigationBar extends React.Component{
  constructor(){
    super()
    this.state={
      viewType: 'list',
      imgArray: [panda1,panda2,panda3,panda4],
      count: 0
    }
  }

  componentDidMount(){
    let containerChildren=document.getElementById("container").childNodes;
    this.getChildNodes(containerChildren)
  }
  componentWillMount(){
    document.addEventListener('mousedown',this.handleClick,false)
  }

  handleClick=(e)=>{
    if(this.node.contains(e.target)){
      document.getElementsByClassName('timeline-content')[0].style.display='block'      
    }else{
      document.getElementsByClassName('timeline-content')[0].style.display='none'
    }
  }

  getChildNodes(nodes){
    let vowelArr=['a','e','i','o','u']
    nodes.forEach(child=>{
      if(child.childNodes.length>0){
          this.getChildNodes(child.childNodes)
      }
      else if(child.data!=undefined){
        let childDataArr=child.data.split('')
        vowelArr.forEach(vowel=>{
          childDataArr.forEach((character,index)=>{
            if(character== vowel){
              childDataArr[index]="<span class='vowel'>"+vowel+"</span>"
            }
          })
        })
        child.parentNode.innerHTML=childDataArr.join('')
      }
    })
  }

  gridViewClicked(e){
    e.preventDefault()
    document.getElementById('msg').style.visibility='hidden'
    this.setState({viewType:'grid'})
  }

  listViewClicked(e){
    e.preventDefault()
    document.getElementById('msg').style.visibility='hidden'
    this.setState({viewType: 'list'})
  }

  shuffleImages(e){
    e.preventDefault()
    document.getElementById('msg').style.visibility='hidden'
    let newImgArray = this.state.imgArray.sort(()=>0.5-Math.random())
    let newCount=this.state.count+1
    this.setState({imgArray: newImgArray, count: newCount})
  }

  functionalityNotAvailable(e){
    e.preventDefault()
    document.getElementById('msg').style.visibility='visible'
  }

  resetCounter(e){
    e.preventDefault()
    document.getElementById('msg').style.visibility='hidden'

    this.setState({count:0})
  }

  displayDropdown(e){
    e.preventDefault()
    document.getElementsByClassName('timeline-content')[0].style.display='block'
  }
  render(){
    return(
      <div id="container">
        <div className="navbar">
          <div className="timeline">
            <a onClick={e=>this.displayDropdown(e)}>Timeline<span className='glyphicon glyphicon-chevron-down'></span></a>
            <div className="timeline-content"  ref={node=>this.node=node}>
              <a href='/#' onClick={e=>this.gridViewClicked(e)}>Grid view</a>
              <a href="/#" onClick={e=>this.listViewClicked(e)}>List view</a>
            </div>
          </div>
          <a href="/#" onClick={e=>this.shuffleImages(e)}>About </a>
          <a href="/#" onClick={e=>this.functionalityNotAvailable(e)}>Friends</a>
          <a href="/#" onClick={e=>this.functionalityNotAvailable(e)}>Photos</a>
          <a href="/#" onClick={e=>this.functionalityNotAvailable(e)}>Archive</a>
          <a href="/#" onClick={e=>this.resetCounter(e)}>More</a>
        </div>

        <span className="spanTagForCount">{'About Clicked : '+this.state.count}</span>
        <span id="msg" className="spanTag">Functionality not available</span>

        <DisplayImages viewType={this.state.viewType} imgArray={this.state.imgArray}/>
      </div>
    )
  }
}

export default NavigationBar