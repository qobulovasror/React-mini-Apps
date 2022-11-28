import { useState } from "react";
import Controls from "./components/controls";
import Search from "./components/search";
import Add from "./components/add";
import List from "./components/list";
import EditItem from "./components/editItem";

import './style.css';

function Todo() {
    const [list, setList] = useState([{id: 5, text: '01', active: true},{id: 1, text: '0', active: true}]);
    // const [list, setList] = useState([{id: 2, text: "321"}]);
    // const [editHeandler, setEditHeandler] = useState({id: 0, editText: ""})
    const [inputs, setInputs] = useState({ search: false, add: false});

    const addHeandler = (text)=>{
        let i=0;
        if(list.length > 0)
            i=list[list.length-1].id + 1; 
        setList([...list, {id: i, text: text, active: true}]);
    }
    return ( 
        <>
           <div className='container'>
                <div className="box">
                    <h2>TODO list</h2>
                    <Controls 
                        setInputs={setInputs} 
                        inputs={inputs} 
                        list={list} 
                        setList={setList} 
                    />
                    <Search 
                        inputs={inputs}
                    />
                    <Add 
                        addHeandler={addHeandler} 
                        inputs={inputs} 
                        list={list}
                    />
                    <EditItem/>
                    <List 
                        list={list}
                        setList={setList}
                    />
                </div>
            </div> 
        </> 
    );
}

export default Todo;