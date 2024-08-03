import { useState } from "react";

const ToggleChallenge = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [showAlert, setShowAlert] = useState(false)

  const handleClick = () =>{
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  const toggleAlert = function(){
    if(showAlert){
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };
  return (
    <div>
      {/* <h2>Toggle Challenge</h2>
      <button onClick={() => handleClick()} className='btn'>
        {isClicked ? 'Clicked' : 'not Clicked'}
      </button> */}

      <button onClick={toggleAlert} className='btn'>
        toggle
      </button>
      { showAlert && <Alert />}
    </div>
  )
};

const Alert = () => {
  return <div  className='alert alert-danger'>Hello World</div>
}

export default ToggleChallenge;
