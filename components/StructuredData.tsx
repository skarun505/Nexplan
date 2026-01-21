'use client'

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nexplan",
        "description": "Enterprise planning and decision intelligence platform providing strategic planning solutions with Anaplan and Pigment implementation",
        "url": "https://www.nexplan.ai",
        "logo": "https://www.nexplan.ai/nexplan-logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971-547912051",
            "contactType": "Sales",
            "email": "connect@nexplan.ai",
            "areaServed": ["US", "AE", "GB", "IN"],
            "availableLanguage": "English"
        },
        "address": [
            {
                "@type": "PostalAddress",
                "addressCountry": "US"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "AE"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "GB"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        ],
        "sameAs": [
            "https://linkedin.com",
            "https://twitter.com",
            "https://facebook.com",
            "https://instagram.com"
        ],
        "service": {
            "@type": "Service",
            "serviceType": "Enterprise Planning Software",
            "provider": {
                "@type": "Organization",
                "name": "Nexplan"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Planning Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Enterprise Planning Strategy",
                            "description": "Strategic planning alignment across finance, operations, workforce, and growth"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Anaplan & Pigment Implementation",
                            "description": "Platform implementation and integration for decision intelligence"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Continuous Optimization & Support",
                            "description": "Ongoing evolution with scenario intelligence and enhancements"
                        }
                    }
                ]
            }
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
