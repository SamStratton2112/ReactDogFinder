import { useNavigate } from "react-router-dom";
import{useState} from 'react';

const ColorList = ({setColors}) =>{
    const nav = useNavigate()
    const colorOptions = ['peachpuff', 'lavender', 'lightseagreen']
    const [selectedColor, setSelectedColor] = useState(null);
    // use state to keep track of selected color
    const handleSelect=(e)=>{
        setSelectedColor(e.target.value)
    }

    // update colors list and redirect to /colors
    const handleSubmit = e =>{
        e.preventDefault();
        setColors(colors=>[...colors, selectedColor])
        nav('/colors')
    }

    return(
        <form onSubmit={handleSubmit}>
            {colorOptions.map(c=>(
                <div key={c}>
                    <label htmlFor={c}>{c}</label>
                    {selectedColor === c? 
                    // if selected, change color of radio btn
                        <input 
                        type='radio'
                        onClick={handleSelect} 
                        id={c} 
                        name="color_options" 
                        value={c}
                        style={{ color: c }}/>
                        :
                        <input 
                        type='radio'
                        onClick={handleSelect} 
                        id={c} 
                        name="color_options" 
                        value={c}
                        style={{ color: 'white' }}/>
                    }
                </div>))
            }
            <br/>
            <button>Submit</button> 
        </form>
    )
}

export default ColorList;