'use client'

import { ArrowRight, Mail, Phone, Globe, Sparkles, Brain, Zap, Target, Users, TrendingUp, Rocket, Factory, ShoppingBag, Cpu, Building2, Lightbulb, Hammer, FlaskConical, Heart, Building } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)

            // Scroll animations
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
        handleScroll() // Initial check
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            {/* Header - Floating Dynamic */}
            <header
                className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${scrollY > 50 ? 'top-4' : 'top-6'
                    }`}
            >
                <div
                    className={`flex justify-between items-center bg-white/80 backdrop-blur-md rounded-full border border-white/20 transition-all duration-500 ease-in-out ${scrollY > 50
                        ? 'px-6 py-3 w-[92%] md:w-[450px] shadow-xl bg-white/90'
                        : 'px-8 py-5 w-[95%] max-w-6xl shadow-lg'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <img
                            src="/header-logo.png"
                            alt="Nexplan Logo"
                            className={`w-auto transition-all duration-500 ease-in-out ${scrollY > 50 ? 'h-8' : 'h-10'}`}
                        />
                    </div>
                    <a
                        href="#contact"
                        className={`bg-black text-white hover:bg-gray-800 rounded-full font-medium transition-all duration-500 ease-in-out text-sm ${scrollY > 50 ? 'px-5 py-2' : 'px-7 py-3'
                            }`}
                    >
                        Get in Touch
                    </a>
                </div>
            </header>
            {/* Hero Section - White Theme */}
            <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-purple-50 via-white to-white pt-20">
                {/* Animated Background Blobs */}
                <div className="absolute inset-0 overflow-hidden opacity-40">
                    <div
                        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl animate-float"
                        style={{ animationDelay: '0s', transform: `translateY(${scrollY * 0.2}px)` }}
                    />
                    <div
                        className="absolute top-1/3 -right-1/4 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl animate-float"
                        style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.3}px)` }}
                    />
                    <div
                        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl animate-float"
                        style={{ animationDelay: '4s', transform: `translateY(${scrollY * 0.15}px)` }}
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12 py-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-purple-700 font-medium">Enterprise Intelligence Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-gray-900">
                        Reimagining Planning as
                        <br />
                        <span className="text-gradient">Enterprise Intelligence</span>
                    </h1>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
                            Nexplan transforms enterprise planning into a decision intelligence layer connecting strategy, finance, operations, and workforce across the enterprise.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            From static budgets to continuous foresight, we partner with leadership teams to build planning ecosystems that drive smarter, faster, and more confident decisions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start the Conversation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-purple-600 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Philosophy: From Static Cycles to Intelligence */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            From Static Cycles to <span className="text-gradient">Intelligence</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed fade-in-up text-center max-w-4xl mx-auto">
                        <p>
                            Planning is evolving. Enterprises today need systems that <span className="text-purple-600 font-semibold">sense change</span>,
                            learn from data, and guide leadership decisions continuously.
                        </p>
                        <p>
                            Nexplan was founded to help organizations move beyond traditional planning into intelligent, adaptive decision systems. We focus on strategy, foresight, and actionable intelligence — not repeating old models. Our goal is to make planning a trusted, strategic capability for enterprise leaders.
                        </p>
                        <p className="font-medium text-gray-900">
                            At Nexplan, we help organizations rethink planning as intelligence in motion. We don’t just create better plans — we enable better decisions at leadership speed, turning planning from a process into a strategic advantage.
                        </p>
                    </div>

                    {/* Planning as a Leadership Capability */}
                    <div className="mt-24 fade-in-up">
                        <div className="bg-purple-50 rounded-3xl p-10 md:p-14 border border-purple-100">
                            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                                Planning as a <span className="text-purple-700">Leadership Capability</span>
                            </h3>

                            <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                                Planning today is a leadership function, not just a finance process. We work with CFOs, COOs, CHROs, and strategy teams to create a shared decision intelligence layer across the enterprise.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Foresight", desc: "Over hindsight" },
                                    { title: "Signals", desc: "Over static assumptions" },
                                    { title: "Continuous Intelligence", desc: "Over annual cycles" },
                                    { title: "Business-Owned Models", desc: "Over IT-owned systems" },
                                    { title: "Ready for AI", desc: "Enabled capabilities" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
                                        <div className="font-bold text-gray-900 text-lg mb-1">{item.title}</div>
                                        <div className="text-purple-600 font-medium text-sm uppercase tracking-wider">{item.desc}</div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-gray-600 mt-10 italic">
                                "The result is a planning environment leadership trusts to navigate growth, volatility, and transformation."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section id="approach" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Our Approach to <span className="text-gradient">Intelligent Planning</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Four strategic pillars for continuous enterprise intelligence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
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
                                desc: "We design and implement modern planning platforms such as Anaplan and Pigment, integrating data, models, and workflows to create a single source of truth for enterprise decisions.",
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
                            <div
                                key={i}
                                className="fade-in-up group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-purple-300 transition-all duration-500 card-hover shadow-md hover:shadow-2xl"
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-purple-100 border-2 border-purple-200 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-colors">
                                            <item.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-6xl font-bold text-purple-100 mb-2">{item.num}</div>
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gradient transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Expertise Across Sectors */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Enterprise Expertise <span className="text-gradient">Across Sectors</span>
                        </h2>
                        <p className="text-gray-600">Planning for operations, capacity, and strategic growth across industries</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
                        {[
                            { title: "Aerospace & Aviation", desc: "Planning for operations, capacity, and strategic growth", icon: Rocket },
                            { title: "Telecommunications", desc: "Forecasting, revenue planning, and network optimization", icon: Zap },
                            { title: "Manufacturing", desc: "Demand, supply chain, and capital planning", icon: Factory },
                            { title: "Retail & Consumer Goods", desc: "Inventory, revenue, and workforce planning", icon: ShoppingBag },
                            { title: "Technology & SaaS", desc: "Subscription revenue, headcount, and product portfolio planning", icon: Cpu },
                            { title: "Banking & Insurance", desc: "Financial planning, risk management, and capital allocation", icon: Building2 },
                            { title: "Energy & Utilities", desc: "Project, capex, and operational forecasting", icon: Lightbulb },
                            { title: "Metal & Mining", desc: "Production, resource allocation, and investment planning", icon: Hammer },
                            { title: "Pharmaceuticals & Life Sciences", desc: "R&D investment, supply chain, and revenue forecasting", icon: FlaskConical },
                            { title: "Healthcare", desc: "Resource optimization and patient care planning", icon: Heart },
                            { title: "Real Estate & Construction", desc: "Project lifecycle and capital investment planning", icon: Building }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                            >
                                <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 text-purple-600 transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Planning Use Cases */}
            <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Enterprise Planning <span className="text-gradient">Use Cases</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                title: "Sales & Revenue Teams",
                                items: [
                                    "Sales Forecasting",
                                    "Sales Capacity & Coverage Planning",
                                    "Quota & Incentive Planning",
                                    "Territory Alignment",
                                    "Account Scoring & Segmentation",
                                    "Pipeline & Revenue Planning"
                                ]
                            },
                            {
                                title: "Retail & Merchandise Teams",
                                items: [
                                    "Open-to-Buy (OTB) Planning",
                                    "Merchandise Financial Planning (MFP)",
                                    "Assortment & Category Planning",
                                    "Inventory & Sell-Through Optimization",
                                    "Promotion & Markdown Planning"
                                ]
                            }
                        ].map((useCase, i) => (
                            <div
                                key={i}
                                className="fade-in-up p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 card-hover shadow-sm hover:shadow-lg h-full"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-gradient-purple min-h-[56px] flex items-end">{useCase.title}</h3>
                                <ul className="space-y-3">
                                    {useCase.items.map((item, j) => (
                                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="text-purple-600 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology - Logo Ticker */}
            <section className="py-24 px-4 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <div className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our Technology <span className="text-gradient">Ecosystem</span>
                        </h2>
                        <div className="text-gray-600 text-lg space-y-2 max-w-3xl mx-auto">
                            <p>Nexplan designs ecosystems, not just implements tools.</p>
                            <p className="text-sm md:text-base">
                                We ensure technology serves business decisions, not the other way around. As platforms evolve with automation and intelligence, Nexplan ensures adoption is strategic, governed, and value-driven.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-in-up relative flex w-full overflow-hidden">
                    {/* Mask for fade effect on edges */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="flex animate-marquee whitespace-nowrap items-center pause-on-hover">
                        {/* Repeat logos 3 times for smooth infinity loop on wide screens */}
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
                                    <div key={`logo-${setIndex}-${i}`} className="mx-12 flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                                        <img
                                            src={src}
                                            alt="Technology Partner"
                                            className="h-24 md:h-32 w-auto object-contain max-w-[280px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <div className="fade-in-up relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-purple-100 via-purple-50 to-white border-2 border-purple-200 overflow-hidden shadow-xl">

                        <div className="relative z-10 text-center space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Get In <span className="text-gradient">Touch</span>
                            </h2>

                            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                                If your organization is ready to move from static planning to continuous, intelligent decision-making, Nexplan partners with you from strategy to execution.
                            </p>

                            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 pt-4">
                                <a
                                    href="mailto:connect@nexplan.ai"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md justify-center"
                                >
                                    <Mail className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">connect@nexplan.ai</span>
                                </a>

                                <a
                                    href="tel:+971547912051"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md justify-center"
                                >
                                    <Phone className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">+971 547912051</span>
                                </a>

                                <a
                                    href="https://www.nexplan.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md justify-center"
                                >
                                    <Globe className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">www.nexplan.ai</span>
                                </a>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="mailto:connect@nexplan.ai"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Let’s Build Your Planning Intelligence
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2 border-gray-200 py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-8">
                        <div>
                            <p className="text-xl font-semibold text-gray-900 mb-2">
                                <span className="text-gradient">Nexplan</span>: Intelligent Planning for Decision-Driven Enterprises.
                            </p>
                            <p className="text-sm text-purple-600 font-medium tracking-wide border-t border-gray-100 inline-block pt-2">
                                PLANNING REIMAGINED
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-600"></span> USA</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-600"></span> UAE</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-600"></span> UK</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-600"></span> India</span>
                        </div>

                        <div className="flex justify-center gap-4 text-sm text-gray-600">
                            <a href="mailto:info@nexplan.ai" className="hover:text-purple-600 transition-colors">
                                info@nexplan.ai
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="https://www.nexplan.ai" className="hover:text-purple-600 transition-colors">
                                www.nexplan.ai
                            </a>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-xs text-gray-500">
                                © {new Date().getFullYear()} Nexplan. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
