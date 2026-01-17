'use client'

import { ArrowRight, Mail, Phone, Globe, Sparkles, Brain, Zap, Target, Users, TrendingUp } from 'lucide-react'
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
                className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrollY > 50 ? 'top-6' : 'top-6'
                    }`}
            >
                <div
                    className={`flex justify-between items-center bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 transition-all duration-300 ${scrollY > 50 ? 'px-8 py-3 w-auto min-w-[300px] gap-12' : 'px-8 py-4 w-[95%] max-w-6xl'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <img
                            src="/header-logo.png"
                            alt="Nexplan Logo"
                            className={`w-auto transition-all duration-300 ${scrollY > 50 ? 'h-9' : 'h-10'}`}
                        />
                    </div>
                    <a
                        href="#contact"
                        className={`bg-black text-white hover:bg-gray-800 rounded-full font-medium transition-all text-sm ${scrollY > 50 ? 'px-5 py-2.5' : 'px-6 py-2.5'
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

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Transform enterprise planning into a decision intelligence layer that connects strategy,
                        finance, operations, and workforce across your organization.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start the Conversation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#approach"
                            className="px-8 py-4 border-2 border-purple-300 hover:border-purple-600 text-gray-700 hover:text-purple-700 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50"
                        >
                            Learn More
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

            {/* Philosophy Section */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            From Static Cycles to <span className="text-gradient">Intelligence</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed fade-in-up">
                        <p className="text-center max-w-3xl mx-auto">
                            Planning is evolving. Enterprises need systems that <span className="text-purple-600 font-semibold">sense change</span>,
                            learn from data, and guide leadership decisions continuously.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 pt-12">
                            {[
                                { icon: Brain, title: "Intelligent", desc: "Adaptive decision systems" },
                                { icon: Zap, title: "Real-time", desc: "Continuous foresight" },
                                { icon: Target, title: "Strategic", desc: "Leadership-driven" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="fade-in-up text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-300 card-hover shadow-sm hover:shadow-lg"
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section id="approach" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Our <span className="text-gradient">Approach</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Four strategic pillars for intelligent planning
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                num: "01",
                                title: "Enterprise Planning Strategy",
                                desc: "Align finance, operations, workforce, and growth into a single decision framework.",
                                icon: Target
                            },
                            {
                                num: "02",
                                title: "Intelligent Platform Implementation",
                                desc: "Deploy modern platforms like Anaplan and Pigment as your source of truth.",
                                icon: Brain
                            },
                            {
                                num: "03",
                                title: "Adoption & Enablement",
                                desc: "Drive executive alignment, training, and capability building across teams.",
                                icon: Users
                            },
                            {
                                num: "04",
                                title: "Continuous Optimization",
                                desc: "Evolve planning with scenario intelligence and proactive enhancements.",
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
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Cross-Industry <span className="text-gradient">Expertise</span>
                        </h2>
                        <p className="text-gray-600">Trusted across sectors worldwide</p>
                    </div>

                    <div className="fade-in-up flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {[
                            "Aerospace & Aviation", "Telecommunications", "Manufacturing",
                            "Retail & Consumer", "Technology & SaaS", "Banking & Insurance",
                            "Energy & Utilities", "Pharmaceuticals", "Healthcare",
                            "Real Estate", "Metal & Mining"
                        ].map((industry, i) => (
                            <div
                                key={i}
                                className="px-5 py-2 rounded-full bg-purple-50 border border-purple-200 hover:border-purple-500 hover:bg-purple-100 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-purple-700 cursor-default"
                            >
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Planning <span className="text-gradient">Use Cases</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Finance",
                                items: ["Budget Planning", "Cash Flow Management", "Scenario Modeling", "Investment Planning"]
                            },
                            {
                                title: "HR & Workforce",
                                items: ["Headcount Planning", "Talent Allocation", "Compensation Planning", "Succession Planning"]
                            },
                            {
                                title: "Sales & Revenue",
                                items: ["Sales Forecasting", "Quota Planning", "Territory Alignment", "Pipeline Management"]
                            },
                            {
                                title: "Retail",
                                items: ["Merchandise Planning", "Inventory Optimization", "Assortment Planning", "Promotion Planning"]
                            }
                        ].map((useCase, i) => (
                            <div
                                key={i}
                                className="fade-in-up p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 card-hover shadow-sm hover:shadow-lg"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-gradient-purple">{useCase.title}</h3>
                                <ul className="space-y-2">
                                    {useCase.items.map((item, j) => (
                                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            {item}
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
                            Our Technology <span className="text-gradient">Partners</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We design ecosystems, not just implement tools
                        </p>
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
                                Let's <span className="text-gradient">Connect</span>
                            </h2>

                            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                                Ready for continuous, intelligent decision-making? Let's build your planning intelligence together.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <a
                                    href="mailto:connect@nexplan.ai"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <Mail className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">connect@nexplan.ai</span>
                                </a>

                                <a
                                    href="tel:+971547912051"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <Phone className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">+971 547912051</span>
                                </a>

                                <a
                                    href="https://www.nexplan.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <Globe className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">nexplan.ai</span>
                                </a>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="mailto:connect@nexplan.ai"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Get Started
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
                    <div className="text-center space-y-6">
                        <p className="text-xl font-semibold text-gray-900">
                            <span className="text-gradient">Nexplan</span> — Intelligent Planning for Decision-Driven Enterprises
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
                            <span>USA</span>
                            <span className="text-purple-600">•</span>
                            <span>UAE</span>
                            <span className="text-purple-600">•</span>
                            <span>UK</span>
                            <span className="text-purple-600">•</span>
                            <span>India</span>
                        </div>

                        <div className="flex justify-center gap-4 text-sm text-gray-600">
                            <a href="mailto:info@nexplan.ai" className="hover:text-purple-600 transition-colors">
                                info@nexplan.ai
                            </a>
                            <span>|</span>
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
