import classes from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={classes.container}>
            <img className={classes.whatsapp} src="src/assets/whatsapp.png" alt="whatsapp" />
            <p>19 9999-9999</p>
            <img className={classes.instagram} src="src/assets/instagram.png" alt="instagram" />
            <p>@beesBrasil</p>
            </div>
    )
}

export default Contact;