import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../API";



export default function SingleProduct({ user, token }) {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    async function fetchProduct() {
        try {
            const res = await fetch(`${API_URL}/products/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await res.json();
            console.log(result);
            setDetails(result.product);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        details && (
            <div className="single=product">
                <img src={details?.image} alt={details?.title} width="400"></img>
                <h1>
                    <span className="product-title">{details?.title}</span>
                    <span className="price">{details?.price}</span>
                </h1>

                <p>{details?.description}</p>
                <button type="button" onClick={handleClick}>
                    Return Home
                </button>
            </div>
        )
    );
}