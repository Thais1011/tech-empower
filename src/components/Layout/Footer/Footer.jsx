import classes from "./Footer.module.css";
import whatsapp from "../../../assets/whatsapp.png";


//ainda irei colocar as tres colunas com os itens e o acesso às redes sociais e estilizar melhor

export function Footer () {
    return (
        <>
        <div className={classes.footer}>
            <h1>How to contact us</h1>
            <p>Whatsapp</p>
            <p>Instagram</p>
            <p>Email</p>

        </div>
        
        
        
        </>
        
    )
}