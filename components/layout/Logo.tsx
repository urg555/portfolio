import React from 'react';

export const Logo = () => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full group-hover:bg-primary transition-all duration-300">
                <span className="text-primary font-bold text-xl group-hover:text-background transition-colors duration-300">
                    UG
                </span>
                <div className="absolute -inset-1 border border-primary/30 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="text-foreground font-heading font-bold tracking-tighter hidden sm:inline-block">
                UBARAJ <span className="text-primary">GIRI</span>
            </span>
        </div>
    );
};
