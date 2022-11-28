import { useEffect, useState } from 'react';
import Alert from '../alert';

function Controls({setInputs, inputs, list, setList}) {
  const [alert, setAlert] = useState({active: false, result: false});
    const addEneble = ()=>{
        (!inputs.add)?  setInputs({ ...inputs, add: true})
        : setInputs({ ...inputs, add: false})
    }
    const searchEneble = ()=>{
        (!inputs.search)?  setInputs({ ...inputs, search: true}) 
        : setInputs({ ...inputs, search: false})
    }
    const clearList = ()=>{
      if(list.length>0)
        setAlert({active: true, result: ""})
    }

    useEffect(()=>{
      if(alert.result === "ok") 
        setList([]);
      else if(alert.result === "cancel")
        setAlert({active: false, result: false});
    }, [alert, setList]);

  return (
    <>
      <Alert alert={alert} setAlert={setAlert} text={"Is list clearing ?"}/>
      <div className="controls row between">
        <ul className="row">
          <li>
            <button className="btn" onClick={addEneble}><i class='bx bx-plus'></i></button>
          </li>
          <li>
            <button className="btn" onClick={searchEneble}><i class='bx bx-search'></i></button>
          </li>
          <li>
            <button className="btn" onClick={clearList}><i class='bx bxs-eraser'></i></button>
          </li>
          <li>|</li>
          <li className="counts">
            <span>items cout: {list.length}</span>
          </li>
        </ul>
        <ul className="row">
          <li className="active">
            <button className="btn">All</button>
          </li>
          <li className="">
            <button className="btn">Active</button>
          </li>
          <li className="">
            <button className="btn">Completed</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Controls;
