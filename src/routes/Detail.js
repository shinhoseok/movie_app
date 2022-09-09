import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const param = location.state;
    console.log(param);
    if(param === null) {
        return <Navigate to="/" />;
    }
    return <span>{param.title}</span>;
}

export default Detail;