import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import FirsttPage from './components/FirsttPage';
import SecondPage from './components/SecondPage';
import Component2 from './components/Component2';


function App() {
  return (
    <>
     <Router>
    <Routes>
    <Route path='/' element={<FirsttPage/>}/>
      <Route path='/second' element={<SecondPage/>}/>
      <Route path='/component2' element={<Component2 />} />
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
