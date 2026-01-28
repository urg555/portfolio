"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Award, Heart, ShieldCheck } from 'lucide-react';

export const BentoGrid = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Training Section */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="col-span-full mb-4">
                            <h2 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Professional Growth</h2>
                            <h3 className="text-3xl font-heading font-black text-foreground">Specialized Trainings</h3>
                        </div>
                        {portfolioData.trainings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    <Award size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">{item.duration}</span>
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">{item.name}</h4>
                                <p className="text-muted-foreground text-sm">{item.organization}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Community Section */}
                    <div className="flex flex-col gap-6">
                        <div className="mb-4">
                            <h2 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Social Responsibility</h2>
                            <h3 className="text-3xl font-heading font-black text-foreground">Community</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {portfolioData.community.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-5 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4 hover:bg-primary/10 transition-colors group"
                                >
                                    <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                        <Heart size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground leading-tight">{item.role}</h4>
                                        <p className="text-xs text-primary/70 font-bold uppercase mt-1">{item.organization}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
