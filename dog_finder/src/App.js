import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom';
import DogList from './DogList';
// import dog data
import allDogs from './allDogs';
import Dog from './Dog'

function App() {
  return (
    <div className="App">
      <Routes>
      {/* establish all routes for all dogs */}
        {
          allDogs.map(dog=><Route
          key={dog.name} 
          exact 
          path={`/dogs/${dog.name}`} 
          element={<Dog dog={dog}/>}></Route>)
        }
        {/* establish home route */}
        <Route
        key="dogs"
        exact
        path="/dogs"
        element={<DogList dogs={allDogs}/>}
        ></Route>
        {/* redirect to /dogs if invalid url */}
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
