import classes from "./Footer.module.css";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contacts/Contact";


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