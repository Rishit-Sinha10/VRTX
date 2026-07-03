"use client";
import { useAuth } from "@/context/AuthContext";
export default function Login() {
  const { user, loginWithGoogle, loginWithGithub, logout } = useAuth();
  if (user) {
    return (
      <div>
        <p>Signed in as {user.displayName} ({user.email})</p>
        <button onClick={logout}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
      <button onClick={loginWithGithub}>Sign in with GitHub</button>
    </div>
  );
}