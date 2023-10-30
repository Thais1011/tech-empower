import { useState } from "react";
import classes from "./MenuButton.module.css";

//Daria facilmente para colocar outro botão com a função de menu sem nenhum problema, mas nao sei o que colocar 
//no menu, então coloquei apenas dois botões para mostrar

const MenuButton =() => { 
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseEnter = () => {
        setBtnIsHighlighted(true);
      };

      const handleMouseLeave = () => {
        btnIsHighlighted(true);
      };

    const handleButtonClick = () => {
      setShowMenu( (prevState) => !prevState);
    }

    return(
      <div className={classes.container}>
        <button 
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick}
        >
        
        <span className={classes.icon}>
        </span>
        <span>Menu</span>
        </button>
        {showMenu && (
          <div>
              <button className={classes.buttonMore}>Home</button>
              <button className={classes.buttonMore}>Contact Us</button>
            
          </div>
)}
      </div>
      )   
}
export default MenuButton;