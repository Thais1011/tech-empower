import classes from "./Footer.module.css";
import whatsapp from "../../../assets/whatsapp.png";


//ainda irei colocar as tres colunas com os itens e o acesso às redes sociais e estilizar melhor

export function Footer () {
    return (
        <div className={classes.footer}>
            <img className={classes.logo} src="src/assets/bees.png" alt="logo" />
            <ul className={classes.informations}>How to contact us
            <li>Whatsapp</li>
            <li>Instagram</li>
            <li>Email</li>
            </ul>
        
            <p className={classes.slogan}>To a future with more Cheers</p>

            <p className={classes.aboutUs}>About Us</p>

        </div>
        
        
        
        
        
    )
}