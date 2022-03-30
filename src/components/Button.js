const Button = ({color, text, handleClick}) => {
    // const handleClick = () => {
    //     console.log("Click with handle");
    // }
  return (
    <div>
        <button 
            className= "btn"
            style={{backgroundColor: "purple"}} 
            onClick={handleClick}
        >
            {text}
        </button>
    </div>
  )
}

export default Button;