import {Link, useNavigate} from 'react-router-dom';

const Dog = ({dog}) =>{
    const nav = useNavigate()
    // if there is no dog then redirect to /dogs
    if(!dog){
        nav('/dogs')
    }
    // show all details about the dogs
    return(
        <div>
            <button><Link to="/dogs">All Dogs</Link></button>
            <h1>Name: {dog.name}</h1>
            <h2>Age:{dog.age} years old</h2>
            <ul>
                {dog.facts.map(fact=>(
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
            <img src={dog.src} alt={dog.name}/>
        </div>
    )
}

export default Dog;