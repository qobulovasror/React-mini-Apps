function Numbers({issue, setIssue}) {
  const numHandler = (e)=>{
    if(issue.toString().length<21)
      setIssue(issue + e.target.innerText)
  }
  const minusHandler = ()=>{
      setIssue(-1* Number(issue))
  }
  const floatNum = ()=>{
    if(issue.toString().length>0)
      setIssue(issue + '.');
    else
      setIssue('0.')
  }
  return (
    <>
      <div className="nums column">
        <div className="row">
          <button onClick={numHandler}>7</button>
          <button onClick={numHandler}>8</button>
          <button onClick={numHandler}>9</button>
        </div>
        <div className="row">
          <button onClick={numHandler}>4</button>
          <button onClick={numHandler}>5</button>
          <button onClick={numHandler}>6</button>
        </div>
        <div className="row">
          <button onClick={numHandler}>1</button>
          <button onClick={numHandler}>2</button>
          <button onClick={numHandler}>3</button>
        </div>
        <div className="row">
          <button onClick={minusHandler}>+/-</button>
          <button onClick={numHandler}>0</button>
          <button onClick={floatNum}>.</button>
        </div>
      </div>
    </>
  );
}

export default Numbers;
