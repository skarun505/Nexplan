'use client'

import { ArrowRight, Mail, Phone, Globe, Sparkles, Brain, Zap, Target, Users, TrendingUp, Rocket, Factory, ShoppingBag, Cpu, Building2, Lightbulb, Hammer, FlaskConical, Heart, Building, Check, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import NetworkBackground from '@/components/NetworkBackground'

export default function Home() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)

            const elements = document.querySelectorAll('.fade-in-up')
            elements.forEach(el => {
                const rect = el.getBoundingClientRect()
                const isVisible = rect.top < window.innerHeight - 100
                if (isVisible) {
                    el.classList.add('visible')
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-[#FAFCFF] text-gray-900">
            {/* Simple Fixed Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFCFF]/95 backdrop-blur-sm border-b transition-all duration-300 ${scrollY > 50 ? 'shadow-md' : 'border-gray-100'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <a href="/" className="flex items-center">
                            <img src="/nexplan-logo-v2.png" alt="Nexplan" className="h-12 md:h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                        </a>
                        <a href="#contact" className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-[#0052CC] transition-colors text-sm md:text-base font-medium">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section - Compact Professional Design */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF] overflow-hidden">
                <NetworkBackground />
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Column: Content (Centered on mobile, Left on desktop) */}
                        <div className="space-y-8 text-center lg:text-left fade-in-up pt-10 lg:pt-0">
                            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                                Reimagining Planning as
                                <span className="block mt-2 text-primary">Enterprise Intelligence</span>
                            </h1>

                            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                <span className="font-bold text-gray-900">Nexplan</span> transforms enterprise planning into a <span className="font-semibold text-gray-900">decision intelligence layer</span>. From static budgets to continuous foresight, empowering faster, smarter decisions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-base font-semibold">
                                    Transform now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Image (Hidden on mobile) */}
                        <div className="hidden lg:block fade-in-up delay-100 relative">
                            {/* Glow effect behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-[80px] -z-10"></div>

                            <img
                                src="/nexplan Header.png"
                                alt="Nexplan Enterprise Platform"
                                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-10 md:mb-14 fade-in-up">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Philosophy</span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            From Static Cycles to <br className="hidden md:block" />
                            <span className="text-primary">Real-Time Intelligence</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-8"></div>
                    </div>

                    <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed fade-in-up max-w-3xl mx-auto text-center">
                        <p>
                            Planning is evolving. Enterprises today need systems that <span className="text-gray-900">sense change</span>, learn from data, and guide leadership decisions continuously.
                        </p>
                        <p>
                            Nexplan helps organizations move beyond traditional planning into intelligent, adaptive decision systems focused on strategy, foresight, and actionable intelligence.
                        </p>
                    </div>

                    {/* Leadership Capability Box - Premium Card Style */}
                    <div className="mt-24 md:mt-32 fade-in-up">
                        <div className="bg-white rounded-3xl p-8 md:p-14 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-500"></div>

                            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-5 text-center text-gray-900">
                                Planning as a <span className="text-primary">Leadership Capability</span>
                            </h3>
                            <p className="text-center text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Planning today is a leadership function, not just a finance process. We create a shared decision intelligence layer across the enterprise.
                            </p>

                            <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
                                {[
                                    { title: "Foresight", desc: "Over hindsight" },
                                    { title: "Signals", desc: "Over static assumptions" },
                                    { title: "Continuous Intelligence", desc: "Over annual cycles" },
                                    { title: "Business-Owned Models", desc: "Over IT-owned systems" },
                                    { title: "Ready for AI", desc: "Enabled capabilities" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 md:p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 lg:min-w-[220px] group/card">
                                        <div className="font-heading font-bold text-gray-900 text-base md:text-lg lg:text-xl mb-3 group-hover/card:text-primary transition-colors">{item.title}</div>
                                        <div className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 md:mb-24 fade-in-up">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Methodology</span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900">
                            Our Approach to <span className="text-primary">Intelligent Planning</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-5">
                            Four strategic pillars for continuous enterprise intelligence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                        {[
                            {
                                num: "01",
                                title: "Enterprise Planning Strategy",
                                desc: "We help leadership teams define how planning supports business strategy — aligning finance, operations, workforce, and growth priorities into a single decision framework.",
                                icon: Target
                            },
                            {
                                num: "02",
                                title: "Intelligent Platform Implementation",
                                desc: "We design and implement modern planning platforms such as Anaplan and Pigment, integrating data, models, and workflows to create a single source of truth.",
                                icon: Brain
                            },
                            {
                                num: "03",
                                title: "Adoption, Enablement & Change",
                                desc: "We ensure planning becomes a living capability — driving adoption through executive alignment, training, and capability building across teams.",
                                icon: Users
                            },
                            {
                                num: "04",
                                title: "Continuous Optimization & Support",
                                desc: "We proactively evolve planning environments with scenario intelligence, enhancements, and roadmap development — so planning keeps pace with business change.",
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <div key={i} className="fade-in-up bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                                <div className="flex items-start gap-6 md:gap-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                            <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 group-hover:text-primary/10 transition-colors">{item.num}</div>
                                        <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed border-l-2 border-transparent pl-0 group-hover:border-primary/30 group-hover:pl-4 transition-all duration-300">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Expertise */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                            Enterprise Expertise <span className="text-primary">Across Sectors</span>
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base">Planning for operations, capacity, and strategic growth across industries</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 fade-in-up">
                        {[
                            { title: "Aerospace & Aviation", desc: "Planning for operations, capacity, and strategic growth", icon: Rocket },
                            { title: "Telecommunications", desc: "Forecasting, revenue planning, and network optimization", icon: Zap },
                            { title: "Manufacturing", desc: "Demand, supply chain, and capital planning", icon: Factory },
                            { title: "Technology & SaaS", desc: "Subscription revenue, headcount, and product portfolio planning", icon: Cpu },
                            { title: "Banking & Insurance", desc: "Financial planning, risk management, and capital allocation", icon: Building2 },
                            { title: "Energy & Utilities", desc: "Project, capex, and operational forecasting", icon: Lightbulb },
                            { title: "Metal & Mining", desc: "Production, resource allocation, and investment planning", icon: Hammer },
                            { title: "Pharmaceuticals & Life Sciences", desc: "R&D investment, supply chain, and revenue forecasting", icon: FlaskConical },
                            { title: "Healthcare", desc: "Resource optimization and patient care planning", icon: Heart },
                            { title: "Real Estate & Construction", desc: "Project lifecycle and capital investment planning", icon: Building }
                        ].map((item, i) => (
                            <div key={i} className="group p-5 md:p-6 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 rounded-lg bg-white group-hover:bg-primary/5 border border-gray-100 group-hover:border-primary/20 text-primary transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-900 mb-1 text-base md:text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            Enterprise Planning <span className="text-primary">Use Cases</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            {
                                title: "Finance Teams",
                                items: [
                                    "Budget Planning & Forecasting",
                                    "P&L, Cash Flow & Balance Sheet Planning",
                                    "Rolling Forecasts & Scenario Modeling",
                                    "Variance Analysis & Performance Management",
                                    "Strategic Investment & Capital Allocation"
                                ]
                            },
                            {
                                title: "HR & Workforce Teams",
                                items: [
                                    "Headcount Planning & Optimization",
                                    "Workforce Forecasting & Scenario Planning",
                                    "Talent Allocation & Capacity Planning",
                                    "Compensation & Benefits Planning",
                                    "Skills & Succession Planning"
                                ]
                            },
                            {
                                title: "Sales & Rev Team",
                                items: [
                                    "Sales Forecasting & Revenue Intelligence",
                                    "Quota Management & Incentive Compensation",
                                    "Territory Alignment & Coverage Optimization",
                                    "Sales Capacity & Headcount Planning",
                                    "Pipeline Analytics & Opportunity Management"
                                ]
                            },
                            {
                                title: "Retail & Merch Teams",
                                items: [
                                    "Open-to-Buy (OTB) Planning",
                                    "Merchandise Financial Planning (MFP)",
                                    "Assortment & Category Planning",
                                    "Inventory & Sell-Through Optimization",
                                    "Promotion & Markdown Planning"
                                ]
                            }
                        ].map((useCase, i) => (
                            <div key={i} className="fade-in-up bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all">
                                <h3 className="text-lg md:text-xl font-bold mb-6 text-primary pb-4 border-b border-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">{useCase.title}</h3>
                                <ul className="space-y-3">
                                    {useCase.items.map((item, j) => (
                                        <li key={j} className="text-sm text-gray-600 flex items-start gap-3">
                                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF] border-t border-gray-100">
                <div className="max-w-6xl mx-auto text-center mb-6">
                    <div className="fade-in-up">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            Our Technology <span className="text-primary">Ecosystem</span>
                        </h2>
                        <div className="text-gray-600 text-base md:text-lg space-y-2 max-w-3xl mx-auto mt-6">
                            <p>Nexplan designs ecosystems, not just implements tools.</p>
                            <p className="text-sm md:text-base">
                                We ensure technology serves business decisions, not the other way around. As platforms evolve with automation and intelligence, Nexplan ensures adoption is strategic, governed, and value-driven.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-in-up relative flex w-full overflow-hidden py-6">
                    <div className="flex animate-marquee whitespace-nowrap items-center pause-on-hover">
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={`set-${setIndex}`} className="flex">
                                {[
                                    "/partners/partner-1.png",
                                    "/partners/partner-2.png",
                                    "/partners/partner-3.png",
                                    "/partners/partner-4.png",
                                    "/partners/partner-5.png",
                                    "/partners/partner-6.png",
                                    "/partners/partner-7.png",
                                    "/partners/partner-8.png",
                                    "/partners/partner-9.png",
                                    "/partners/partner-10.png"
                                ].map((src, i) => (
                                    <div key={`logo-${setIndex}-${i}`} className="mx-8 md:mx-12 flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                                        <img src={src} alt="Technology Partner" className="h-16 md:h-24 w-auto object-contain max-w-[200px]" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-6 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF]">
                <div className="max-w-6xl mx-auto">
                    <div className="fade-in-up text-center space-y-4 mb-8">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Get In <span className="text-primary">Touch</span>
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            If your organization is ready to move from static planning to continuous, intelligent decision-making, Nexplan partners with you from strategy to execution.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 h-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Send us a message</h3>
                                <form className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white"
                                            placeholder="Tell us about your planning needs..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#0052CC] transition-all hover:shadow-lg font-bold text-base md:text-lg"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contact Information</h3>
                                <div className="space-y-6">
                                    <a href="mailto:connect@nexplan.ai" className="flex items-start gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mt-1">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/70 mb-1.5 font-medium">Email</div>
                                            <div className="font-bold text-base">connect@nexplan.ai</div>
                                        </div>
                                    </a>

                                    <a href="tel:+971547912051" className="flex items-start gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mt-1">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/70 mb-1.5 font-medium">Phone</div>
                                            <div className="font-bold text-base">+971 547912051</div>
                                        </div>
                                    </a>

                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <div className="text-center space-y-3">
                                        <div className="text-lg font-bold">Let's Start the Conversation</div>
                                        <p className="text-sm text-white/80 leading-relaxed">
                                            Your trusted partner in transforming planning into strategic intelligence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-6">
                        <div>
                            <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                <span className="text-primary font-bold">Nexplan</span>: Intelligent Planning for Decision-Driven Enterprises
                            </p>
                            <p className="text-xs font-bold tracking-[0.2em] text-primary/70 uppercase mt-3">Planning Reimagined</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-600">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
                            <span className="text-gray-300">|</span>
                            <a href="mailto:info@nexplan.ai" className="hover:text-primary transition-colors">info@nexplan.ai</a>
                        </div>

                        {/* Social Media */}
                        <div className="pt-6">
                            <p className="text-xs text-gray-500 mb-4">Follow Us</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Locations */}
                        <div className="flex justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-widest pt-2">
                            <span>USA</span>
                            <span>UAE</span>
                            <span>UK</span>
                            <span>India</span>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <p className="text-xs text-gray-400">
                                © {new Date().getFullYear()} Nexplan. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
