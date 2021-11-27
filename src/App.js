import Goodbye from './components/goodbye/goodbay';
import './App.css';
import { Welcome } from './components/welcome/welcome.js';
import { ColorredText } from './components/colorText/colorText';
import FunctionalColorText from './components/functionalColorText/functionalColorText';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import {TaskProvider} from './contexts/taskContext';
import ToDoList from './components/to-do-list/to-do-list';

function App() {


  return (
    <div className="App">
      <TaskProvider>
     
      <Router>
        
      <Routes>
        <Route path="/" element={<ToDoList/>} />
        

        </Routes>
        </Router>
        </TaskProvider>

    </div>
  );
}

export default App;
