import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();

    if (isLogin) {

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Login successful 🌱");
        navigate("/");   // redirect to home
      }

    } else {

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:5174"
        }
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Check your email to confirm signup 🌿");
      }

    }
  }

  async function resetPassword() {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5174/auth"
    });

    if (error) alert(error.message);
    else alert("Password reset email sent 🌱");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          GreenTray 🌱
        </h1>

        <form onSubmit={handleAuth} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-green-600 text-white py-3 rounded-lg">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        <div className="flex justify-between mt-4 text-sm text-green-700">

          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create account" : "Already have account?"}
          </button>

          <button onClick={resetPassword}>
            Forgot password?
          </button>

        </div>

      </div>

    </div>
  );
}