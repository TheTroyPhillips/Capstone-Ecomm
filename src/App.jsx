import { useState, useEffect } from "react"
import Register from "./components/Register"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { getUser } from "./API";
import NavBar from "./components/NavBar";

const API_URL = "https://fakestoreapi.com/";

function App() {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken !== undefined) setToken(localToken);
  }, []);

  useEffect(() => {
    if (token !== null && token !== undefined) {
      console.log(token);
        }
        async function fetchUser(token) {
          try {
            const nextUser = await getUser(token);
            setUser(nextUser);
          } catch (err) {
            console.log(err);
          }
        }
        fetchUser(token);
  }, [token]);

  async function fetchProducts() {
    try {
      const res = await fetch(`${API_URL}/products`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      console.log(result);
      setProducts(result.products);
    } catch (error) {
      console.error(error);
    }
  }
  
useEffect(() => {
  fetchProducts();
}, []);

  return (
    <BrowserRouter>
      <NavBar token={token} setToken={setToken} setUser={setUser} />
      <Routes>
        <Route
          path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register" element={<Register token={token} setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
