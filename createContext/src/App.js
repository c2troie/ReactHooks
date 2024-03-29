import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";



export default function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar/>
                    <BookList/>
                    <ThemeToggle/>
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}