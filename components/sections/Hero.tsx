"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const titles = [
    "20+ Years of Financial Leadership",
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
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <span className="text-primary font-bold tracking-widest text-sm uppercase px-4 py-1 border border-primary/30 rounded-full bg-primary/5">
                            Executive Leadership
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 tracking-tight"
                    >
                        {portfolioData.personalInfo.name.split(' ')[0]} <span className="text-primary italic"> {portfolioData.personalInfo.name.split(' ')[1]} </span>
                    </motion.h1>

                    <div className="h-12 mb-8 flex items-center justify-center lg:justify-start">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-2xl text-slate-400 font-medium"
                            >
                                {titles[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl text-slate-300 mb-10 text-lg leading-relaxed"
                    >
                        {portfolioData.personalInfo.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
                    >
                        <a
                            href="/resume.pdf"
                            download="Ubaraj_Giri_Resume.pdf"
                            className="px-8 py-4 bg-primary text-black font-black rounded-full hover:scale-105 transition-transform animate-pulse-glow shadow-[0_0_20px_rgba(255,102,0,0.4)]"
                        >
                            Download Resume
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
                            Get In Touch
                        </a>
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400">
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

                <div className="relative flex justify-center items-center">
                    {/* Main Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative w-64 h-80 md:w-80 md:h-[450px] z-10"
                    >
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl -rotate-6 scale-105 -z-10" />
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl rotate-3 scale-102 -z-10" />

                        <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(255,102,0,0.2)]">
                            <Image
                                src="/first.jpeg"
                                alt="Ubaraj Giri"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 lg:-right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl z-20"
                        >
                            <p className="text-xs font-bold text-primary uppercase tracking-tighter">Verified Official</p>
                            <p className="text-lg font-black text-white">20+ Years</p>
                        </motion.div>
                    </motion.div>

                    {/* Secondary Image - Floating Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute -left-4 lg:-left-20 top-1/4 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl z-0 -rotate-12"
                    >
                        <Image
                            src="/second.jpeg"
                            alt="Experience"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>

                    {/* Third Image - Floating Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute -right-4 lg:-right-12 bottom-0 w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl z-20 rotate-12"
                    >
                        <Image
                            src="/third.png"
                            alt="Professional"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
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
