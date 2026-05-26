import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Connect Supabase auth.signUp() here
    setTimeout(() => {
      setIsLoading(false);
      navigate("/onboarding"); // Directs to data sync configurations next
    }, 1000);
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
            Get started with Prodrome
          </h1>
          <p className="text-sm text-[#86868b]">
            Begin catching burnout indicators early.
          </p>
        </div>

        <Card className="bg-white p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <Input
              id="name"
              label="Full Name"
              type="text"
              placeholder="Alex Mercer"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="text-[12px] text-[#86868b] leading-normal px-1">
              By registering, you consent to computing local behavioral risk
              factors against data source streams.
            </div>

            <Button type="submit" className="w-full mt-2" disabled={isLoading}>
              {isLoading ? "Creating profile..." : "Create Account"}
            </Button>
          </form>
        </Card>

        <p className="text-center text-sm text-[#86868b]">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#0066cc] hover:underline cursor-pointer font-medium"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};
