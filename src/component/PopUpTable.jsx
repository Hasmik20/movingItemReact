import {useState} from 'react'

const PopUpTable = ({count}) => {
 const [close, setClosed] = useState(false)

  const handelDelete = (e) =>{
    // e.target.parentElement.style.display = "none"
    setClosed(true)
  }
  return (  
    close === false ? <div style={{position:"relative" }}>
      <div style={{position:"absolute",top:"1%", left:"45%"}}>
      <div className="popUpTable">
          <p>Your score: {count}</p>
          <span onClick={handelDelete}>X</span>
        </div>
      </div>  
    </div> : null
  );
}
 
export default PopUpTable;