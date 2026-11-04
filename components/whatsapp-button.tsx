"use client"

import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const waNumber = "6285865081818"
  const text = "Halo, saya ingin berkonsultasi mengenai layanan MWS Group"
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end gap-3"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block bg-background text-foreground px-4 py-2.5 rounded-2xl shadow-xl border border-border text-sm font-medium whitespace-nowrap"
          >
            Konsultasi dengan kami
          </motion.div>
        )}
      </AnimatePresence>

      <Link 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="outline-none"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0px 0px 0px 0px rgba(37, 211, 102, 0.4)",
              "0px 0px 0px 20px rgba(37, 211, 102, 0)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
            }
          }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/20 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
          <MessageCircle className="w-7 h-7 flex-shrink-0" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
