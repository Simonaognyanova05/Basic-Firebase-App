import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async (e) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
    }

    const logout = async () => {
        await signOut(auth);
    }
    return (
        <div>
            <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password..." type='password' onChange={(e) => setPassword(e.target.value)} />

            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}