"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
    return (
        <section className="py-24 bg-background/80">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Academic Foundation</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground">Education</h3>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {portfolioData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-card border border-border flex flex-col md:flex-row md:items-center gap-6 group hover:bg-primary/5 transition-all hover:translate-x-2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                                <GraduationCap size={32} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-heading font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                                    {edu.degree}
                                </h4>
                                <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">
                                    {edu.institution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
