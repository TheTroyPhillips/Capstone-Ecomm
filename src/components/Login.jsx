import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../API";

export default function Login({ setToken, token }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userObj = {
            username,
            password,
        };
        const nextToken = await loginUser(userObj);
        console.log(nextToken);
        setToken(nextToken);
        localStorage.setItem("token", nextToken);
        navigate("/account");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {" "}
                Username:{" "}
                <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                {" "}
                Password:{" "}
                <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button>Login</button>
        </form>
    );
}