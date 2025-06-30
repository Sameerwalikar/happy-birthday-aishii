"use client"

import { useEffect, useState } from "react"
import { Heart, Star, Gift, Cake, Sparkles } from "lucide-react"

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState<
    Array<{ id: number; left: number; color: string; delay: number; duration: number }>
  >([])

  useEffect(() => {
    const confettiArray = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 100%, 75%)`,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    }))
    setConfetti(confettiArray)
  }, [])

  const images = [
    {
      src: "/images/img1.jpg",
      alt: "Sweet moments together 💕",
    },
    {
      src: "/images/img2.jpg",
      alt: "Outdoor adventures 🌿",
    },
    {
      src: "/images/img3.jpg",
      alt: "Black & white memories 🖤",
    },
    {
      src: "/images/img4.jpg",
      alt: "Traditional celebration 💙",
    },
    {
      src: "/images/img5.jpg",
      alt: "Adventure time 🎩",
    },
    {
      src: "/images/img6.jpg",
      alt: "Cozy moments 🤗",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
      {/* Animated confetti */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute w-3 h-3 rounded-full animate-bounce"
            style={{
              left: `${piece.left}%`,
              top: "-10px",
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              animationIterationCount: "infinite",
              transform: "translateY(100vh) rotate(360deg)",
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {i % 5 === 0 && <Heart className="text-pink-300 w-4 h-4" />}
            {i % 5 === 1 && <Star className="text-yellow-300 w-4 h-4" />}
            {i % 5 === 2 && <Gift className="text-purple-300 w-4 h-4" />}
            {i % 5 === 3 && <Cake className="text-orange-300 w-4 h-4" />}
            {i % 5 === 4 && <Sparkles className="text-blue-300 w-4 h-4" />}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl md:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-pulse drop-shadow-lg"
            style={{ fontFamily: "cursive, fantasy, serif" }}
          >
            Happy Birthday Aishwaryaaaaaa 🎉🎂💖
          </h1>

          <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-white/40">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {
                "Wishing you a day full of sunshine ☀️, love 💞, cake 🍰, and laughter 😂! You are one in a million and I'm so lucky to have you in my life 💕. May all your dreams come true today and always 🌈✨. Keep smiling, shining, and being the amazing person you are 🧁🌸🎈"
              }
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center text-purple-600 mb-8" style={{ fontFamily: "cursive, fantasy, serif" }}>
            Beautiful Memories 📸💕
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay without captions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 right-2 text-yellow-400 animate-spin-slow">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-pink-400 animate-bounce">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Birthday Message Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-white/30">
            <div className="flex justify-center space-x-4 mb-6">
              {["🎂", "🎉", "🎈", "🎁", "🌟"].map((emoji, i) => (
                <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                  {emoji}
                </span>
              ))}
            </div>

            <h3 className="text-2xl text-purple-600 mb-4" style={{ fontFamily: "cursive, fantasy, serif" }}>
              Make a wish! ✨
            </h3>

            <p className="text-gray-600 text-lg">
              {"Hope your special day is filled with all the joy, love, and cake your heart can hold! 🥰💕"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
