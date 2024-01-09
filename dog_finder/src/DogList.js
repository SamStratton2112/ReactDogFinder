import {NavLink} from 'react-router-dom';

const DogList = ({dogs}) =>{
    return(
        <ul>
            {dogs.map((dog)=>(
                <NavLink key={dog.name} to={`/dogs/${dog.name}`}><li>{dog.name}</li></NavLink>
            ))}
        </ul>
    )
}

export default DogList;
