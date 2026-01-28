"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { FileText, ExternalLink } from 'lucide-react';

export const Publications = () => {
    return (
        <section id="publications" className="py-24 bg-background/50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Thought Leadership</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-foreground">Major <span className="text-primary">Publications</span></h3>
                </div>

                <div className="flex overflow-x-auto pb-12 gap-8 no-scrollbar -mx-4 px-4 snap-x">
                    {portfolioData.publications.map((pub, i) => {
                        const [title, source] = pub.split(' – ');
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="min-w-[320px] md:min-w-[450px] p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group snap-start"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <FileText size={24} />
                                </div>
                                <h4 className="text-xl font-heading font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                                    {title.replace(/“|”/g, '')}
                                </h4>
                                <div className="flex items-center justify-between text-muted-foreground mt-auto">
                                    <span className="text-sm font-bold uppercase tracking-widest">{source}</span>
                                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
