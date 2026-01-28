"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, ArrowDown } from 'lucide-react';

const titles = [
    "27+ Years of Financial Leadership",
    "Trustworthy Accounting Professional",
    "Strategic HR Manager",
    "Organizational Governance Specialist"
];

export const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="text-primary font-bold tracking-widest text-sm uppercase px-4 py-1 border border-primary/30 rounded-full bg-primary/5">
                        Senior Executive Portfolio
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground mb-6 tracking-tight"
                >
                    {portfolioData.personalInfo.name.split(' ')[0]} <span className="text-primary italic"> {portfolioData.personalInfo.name.split(' ')[1]} </span>
                </motion.h1>

                <div className="h-12 mb-8 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl text-muted-foreground font-medium"
                        >
                            {titles[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl text-muted-foreground/80 mb-10 text-lg leading-relaxed"
                >
                    {portfolioData.personalInfo.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="/resume.pdf"
                        download="Ubaraj_Giri_Resume.pdf"
                        className="px-8 py-4 bg-primary text-black font-black rounded-full hover:scale-105 transition-transform animate-pulse-glow shadow-[0_0_20px_rgba(255,102,0,0.4)]"
                    >
                        Download Resume
                    </a>
                    <a href="#contact" className="px-8 py-4 bg-card border border-border text-foreground font-bold rounded-full hover:bg-card transition-colors">
                        Get In Touch
                    </a>
                </motion.div>

                <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Phone size={18} className="text-primary" />
                        <span className="text-sm">{portfolioData.personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={18} className="text-primary" />
                        <span className="text-sm">{portfolioData.personalInfo.email}</span>
                    </div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};
