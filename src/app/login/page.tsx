'use client';

import { useState, useEffect } from 'react';
import styles from './login.module.scss';

export default function AuthPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (errorMessage === 'Success') {
            window.location.href = '/';
        }
    }, [errorMessage]);

    const handleRegister = async () => {
        try {
            const response = await fetch('http://127.0.0.1:2602/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            console.log(data);
            if (response.status !== 201) {
                throw new Error(data.message);
            }
            setErrorMessage('Success');
        } catch (error: any) {
            console.error('Registration failed:', error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.Text}>Log in</h1>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {!errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <input
                className={styles.interBox}
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                className={styles.interBox}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className={styles.Button} onClick={handleRegister}>Log in</button>
        </main>
    );
}
