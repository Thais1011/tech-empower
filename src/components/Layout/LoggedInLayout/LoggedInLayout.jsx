import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import Header from "../Header/Header"
import classes from "./LoggedInLayout.module.css"

export function LoggedInLayout() {
    return(
        <>
        <Header/>
        <div className={classes.content}><Outlet/></div>
        <Footer/>
        </>
    )
}