import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"; //Top of App.js


const Params =(props) =>{
    const { word, color, bgcolor } = useParams();

    const style = {
      color: color ,
      backgroundColor: bgcolor 
      

    }
    return(
      <div>
        {
            isNaN(word)?
            <p style={style}>
                This is a word: {word}
            </p>
            :
            <p>
                this is a number : {word}
            </p>
        }
      </div>
    )
  }
  


export default Params