import React, { Component } from "react";
import {ThemeContext} from "../context/ThemeContext";
import {AuthContext} from "../context/AuthContext";

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);

        return(
            <AuthContext.Consumer>{(authContext)=>{
                return(
                    <ThemeContext.Consumer>{(themeContext)=> {
                        const {isAuthenticated, toggleAuth} = authContext;
                        const { isLightTheme, light, dark} = themeContext;
                        const theme= isLightTheme ? light : dark;
                        return(

                            <nav style={{background: theme.ui, color: theme.syntax}}>
                                <h1>Context App</h1>
                                <div onClick={toggleAuth}>
                                    {isAuthenticated ? 'Logged in' : 'Log Out'}
                                </div>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        )
                    }}
                    </ThemeContext.Consumer>
                )
            }}
            </AuthContext.Consumer>
        )
    }
}
export default Navbar;