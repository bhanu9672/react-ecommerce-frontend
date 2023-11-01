import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Card } from 'flowbite-react';

const Singin = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const local_url = "http://localhost:5000";
    const live_url = "https://node-ecommerce-backend.vercel.app";

    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if (auth) {
    //         navigate("/login");
    //     }
    // })

    const handleLogin = async () => {
        if (!email || !password) {
            setError(true);
            return false;
        }
        let result = await fetch(`${live_url}/login`, {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate("/");
        } else {
            alert("Please Enter Correct Log In Details");
        }
    }

    return (
        <>
            <div className="w-2/4 m-auto">
                <Card>
                    <h1 className="text-center text-2xl font-bold font-mono">
                        Login
                    </h1>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                placeholder="name@mail.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {error && !email && <span className="text-rose-500"> Enter Valid Email </span>}
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && !password && <span className="text-rose-500"> Enter Valid Password </span>}
                        <Button onClick={handleLogin}>
                            Login
                        </Button>
                        <p className='text-center'>
                            Don't have an account?
                            <Link to="/signup" className="text-center text-blue-600/100 px-1">
                                Register now.
                            </Link>
                        </p>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Singin;