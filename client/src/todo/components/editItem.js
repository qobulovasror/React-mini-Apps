import { useState } from 'react';

function EditItem(list, inputs) {
    const [addItem, setAddItem] = useState("")
    const keyHeandler = (e)=>{
        if(e.key==='Enter'){
            // addHeandler(addItem);
            setAddItem("");
        }
    }
    return ( 
        <>
           {
            (inputs.add)? 
                <div className="add">
                    <input 
                        type="text" 
                        placeholder="Add item" 
                        onKeyUp={keyHeandler}
                        value={addItem}
                        onChange={(e)=>setAddItem(e.target.value)}
                    />
                </div>
                :
                <></>
        } 
        </>
     );
}

export default EditItem;