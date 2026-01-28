import React from 'react';
import { Logo } from '../layout/Logo';
import { portfolioData } from '@/data/portfolio';

export const Footer = () => {
    return (
        <footer className="py-12 bg-background border-t border-border">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                <Logo />
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Privacy Policy</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
                </div>
            </div>
        </footer>
    );
};
