import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        // Dummy validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        // Call parent handler or perform login logic here
        if (onLogin) {
            onLogin({ email, password });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="card p-4 shadow" style={{ maxWidth: 400, width: "100%" }}>
                <h2 className="mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Email:
                            <input
                                type="email"
                                className="form-control mt-1"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Password:
                            <input
                                type="password"
                                className="form-control mt-1"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    {error && <div className="alert alert-danger py-2 mb-3">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="d-flex justify-content-between mt-3">
                    <a href="#" className="small">Forgot password?</a>
                    <a href="#" className="small">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;