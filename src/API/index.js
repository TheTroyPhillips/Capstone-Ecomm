export const API_URL = "https://fakestoreapi.com"

export const registerUser = async (userObj) => {
 try {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname: userObj.firstname,
            lastname: userObj.lastname,
            email: userObj.email,
            address: userObj.address,
            password: userObj.password,
        }),
    });
    const json = await res.json();
    console.log("registerUser", json);
    return json.token;
 } catch (err) {
    console.error(err);
 }
};

export const loginUser = async (userObj) => {
    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "applicaton/json",
            },
            body: JSON.stringify({
                username: userObj.username,
                password: userObj.password,
            }),
        });
        const json = await res.json();
        console.log("loginUser", json);
        return json.token;
    } catch (err) {
        console.error(err);
    }
};

// export const getUser = async (token, id) => {
//     try {
//         const res = await fetch(`${API_URL}/users/${id}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         const json = await res.json();
//         return json;
//     } catch (error) {
//         console.log(error);
//     }
// };
