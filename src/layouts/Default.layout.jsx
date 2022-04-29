import React from "react";

//Componenets
import Navbar from "../components/Navbar/navbar.component";

const DefaultLayout = (props) => {
    return (
        <>
         <Navbar />
         {props.children}
        </>
    );
};

export default DefaultLayout;
