"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
                        <h3 className="text-5xl font-heading font-black text-foreground mb-8">
                            Let's Build the <span className="text-primary italic">Future</span> Together.
                        </h3>
                        <p className="text-muted-foreground text-lg mb-12 max-w-md">
                            Available for strategic advisory, financial leadership roles, and organizational governance consulting.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all border border-border">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Call Me</p>
                                    <p className="text-xl font-bold text-foreground">{portfolioData.personalInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all border border-border">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Me</p>
                                    <p className="text-xl font-bold text-foreground">{portfolioData.personalInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all border border-border">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">LinkedIn</p>
                                    <p className="text-xl font-bold text-foreground break-all">{portfolioData.personalInfo.linkedin}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 rounded-3xl bg-card border border-border relative overflow-hidden group shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] -z-10 group-hover:bg-primary/20 transition-colors" />

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Inquiry about Consultancy"
                                    className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary outline-none transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 bg-primary text-black font-black rounded-xl hover:scale-[1.02] transition-transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,102,0,0.2)]"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
