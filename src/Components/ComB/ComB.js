import { useContext } from "react"
import { MyContext } from "../App/App"
import Carousel from 'react-bootstrap/Carousel';
import "./ComB.css"

const ComB = () => {
let {slider,error,loading}=useContext(MyContext)

return ( 
       <>
{error && <div className="text-danger">{error}</div> }
{loading && <div className="spinner-border spinner-border.-sm " ></div> }

<Carousel data-bs-theme="dark">
{slider && slider.map((elem)=>{
    return(
        <Carousel.Item key={elem.id}>
        <img
          className="pic d-block w-100"
          src={elem.url}
          alt={elem.alt}
        />
        <Carousel.Caption>
          <h5>{elem.title}</h5>
          <p>{elem.description}</p>
        </Carousel.Caption>
      </Carousel.Item>

    ) 
 })}
       </Carousel>

       </>
     );
}
 
export default ComB;





