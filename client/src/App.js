import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Load from './components/load/load';

import './index.css'

const Todo = lazy(()=>import('./todo/todo'));
const Home = lazy(()=>import('./pages/home'));
const Calculator = lazy(()=>import('./pages/calculator/Calculator'));


function App() {
  return (
    <>
      <Suspense fallback={<Load/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
