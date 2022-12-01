import MathFun from "./mathFun";
import Numbers from "./numbers";
import OtherFun from "./otherFun";

function Keyboard({issue, setIssue}) {
  return (
    <>
      <div className="keyboard row">
        <div className="column">
            <OtherFun
              issue={issue}
              setIssue={setIssue}
            />
            <Numbers 
              issue={issue}
              setIssue={setIssue}
            />
        </div>
        <MathFun 
          issue={issue}
          setIssue={setIssue}
        />
      </div>
    </>
  );
}

export default Keyboard;
