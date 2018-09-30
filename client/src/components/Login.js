import React from 'react';

export default function Login() {
    return (
        <section>
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </form>
            <button>Login</button>
        </section>
    );
}