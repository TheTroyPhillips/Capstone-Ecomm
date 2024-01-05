import { useState, useEffect } from "react"
import Register from "./components/Register"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { getUser } from "./API";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import { API_URL } from "./API";

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
          path="/" element={<Home products={products} fetchProducts={fetchProducts} />} />
        <Route
          path="/products/:id" element={<SingleProduct user={user} token={token} />} />
        <Route
          path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register" element={<Register token={token} setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
