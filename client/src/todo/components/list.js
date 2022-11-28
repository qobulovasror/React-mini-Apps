function List({list, setList}) {
  const itemCheked = (e)=>{
    let newList = list;
    for(let i of list){
      if(i===e.target){
        let a = {}
      }else
        newList.push(i)
    } 
    // alert(e.target.id)
    // list.forEach(i => {
    //   if(i.id===e.target.id){
    //     // let newObj =
    //     alert(i.id) 
    //     setList([...list, {id: i.id, text: "i.text", active: false}]);
    //     return
    //   }
    // });
  }
  return (
    <>
      <div className="list">
        <ul className="column">
            {
              (list.length!==0)?
                list.sort((a, b)=>a.id>b.id? 1: -1)
                .map((item)=>(
                    <li className="row" key={item.id}>
                        <div className="item row between">
                          <div>
                              <input 
                                type="checkbox" 
                                id={item.id} 
                                onClick={itemCheked}
                              />
                              <span>{
                                  (item.active)? (item.text) : <b>{item.text}</b> 
                              }
                              </span>
                          </div>
                          <div>
                              <button className="btn">edit</button>
                              <button className="btn">delete</button>
                          </div>
                        </div>
                    </li>
                ))
                :
                (<h3>List empty</h3>)
            }
        </ul>
      </div>
    </>
  );
}

export default List;
