import classes from "./Footer.module.css";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contacts/Contact";



//Botão About Us mexendo de lugar
//Gostaria de retirar as imagens de whatsapp e instagram depois de avaliado o projeto


export function Footer () {
    return (
        <div className={classes.footer}>
            <img className={classes.logo} src="src/assets/bees.png" alt="logo" />

            <Contact/>

            <img className={classes.slogan} src="src/assets/slogan.png" alt="slogan" />

            <AboutUs/>

        </div>
        
        
        
        
        
    )
}