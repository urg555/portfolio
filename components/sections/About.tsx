"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto group">
                            <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                                <Image
                                    src="/headshot.png"
                                    alt="Ubaraj Giri"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-primary text-black p-6 rounded-xl hidden md:block">
                                <p className="text-4xl font-black">27+</p>
                                <p className="text-xs font-bold uppercase tracking-tighter leading-none">Years of<br />Expertise</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-8 leading-tight">
                            A Legacy of <span className="text-primary">Financial Excellence</span> & Leadership.
                        </h3>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            {portfolioData.personalInfo.summary}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {portfolioData.strengths.map((strength, i) => {
                                const Icon = (LucideIcons as any)[strength.icon];
                                return (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                            {Icon && <Icon size={20} />}
                                        </div>
                                        <span className="text-sm font-semibold text-foreground leading-tight">
                                            {strength.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
