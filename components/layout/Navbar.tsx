"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme/ThemeToggle';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-md border-primary/20 py-3'
                    : 'bg-transparent border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="px-5 py-2 bg-primary text-black font-bold rounded-full text-sm hover:scale-105 transition-transform active:scale-95"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <div className="flex flex-col items-center gap-6">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-8 py-3 bg-primary text-black font-black rounded-full text-xl"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
};
