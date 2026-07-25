"use client";

import { useState, FormEvent, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import AmbientCanvas from "@/components/AmbientCanvas";

function AuthFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup extra state
  const [fullName, setFullName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [branch, setBranch] = useState("CSE Core");

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    alert(`🎉 Welcome back! Logged in as ${email}.`);
    router.push("/");
  };

  const handleSignupSubmit = (e: FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    alert(`🚀 SDC Member Account created for ${fullName} (${regNumber})!`);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center justify-center p-6 py-20 relative overflow-hidden font-sans">
      <AmbientCanvas />
      
      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-2 bg-[#161b22] px-4 py-2.5 rounded-lg border border-[#30363d] shadow-lg transition-colors"
      >
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>

      <div className="w-full max-w-[380px] sm:max-w-[420px] z-10">
        
        {/* Top Centered SDC Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <Image
              src="/sdc-logo.png"
              alt="SDC Logo"
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Heading with Generous Bottom Margin */}
        <h1 className="text-2xl sm:text-3xl font-light text-center text-white mb-8 tracking-tight leading-relaxed">
          {mode === "login" ? "Sign in to SDC Hub" : "Create your SDC Account"}
        </h1>

        {/* Main GitHub-Style Form Card with Spacious Internal Padding */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-7 sm:p-9 shadow-2xl mb-6">
          {mode === "login" ? (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-3 leading-relaxed">
                  Username or email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="alex.chen2022@vitbhopal.ac.in"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-[#c9d1d9]">
                    Password
                  </label>
                  <a
                    href="#"
                    onClick={() => alert("Password reset instructions sent to your college email.")}
                    className="text-xs text-[#58a6ff] hover:underline font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-md mt-6"
              >
                Sign in
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-3 leading-relaxed">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Aarav Sharma"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-3 leading-relaxed">
                  VIT Registration Number
                </label>
                <input
                  type="text"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  required
                  placeholder="23BCE10245"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-3 leading-relaxed">
                  Branch / Specialization
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  <option value="CSE Core">CSE Core</option>
                  <option value="CSE AI/ML">CSE (AI & ML)</option>
                  <option value="CSE Cyber Security">CSE (Cyber Security)</option>
                  <option value="CSE Cloud & DevOps">CSE (Cloud & DevOps)</option>
                  <option value="ECE & Embedded">ECE & Embedded Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-3 leading-relaxed">
                  VIT College Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="aarav.sharma2023@vitbhopal.ac.in"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-3 leading-relaxed">
                  Create Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Minimum 8 characters"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-md mt-6"
              >
                Create Account
              </button>
            </form>
          )}
        </div>

        {/* Bottom Toggle Callout Box with Generous Padding */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center text-sm leading-relaxed">
          {mode === "login" ? (
            <span>
              New to SDC?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-[#58a6ff] hover:underline focus:outline-none font-medium ml-1"
              >
                Create an account
              </button>
              .
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#58a6ff] hover:underline focus:outline-none font-medium ml-1"
              >
                Sign in
              </button>
              .
            </span>
          )}
        </div>

        {/* Footer Legal Links with Spaced Margin */}
        <div className="mt-10 text-center text-xs text-[#8b949e] space-x-5 leading-relaxed">
          <a href="#" className="hover:text-[#58a6ff] hover:underline">Terms</a>
          <a href="#" className="hover:text-[#58a6ff] hover:underline">Privacy</a>
          <a href="#" className="hover:text-[#58a6ff] hover:underline">Security</a>
          <a href="#" className="hover:text-[#58a6ff] hover:underline">Contact SDC</a>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center">Loading SDC Gateway...</div>}>
      <AuthFormContent />
    </Suspense>
  );
}
