import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom'
import ColorForm from './ColorForm';
import ColorIndex from './ColorIndex';
import ColorPage from './ColorPage';
import {useState} from 'react';

function App() {
  // Initialize colors array and updating function
  const [colors, setColors] = useState(['lightcyan', 'lemonchiffon', 'lightcoral'])

  return (
    <div className="App">
      <Routes>
        {/* pass down setColors */}
        <Route path="/colors/new" element={<ColorForm colors={colors} setColors={setColors}/>}/>
        {/* render component to show all colors */}
        <Route path="/colors" element={<ColorIndex colors={colors}/>}/>
        {/* establish routes for all colors with coresponding components */}
        {colors.map(c=><Route path={`/colors/${c}`} element={<ColorPage color={c}/>}/>)}
        {/* redirect to /colors for any urls not matched */}
        <Route path="*" element={<Navigate to='/colors'/>}/>
      </Routes>
    </div>
  );
}

export default App;
