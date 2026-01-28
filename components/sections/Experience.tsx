"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0 mb-20 last:mb-0"
        >
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Date/Phase for Desktop */}
                <div className="hidden md:block w-1/3 text-right pr-12 pt-1">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">{item.phase}</span>
                    <p className="text-muted-foreground font-medium text-lg mt-1">{item.duration}</p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/3 top-1 w-6 h-6 rounded-full border-4 border-background bg-primary z-10 -ml-3" />

                {/* Content */}
                <div className="flex-1 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group">
                    <div className="md:hidden mb-4">
                        <span className="text-primary font-bold text-xs uppercase tracking-widest">{item.phase}</span>
                        <p className="text-muted-foreground font-medium text-sm">{item.duration}</p>
                    </div>

                    <h4 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.role}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-6">
                        <div className="flex items-center gap-1">
                            <Briefcase size={14} className="text-primary" />
                            <span>{item.organization}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-primary" />
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        {item.responsibilities.map((resp: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                {resp}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="py-24 bg-background relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Professional Path</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-black text-foreground">The 20+ Year <span className="text-primary italic">Journey</span></h3>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Timeline Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-0 md:left-1/3 top-4 bottom-4 w-[2px] bg-primary/40 -ml-[1px] hidden md:block"
                    />
                    {/* Static Background Line */}
                    <div className="absolute left-0 md:left-1/3 top-4 bottom-4 w-[2px] bg-border -ml-[1px]" />

                    <div className="space-y-0">
                        {portfolioData.experience.map((item, i) => (
                            <ExperienceCard key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
