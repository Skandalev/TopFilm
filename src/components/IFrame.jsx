import Button from '@mui/material/Button';
import "./iframe.css"
const IFrame= (props)=>{
    return(
 
<div>

   { props.isOpenImage  && (
  <div className='openiframe'>
    <Button variant="outlined" color="error" onClick={()=>props.setIsOpenImage(false)}> hide</Button>
    <iframe
      width="786"
      height="393"
      src= {"https://www.youtube.com/embed/"+props.iframe} 
      title="THE PRESTIGE Trailer (2006)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    </div>
   )
   }

</div>


  
        )}
export default IFrame