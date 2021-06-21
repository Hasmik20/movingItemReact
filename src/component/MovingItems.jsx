import {useState, useEffect} from 'react'

import PopUpTable from './PopUpTable'


const MovingItem = () => {

  const [count,setCount] = useState(0)
  const [click,setClick] = useState(false)
  const [stopAnimation, setStopAnimation] = useState(false)
  const [showPopUpTable, setShowPopUpTable] = useState(false)
  const [pauseItem, setPauseItem] = useState(false)
 let randomColor = Math.floor(Math.random()*16777215).toString(16);

  const handelMoveItem = (e) =>{
    const box = e.target
    setClick(click)
    setCount(count + 1)
    setStopAnimation(true)
    setPauseItem(false)
    setShowPopUpTable(false)
    // box.classList.add('moveItem')
    box.style.backgroundColor = "#" + randomColor;
    e.stopPropagation() 
  }
  const handelStopAnimation = (e) =>{
   setStopAnimation(false)
   setShowPopUpTable(true)
   
    // e.target.classList.remove('moveItem')
    console.log(stopAnimation)
  }
  const handelPauseItem = (e) =>{
  setPauseItem(true)
    //  e.target.classList.add('pauseItem')

   }
  return ( 
    <div>
      <div >
       {showPopUpTable &&  <PopUpTable count={count}/>}
      </div>
      <div className={`item ${stopAnimation && "moveItem"} || ${!stopAnimation && "" } ||
                       ${pauseItem && "pauseItem"}
                       `} 
                       onClick={handelMoveItem} onMouseOver={handelPauseItem }
                      onAnimationEnd={handelStopAnimation}
                              >
        <p className="count"> {count} </p>
      </div>
   
    </div>
   );
}
 
export default MovingItem;