import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../API";

export default function Register({ setToken }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userObj = {
            firstName,
            lastName,
            email,
            address,
            password,
        };
        const nextToken = await registerUser(userObj);
        setToken(nextToken);
        navigate("/account");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <label>
                Address:
                <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button>Register</button>
        </form>
    );
}