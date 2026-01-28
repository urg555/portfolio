"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" });
        return controls.stop;
    }, [count, value]);

    useEffect(() => {
        return rounded.onChange((latest) => setDisplayValue(latest));
    }, [rounded]);

    return (
        <div className="text-center">
            <div className="text-5xl md:text-7xl font-black text-primary mb-2 flex items-center justify-center">
                {displayValue}{suffix}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
        </div>
    );
};

export const Stats = () => {
    return (
        <section className="py-20 bg-background border-y border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {portfolioData.stats.map((stat, i) => (
                        <Counter key={i} value={stat.value} label={stat.label} suffix={stat.suffix} />
                    ))}
                </div>
            </div>
        </section>
    );
};
