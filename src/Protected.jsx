import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


const Protected = function (props) {

    let Component = props.Component;


    const navigate = useNavigate();

    useEffect(function () {
        if (!localStorage.getItem('user')) {
            navigate('/Register')
        }
    }, [])


    return (

        <>
            <Component />
        </>
    )
}

export default Protected;