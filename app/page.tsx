'use client'

import { ArrowRight, Mail, Phone, Globe, Sparkles, Brain, Zap, Target, Users, TrendingUp, Rocket, Factory, ShoppingBag, Cpu, Building2, Lightbulb, Hammer, FlaskConical, Heart, Building, Check } from 'lucide-react'
import { useState, useEffect } from 'react'

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
        <div className="min-h-screen bg-white text-gray-900">
            {/* Simple Fixed Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-300 ${scrollY > 50 ? 'shadow-md' : 'border-gray-100'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <img src="/header-logo.png" alt="Nexplan" className="h-8 md:h-10 w-auto" />
                        <a href="#contact" className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-[#2a1645] transition-colors text-sm md:text-base font-medium">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section - Clean & Professional */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-8 md:space-y-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Enterprise Intelligence Platform</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                                Reimagining Planning as<br />
                                <span className="text-primary">Enterprise Intelligence</span>
                            </h1>
                        </div>

                        {/* Sub-headline */}
                        <div className="max-w-3xl mx-auto space-y-4">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Nexplan transforms enterprise planning into a decision intelligence layer connecting strategy, finance, operations, and workforce across the enterprise.
                            </p>
                            <p className="text-base md:text-lg text-gray-600">
                                From static budgets to continuous foresight, we partner with leadership teams to build planning ecosystems that drive smarter, faster, and more confident decisions.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#2a1645] transition-all duration-300 hover:shadow-xl hover:scale-105 text-base md:text-lg font-semibold">
                                Start the Conversation
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            From Static Cycles to <span className="text-primary">Intelligence</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed fade-in-up">
                        <p className="text-center">
                            Planning is evolving. Enterprises today need systems that <span className="text-primary font-semibold">sense change</span>, learn from data, and guide leadership decisions continuously.
                        </p>
                        <p className="text-center">
                            Nexplan was founded to help organizations move beyond traditional planning into intelligent, adaptive decision systems. We focus on strategy, foresight, and actionable intelligence — not repeating old models.
                        </p>
                        <p className="font-semibold text-gray-900 text-center">
                            At Nexplan, we help organizations rethink planning as intelligence in motion. We don't just create better plans — we enable better decisions at leadership speed.
                        </p>
                    </div>

                    {/* Leadership Capability Box */}
                    <div className="mt-16 md:mt-20 fade-in-up">
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
                                Planning as a <span className="text-primary">Leadership Capability</span>
                            </h3>
                            <p className="text-center text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
                                Planning today is a leadership function, not just a finance process. We work with CFOs, COOs, CHROs, and strategy teams to create a shared decision intelligence layer across the enterprise.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
                                {[
                                    { title: "Foresight", desc: "Over hindsight" },
                                    { title: "Signals", desc: "Over static assumptions" },
                                    { title: "Continuous Intelligence", desc: "Over annual cycles" },
                                    { title: "Business-Owned Models", desc: "Over IT-owned systems" },
                                    { title: "Ready for AI", desc: "Enabled capabilities" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl text-center border border-gray-100 hover:border-primary/30 transition-colors min-w-[200px]">
                                        <div className="font-bold text-gray-900 text-base md:text-lg mb-2">{item.title}</div>
                                        <div className="text-primary/70 text-sm font-medium uppercase tracking-wide">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            Our Approach to <span className="text-primary">Intelligent Planning</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
                            Four strategic pillars for continuous enterprise intelligence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
                            <div key={i} className="fade-in-up bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4 md:gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-5xl md:text-6xl font-bold text-gray-100 mb-2">{item.num}</div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Expertise */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            Enterprise Expertise <span className="text-primary">Across Sectors</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">Planning for operations, capacity, and strategic growth across industries</p>
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
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
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
            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto text-center mb-12">
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

                <div className="fade-in-up relative flex w-full overflow-hidden py-8">
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
            <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="fade-in-up text-center space-y-6 mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Get In <span className="text-primary">Touch</span>
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            If your organization is ready to move from static planning to continuous, intelligent decision-making, Nexplan partners with you from strategy to execution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Contact Form */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about your planning needs..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#2a1645] transition-all hover:shadow-lg font-semibold text-base md:text-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-primary text-white p-6 md:p-8 rounded-2xl">
                                <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <a href="mailto:connect@nexplan.ai" className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/70 mb-1">Email</div>
                                            <div className="font-semibold">connect@nexplan.ai</div>
                                        </div>
                                    </a>

                                    <a href="tel:+971547912051" className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/70 mb-1">Phone</div>
                                            <div className="font-semibold">+971 547912051</div>
                                        </div>
                                    </a>

                                    <a href="https://www.nexplan.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/70 mb-1">Website</div>
                                            <div className="font-semibold">www.nexplan.ai</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-6">
                        <div>
                            <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                <span className="text-primary font-bold">Nexplan</span>: Intelligent Planning for Decision-Driven Enterprises
                            </p>
                            <p className="text-xs font-bold tracking-[0.2em] text-primary/70 uppercase mt-3">Planning Reimagined</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium text-gray-600">
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> USA
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> UAE
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> UK
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> India
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-500">
                            <a href="mailto:info@nexplan.ai" className="hover:text-primary transition-colors">
                                info@nexplan.ai
                            </a>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <a href="https://www.nexplan.ai" className="hover:text-primary transition-colors">
                                www.nexplan.ai
                            </a>
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
