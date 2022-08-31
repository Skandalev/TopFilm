import './movierow.css';
import { useState } from "react"


    const MovieRow = (props)=>{
    const [counter,setCounter] = useState(0)
   
 function showTrailer() {
  props.setIsOpenImage(true)
  props.setIFrame(props.trailer)
}
return(
    <tr>
    <td> 
      <img src={props.src} 
           onClick={()=>showTrailer()}/>
    </td>
     <td>{props.movieTitle}</td>
     <td> 
       <button onClick={()=>setCounter(counter-1) }>-</button>
       <span>{counter}</span>
       <button onClick={()=>setCounter(counter+1) }>+</button>
      
     </td>
     
     
    </tr>

)
}
export default MovieRow