import { useNavigate } from "react-router-dom";
import React from "react";

export default function Products({ item }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/products/${item?.id}`);
    }
    return (
        <div>
            <h2>{item?.title}</h2>
            <h3>{item?.price}</h3>
            <h3>{item?.category}</h3>
            <h4>{item?.description}</h4>
            <img
              className="cover"
              src={item?.image}
              alt={item?.title}
              width="200"
            ></img>
            <button type="button" className="details-button" onClick={handleClick}>
                Details
            </button>
        </div>
    );
}