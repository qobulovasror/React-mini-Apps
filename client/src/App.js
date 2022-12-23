import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Load from './components/load/load';

const Todo = lazy(()=>import('./pages/todo/todo'));
const Home = lazy(()=>import('./pages/home'));
const Calculator = lazy(()=>import('./pages/calculator/Calculator'));
const Weather = lazy(()=>import('./pages/weather/weather'));
const Share = lazy(()=>import('./pages/share/share'));


function App() {
  return (
    <>
      <Suspense fallback={<Load/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
            <Route path="/weather" element={<Weather/>}/>
            <Route path="/share" element={<Share/>}/>

            {/* <Route path={['/http:', '/https:']} component={props => {
              window.location.replace(props.location.pathname.substr(1)) // substr(1) removes the preceding '/'
              return null
            }}/> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
