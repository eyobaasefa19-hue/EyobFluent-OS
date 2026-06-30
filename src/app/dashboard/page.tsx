"use client";

import { MessageSquare, BookOpen, BarChart3, LogOut, User } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-950 text-white font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-slate-900 bg-slate-900/20 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-900">
          <span className="text-lg font-black tracking-wider text-blue-500">EyobFluent OS</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400 font-medium cursor-pointer">
            <MessageSquare className="w-5 h-5" />
            <span>AI Conversationalist</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-900 rounded-xl hover:text-slate-100 transition-colors cursor-pointer">
            <BookOpen className="w-5 h-5" />
            <span>Vocabulary Lab</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-900 rounded-xl hover:text-slate-100 transition-colors cursor-pointer">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics & Streaks</span>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-900">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 transition-colors rounded-xl w-full">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-900 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold text-slate-200">AI Language Lab</h2>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-4 h-4" />
          </div>
        </header>

        {/* Dynamic Content Body */}
        <main className="flex-1 p-6 overflow-y-auto max-w-4xl w-full mx-auto space-y-6">
          <div className="p-8 bg-gradient-to-br from-slate-900/60 to-slate-900/20 border border-slate-900 rounded-3xl space-y-4">
            <h1 className="text-2xl font-bold text-white">Ready to perfect your fluency?</h1>
            <p className="text-slate-400 text-sm max-w-xl">
              Welcome to your personal command center. The AI Engine is fully operational. Select a module or launch a voice session to begin.
            </p>
            <button className="h-11 px-5 bg-blue-600 hover:bg-blue-700 font-semibold text-sm rounded-xl transition-colors">
              Initialize AI Session
            </button>
          </div>
        </main>

      </div>
    </div>
  );
}
