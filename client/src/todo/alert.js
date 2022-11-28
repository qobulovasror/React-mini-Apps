import './style.css'

function Alert({text, alert, setAlert}) {
    const handler = (param)=>{
        setAlert({active: false, result: param});
    }
    return ( 
        <>
            {
                (alert.active)? 
                    <div className='alert'>
                        <div className="column">
                            <h3>{text}</h3>
                            <div className="row around">
                                <button 
                                    className="btn" 
                                    onClick={()=>handler("ok")}
                                    >Ok</button>
                                <button 
                                    className="btn"
                                    onClick={()=>handler("cancel")}
                                    >Cancel</button>
                            </div>
                        </div>
                    </div>
                :
                <></>
            }
        </>
     );
}

export default Alert;