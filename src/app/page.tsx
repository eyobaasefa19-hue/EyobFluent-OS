import { ArrowRight, Zap, Target, Award, Shield } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="px-4 h-16 flex items-center border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
        <span className="text-xl font-black tracking-wider text-blue-500">EyobFluent OS</span>
        <div className="ml-auto">
          <Link 
            href="/login" 
            className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-10 px-4 bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 max-w-md mx-auto sm:max-w-xl md:max-w-4xl">
        {/* Hero Section */}
        <section className="py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs font-medium text-blue-400">Next-Gen AI Language Platform</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Speak English Fluently with AI
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            From absolute beginner (A1) to professional mastery (C2+). Optimized to work perfectly on any device.
          </p>
          <div className="pt-4">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center justify-center rounded-xl text-base font-semibold h-12 px-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors gap-2"
            >
              Start Learning Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Vocabulary Lab */}
            <div className="p-6 bg-slate-900/50 border border-slate-900 rounded-2xl space-y-3">
              <Target className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-bold text-slate-100">Vocabulary Lab</h3>
              <p className="text-sm text-slate-400">Master words fast with scientific spaced repetition built into your workflow.</p>
            </div>

            {/* Daily Streak */}
            <div className="p-6 bg-slate-900/50 border border-slate-900 rounded-2xl space-y-3">
              <Award className="w-8 h-8 text-emerald-500" />
              <h3 className="text-lg font-bold text-slate-100">Daily Streak Tracking</h3>
              <p className="text-sm text-slate-400">Keep your momentum alive. Track your daily consistency with zero lag.</p>
            </div>

            {/* Secure Profiles */}
            <div className="p-6 bg-slate-900/50 border border-slate-900 rounded-2xl space-y-3">
              <Shield className="w-8 h-8 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-100">Secure Profiles</h3>
              <p className="text-sm text-slate-400">Your custom learning analytical records secured safely behind industry standards.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600">
        <p>© 2026 EyobFluent OS. Built for Production.</p>
      </footer>
    </div>
  );
}
