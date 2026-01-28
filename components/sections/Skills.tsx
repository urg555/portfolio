"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const SkillHex = ({ name, index }: { name: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="relative flex flex-col items-center justify-center p-6 group cursor-default"
        >
            <div className="absolute inset-0 bg-card border border-border rounded-[20%] rotate-45 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-xl" />
            <div className="relative z-10 text-center">
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{name}</span>
            </div>
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10 dark:opacity-100 opacity-50" />
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Core Competencies</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-black text-foreground">Versatile <span className="text-primary">Skill Set</span></h3>
                </div>

                <div className="space-y-16">
                    <div>
                        <h4 className="text-xl font-heading font-bold text-foreground mb-8 border-l-2 border-primary pl-4">Financial & Taxation</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {portfolioData.skills.financial.map((skill, i) => (
                                <SkillHex key={i} name={skill} index={i} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-heading font-bold text-foreground mb-8 border-l-2 border-primary pl-4">HR & Administration</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {portfolioData.skills.hr.map((skill, i) => (
                                <SkillHex key={i} name={skill} index={i} />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-xl font-heading font-bold text-foreground mb-8 border-l-2 border-primary pl-4">Software & Tools</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {portfolioData.skills.software.map((skill, i) => (
                                    <SkillHex key={i} name={skill} index={i} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-heading font-bold text-foreground mb-8 border-l-2 border-primary pl-4">Leadership</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {portfolioData.skills.leadership.map((skill, i) => (
                                    <SkillHex key={i} name={skill} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
