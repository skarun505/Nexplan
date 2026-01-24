'use client'

import { ArrowRight, Mail, Phone, Globe, Sparkles, Brain, Zap, Target, Users, TrendingUp, Rocket, Factory, ShoppingBag, Cpu, Building2, Lightbulb, Hammer, FlaskConical, Heart, Building, Check, Linkedin, Twitter, Facebook, Instagram, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import NetworkBackground from '@/components/NetworkBackground'

export default function Home() {
    const [scrollY, setScrollY] = useState(0)
    const [openRow, setOpenRow] = useState<number | null>(null)

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
                        <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#0052CC] transition-colors text-base font-bold shadow-sm hover:shadow-md">
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
                        <div className="space-y-8 text-center lg:text-left fade-in-up pt-10 lg:pt-0 lg:-mr-32 xl:-mr-40">
                            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[1.4] tracking-tight">
                                <span className="block text-gray-900">Transforming Planning into</span>
                                <span className="block mt-0 md:mt-2 pb-2 text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Enterprise Intelligence</span>
                            </h1>

                            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                                <span className="inline md:block">Turn enterprise planning into a unified decision layer,</span>
                                <span className="inline md:block mt-0 md:mt-1"> from static cycles to continuous foresight,</span>
                                <span className="inline md:block mt-0 md:mt-1"> empowering faster, smarter decisions.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-lg font-bold">
                                    Book a discovery call
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Image (Hidden on mobile) */}
                        <div className="hidden lg:block fade-in-up delay-100 relative ml-8">
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
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Perspective</span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight md:leading-normal">
                            <span className="block">Planning as a</span>
                            <span className="block mt-0 md:mt-2 text-primary">Strategic Capability</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-8"></div>
                    </div>

                    <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed fade-in-up max-w-3xl mx-auto text-center">
                        <p>
                            Planning is no longer a periodic exercise. Modern enterprises need systems that anticipate change, integrate data, and support real-time decision-making.
                        </p>
                        <p>
                            Nexplan helps organizations evolve beyond traditional budgeting and forecasting into adaptive decision systems that prioritize strategy, foresight, and actionable intelligence.
                        </p>
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
                                desc: "We help leadership teams define how planning supports business strategy, aligning finance, operations, workforce, and growth priorities into a single decision framework.",
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
                                desc: "We ensure planning becomes a living capability, driving adoption through executive alignment, training, and capability building across teams.",
                                icon: Users
                            },
                            {
                                num: "04",
                                title: "Continuous Optimization & Support",
                                desc: "We proactively evolve planning environments with scenario intelligence, enhancements, and roadmap development, so planning keeps pace with business change.",
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

                    <div className="grid md:grid-cols-3 gap-6 fade-in-up">
                        {[
                            {
                                title: "Aerospace & Aviation",
                                items: ["Fleet and capacity planning", "Maintenance and operations forecasting", "Network and route strategy"],
                                icon: Rocket
                            },
                            {
                                title: "Telecommunications",
                                items: ["Revenue and ARPU forecasting", "Network capacity and CapEx planning", "Customer and churn scenario modeling"],
                                icon: Zap
                            },
                            {
                                title: "Manufacturing",
                                items: ["Demand and production planning", "Supply chain and inventory optimization", "Capacity and investment prioritization"],
                                icon: Factory
                            },
                            {
                                title: "Technology & SaaS",
                                items: ["Subscription revenue and ARR forecasting", "Headcount and growth planning", "Product portfolio and pricing strategy"],
                                icon: Cpu
                            },
                            {
                                title: "Banking & Insurance",
                                items: ["Financial and capital planning", "Risk and scenario intelligence", "Portfolio profitability management"],
                                icon: Building2
                            },
                            {
                                title: "Energy & Utilities",
                                items: ["Project and CapEx forecasting", "Asset and resource planning", "Operational performance modeling"],
                                icon: Lightbulb
                            },
                            {
                                title: "Metal & Mining",
                                items: ["Production and capacity planning", "Resource allocation", "Investment and cost optimization"],
                                icon: Hammer
                            },
                            {
                                title: "Pharma & Life Sciences",
                                items: ["R&D portfolio planning", "Supply chain and demand forecasting", "Revenue and market expansion modeling"],
                                icon: FlaskConical
                            },
                            {
                                title: "Healthcare",
                                items: ["Workforce and capacity planning", "Cost and resource optimization", "Strategic growth forecasting"],
                                icon: Heart
                            },
                            {
                                title: "Real Estate & Construction",
                                items: ["Project lifecycle planning", "Capital investment and cash flow forecasting", "Portfolio optimization"],
                                icon: Building
                            },
                            {
                                title: "Retail",
                                items: ["OTB and merchandise planning", "Demand and inventory optimization", "Promotion and margin planning"],
                                icon: ShoppingBag
                            },
                            {
                                title: "Logistics & Supply Chain",
                                items: ["Transportation and fleet planning", "Network and warehouse optimization", "Capacity and service-level forecasting"],
                                icon: TrendingUp
                            }
                        ].map((item, i) => {
                            const itemsPerRow = 3
                            const currentRow = Math.floor(i / itemsPerRow)
                            const isOpen = openRow === currentRow
                            const toggleAccordion = () => {
                                setOpenRow(openRow === currentRow ? null : currentRow)
                            }
                            return (
                                <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group">
                                    <button
                                        onClick={toggleAccordion}
                                        className="w-full p-6 text-left"
                                    >
                                        <div className="flex items-center justify-between gap-3 mb-2">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <h3 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                                            </div>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-6 pb-6 pt-2">
                                            <ul className="space-y-2">
                                                {item.items.map((point, j) => (
                                                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                                                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                                                        <span className="leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFCFF]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16 fade-in-up">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight md:leading-normal">
                            <span className="block">Enterprise Planning</span>
                            <span className="block mt-0 md:mt-2 text-primary">Use Cases</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            {
                                title: "Sales & Revenue",
                                items: [
                                    "Sales forecasting and pipeline management",
                                    "Quota and territory planning",
                                    "Account scoring and customer segmentation",
                                    "Promotion, discount, and campaign planning",
                                    "Revenue scenario analysis and modeling",
                                    "Channel and product portfolio optimization"
                                ]
                            },
                            {
                                title: "Operations",
                                items: [
                                    "Demand planning and production scheduling",
                                    "Supply chain and inventory optimization",
                                    "Project and resource planning",
                                    "Capacity and workforce utilization",
                                    "Operational cost forecasting and efficiency tracking",
                                    "Logistics and network optimization"
                                ]
                            },
                            {
                                title: "Finance",
                                items: [
                                    "Budgeting, forecasting, and rolling forecasts",
                                    "P&L, cash flow, and balance sheet planning",
                                    "Capital expenditure (CapEx) and investment planning",
                                    "Strategic scenario planning",
                                    "Cost allocation and profitability modeling",
                                    "Financial consolidation and reporting"
                                ]
                            },
                            {
                                title: "HR & Workforce",
                                items: [
                                    "Headcount and workforce allocation",
                                    "Talent acquisition and retention planning",
                                    "Compensation, benefits, and payroll forecasting",
                                    "Workforce capacity and skills planning",
                                    "Succession Planning",
                                    "Resource utilization and productivity analysis"
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
                                        className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#0052CC] transition-all hover:shadow-lg font-bold text-lg"
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

                                    <a href="tel:+971509269710" className="flex items-start gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mt-1">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/70 mb-1.5 font-medium">Phone</div>
                                            <div className="font-bold text-base">+971 50 926 9710</div>
                                        </div>
                                    </a>

                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <div className="text-center space-y-4">
                                        <div className="text-lg font-bold">Let's Start the Conversation</div>
                                        <p className="text-sm text-white/80 leading-relaxed">
                                            Your trusted partner in transforming planning into strategic intelligence.
                                        </p>

                                        <div className="pt-6 mt-2 border-t border-white/10">
                                            <p className="text-xs text-white/60 mb-3 uppercase tracking-wider">Serving Globally</p>
                                            <div className="flex justify-center items-center gap-3 text-sm font-bold text-white uppercase tracking-widest flex-wrap">
                                                <span className="cursor-pointer">USA</span>
                                                <span className="text-white/40 text-xs">|</span>
                                                <span className="cursor-pointer">UAE</span>
                                                <span className="text-white/40 text-xs">|</span>
                                                <span className="cursor-pointer">UK</span>
                                                <span className="text-white/40 text-xs">|</span>
                                                <span className="cursor-pointer">India</span>
                                            </div>
                                        </div>
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
                                <span className="text-primary font-bold">Nexplan</span> — Enabling Intelligent, Adaptive Enterprise Planning
                            </p>

                        </div>



                        {/* Social Media */}
                        <div className="pt-6">
                            <p className="text-xs text-gray-500 mb-4">Follow Us</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://www.linkedin.com/company/nexplanai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
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
