"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, Gift } from "lucide-react"

export default function WelcomePage() {
  const [name, setName] = useState("")
  const router = useRouter()

  const checkName = () => {
    if (name.trim().toLowerCase() === "aishwarya") {
      router.push("/birthday")
    } else {
      alert("Oops! You're not the birthday girl 🙈💕")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkName()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${10 + Math.random() * 6}px`,
            }}
          />
        ))}
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 text-center max-w-md w-full mx-4 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Gift className="text-pink-500 w-8 h-8 animate-bounce" />
        </div>

        <h1 className="text-4xl text-white mb-6 drop-shadow-lg" style={{ fontFamily: "cursive, fantasy, serif" }}>
          Hey there! 💖✨
        </h1>

        <p className="text-white/90 mb-6 text-lg">{"Someone special is waiting for you... 🎀"}</p>

        <div className="space-y-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your name cutie... 🌸"
            className="bg-white/30 border-white/50 text-white placeholder:text-white/70 rounded-full px-6 py-3 text-center text-lg backdrop-blur-sm focus:bg-white/40 transition-all duration-300"
          />

          <Button
            onClick={checkName}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full"
          >
            Enter the Magic 🎀✨
          </Button>
        </div>

        <div className="mt-6 flex justify-center space-x-2">
          {["🌸", "💕", "🦋", "🌈", "⭐"].map((emoji, i) => (
            <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
