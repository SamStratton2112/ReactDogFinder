import './ColorIndex.css';
import {Link} from 'react-router-dom';

const ColorIndex = ({colors})=>{
    return(
        <div className='ColorIndex'>
            <h1>Featured Colors:</h1>
            {colors.map(c=>(
                <Link to={`/colors/${c}`}><span key={c} className="ColorIndex-color" style={{backgroundColor: c}}>{c}</span></Link>
            ))}
            <button className='ColorIndex-btn'><Link className='ColorIndex-btn' to='/colors/new'>New Color</Link></button>
        </div>
    )
}

export default ColorIndex;

