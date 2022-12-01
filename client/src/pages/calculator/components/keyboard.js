import MathFun from "./mathFun";
import Numbers from "./numbers";
import OtherFun from "./otherFun";

function Keyboard() {
  return (
    <>
      <div className="keyboard row">
        <div className="column">
            <OtherFun/>
            <Numbers />
        </div>
        <MathFun />
      </div>
    </>
  );
}

export default Keyboard;
