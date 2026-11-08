"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { 
    name: "Layanan", 
    href: "/#layanan",
    submenu: [
      { name: "Konsultan Hukum", href: "/#hukum" },
      { name: "Sertifikasi Halal", href: "/#halal" },
      { name: "Perizinan & Pertanahan", href: "/#perizinan" },
      { name: "IT Solutions", href: "/#it" },
      { name: "Pendidikan", href: "/#pendidikan" },
    ]
  },
  { name: "Ekosistem", href: "/#ekosistem" },
  { name: "Tim", href: "/#tim" },
  { name: "Karir", href: "/karir" },
  { name: "Formulir Halal", href: "/formulir-halal" },
  { name: "Kontak", href: "/#kontak" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-primary/20 shadow-sm transition-transform group-hover:scale-105">
              <Image 
                src="/images/image1.png" 
                alt="MWS Group Logo" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-foreground" : "text-foreground"
              )}>MWS Group</span>
              <span className={cn(
                "text-xs leading-tight transition-colors",
                isScrolled ? "text-muted-foreground" : "text-muted-foreground"
              )}>PT Mahadewa Widya Sentosa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
                    isScrolled 
                      ? "text-foreground hover:bg-secondary" 
                      : "text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-card rounded-xl shadow-lg border border-border p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="rounded-full px-6">
              <Link href="/#kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <SheetDescription className="sr-only">Menu navigasi utama website MWS Group</SheetDescription>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 py-4 border-b border-border">
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-primary/20 shadow-sm shrink-0">
                    <Image 
                      src="/images/image1.png" 
                      alt="MWS Group Logo" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight">MWS Group</span>
                    <span className="text-xs text-muted-foreground leading-tight">
                      PT Mahadewa Widya Sentosa
                    </span>
                  </div>
                </div>
                
                <nav className="flex-1 py-6">
                  <ul className="space-y-1">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
                        >
                          {link.name}
                        </Link>
                        {link.submenu && (
                          <ul className="ml-4 space-y-1 mt-1">
                            {link.submenu.map((sublink) => (
                              <li key={sublink.name}>
                                <Link
                                  href={sublink.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                                >
                                  {sublink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="py-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between px-4">
                    <span className="text-sm text-muted-foreground">Tema</span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full rounded-full">
                    <Link href="/#kontak" onClick={() => setIsOpen(false)}>
                      Hubungi Kami
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
