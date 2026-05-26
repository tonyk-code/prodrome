import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Connect Supabase auth.signInWithPassword() here
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard"); // Routs to application matrix on success
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-110 space-y-6">
        <div className="text-center space-y-2">
          <span
            className="text-2xl font-semibold tracking-tight cursor-pointer"
            onClick={() => navigate("/")}
          >
            prodrome<span className="text-[#0066cc]">.</span>
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] pt-4">
            Sign in to Prodrome
          </h1>
          <p className="text-sm text-[#86868b]">
            Enter your structural access profiles below.
          </p>
        </div>

        <Card className="bg-white p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full mt-2" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Social Auth Separator block */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e8e8ed]"></div>
            </div>
            <span className="relative bg-white px-3 text-xs text-[#86868b] uppercase tracking-wider">
              Alternative Entry
            </span>
          </div>

          <button
            onClick={() => navigate("/demo")}
            className="w-full py-2.5 bg-transparent border border-[#d2d2d7] hover:bg-[#f5f5f7] active:bg-[#e8e8ed] text-sm font-semibold rounded-full text-[#1d1d1f] transition-all duration-200"
          >
            Bypass using Sandbox Demo
          </button>
        </Card>

        <p className="text-center text-sm text-[#86868b]">
          New to the platform?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#0066cc] hover:underline cursor-pointer font-medium"
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};
