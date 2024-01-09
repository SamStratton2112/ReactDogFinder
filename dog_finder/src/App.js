import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom';
import DogList from './DogList';
import allDogs from './allDogs';
import Dog from './Dog'

function App() {
  return (
    <div className="App">
      <Routes>
        {
          allDogs.map(dog=><Route
          key={dog.name} 
          exact 
          path={`/dogs/${dog.name}`} 
          element={<Dog dog={dog}/>}></Route>)
        }
        <Route
        key="dogs"
        exact
        path="/dogs"
        element={<DogList dogs={allDogs}/>}
        ></Route>
        <Route
        key="redirectDogs"
        path="*"
        element={<Navigate to="/dogs"/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
