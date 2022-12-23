function OtherFun({issue, setIssue}) {
  const clearHandler = ()=>{
      if(issue!=="")
        setIssue("");
  }
  const root = ()=>{
    // eslint-disable-next-line no-eval
    setIssue(Math.sqrt(Number(issue)));
  }
  const eraser = ()=>{
    if(issue.toString().length>0)
      setIssue(issue.toString().slice(0,issue.toString().length-1));
  }
  return (
    <>
      <div className="row">
        <button onClick={clearHandler}>C</button>
        <button onClick={root}>√ </button>
        <button onClick={eraser}><i className='bx bx-left-arrow-alt'></i></button>
      </div>
    </>
  );
}

export default OtherFun;
