function Search({inputs}) {
  const searchChangeHandler = ()=>{
    
  }
  return (
    <>
        {
            (inputs.search)?
                <div className="search">
                    <input type="search" placeholder="Search item" onChange={searchChangeHandler} />
                </div>
            :
            <></>
        }
    </>
  );
}

export default Search;
