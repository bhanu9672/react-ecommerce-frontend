import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Card } from 'flowbite-react';

const SignUpCom = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const local_url = "http://localhost:5000";
    const live_url = "https://node-ecommerce-backend.vercel.app";

    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if (auth) {
    //         navigate("/login");
    //     }
    // }, []);

    const collectData = async () => {
        console.log("Btn Click Now.");
        console.warn(name, email, password);
        let result = await fetch(`${live_url}/register`, {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!name || !email || !password) {
            setError(true);
            return false;
        }
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
    }

    return (
        <>
            <div className="w-2/4 m-auto">
                <Card>
                    <h1 className="text-center text-2xl font-bold font-mono">
                        Create a new account
                    </h1>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your Name"
                                />
                            </div>
                            <TextInput
                                placeholder="Enter Name"
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        {error && !name && <span className="text-rose-500"> Enter Valid Email </span>}
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
                        {error && !email && <span className="invalid-inpu text-rose-500"> Enter Valid Email </span>}
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
                        <Button onClick={collectData}>
                            Register new account
                        </Button>
                        <Link to="/login" className="text-center text-blue-600/100">
                            Already have an account? Login now.
                        </Link>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default SignUpCom;