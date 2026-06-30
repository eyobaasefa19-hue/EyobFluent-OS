"use client";

import { Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 bg-slate-900/40 p-8 rounded-3xl border border-slate-900 backdrop-blur-sm">
        
        {/* Back to Home */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-400">
            Sign in to continue your AI language mastery.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 block pl-1">Email Address</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full h-12 bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 block pl-1">Password</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl inline-flex items-center justify-center gap-2 transition-colors mt-2"
          >
            Sign In <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-sm text-slate-500 pt-2">
          Don&apos;t have an account?{" "}
          <Link href="/dashboard" className="text-blue-400 hover:underline">
            Explore Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
