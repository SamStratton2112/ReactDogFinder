import {Link, useNavigate} from 'react-router-dom';


const Dog = ({dog}) =>{
    const nav = useNavigate()
    if(!dog){
        nav('/dogs')
    }
    console.log(dog)
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