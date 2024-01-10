import { Link } from "react-router-dom";

const ColorPage = ({color}) =>{
    return(
        <div style={{backgroundColor : color, height: '100rem'}}>
            <Link to='/colors'><button>All Colors</button></Link>
        </div>
    )
}

export default ColorPage;