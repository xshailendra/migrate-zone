export const metadata = {
    title: "Skilled Employer Sponsored Regional Visa – Subclass 494 | Migrate Zone",
    description: "Work, Live & Settle in Regional Australia with a Pathway to PR. Learn how the Subclass 494 visa can help you move to Australia today.",
    keywords: "SESR Subclass 494 visa, Australia Regional PR, Skilled Employer Sponsored Regional, Subclass 494, Australia visa for regional areas",
    alternates: {
        canonical: "https://www.migratezone.com/services/skilled-employer-sponsored-regional-visa-subclass-494",
    },
    openGraph: {
        type: "article",
        title: "Skilled Employer Sponsored Regional Visa – Subclass 494 | Migrate Zone",
        description: "Secure your future in Regional Australia with the Subclass 494 visa. Find out how Migrate Zone can help you.",
        url: "https://www.migratezone.com/services/skilled-employer-sponsored-regional-visa-subclass-494",
        images: [
            {
                url: "/media/services/og-494.jpg",
                width: 1200,
                height: 630,
                alt: "Skilled Employer Sponsored Regional Visa – Subclass 494",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Skilled Employer Sponsored Regional Visa – Subclass 494 | Migrate Zone",
        description: "Move to Regional Australia with the Subclass 494 visa. Learn more at Migrate Zone.",
        images: ["/media/services/og-494.jpg"],
    },
};

export default function SESR494Layout({ children }) {
    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.migratezone.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Australia Migration",
                                "item": "https://www.migratezone.com/australia"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Subclass 494 Visa",
                                "item": "https://www.migratezone.com/services/skilled-employer-sponsored-regional-visa-subclass-494"
                            }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Can I apply for PR after getting a 494 visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. After 3 years of holding the 494 visa, if income and residency criteria are met, you can apply for Subclass 191 Permanent Residency."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is this visa only for rural areas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Not exactly. It’s for designated regional areas, which include major cities like Adelaide, Perth, Gold Coast, Canberra, and others outside Sydney, Melbourne, and Brisbane."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I include my family in this visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. You can include your spouse and dependent children, and they can work and study in Australia."
                                }
                            }
                        ]
                    })
                }}
            />
            {children}
        </>
    );
}
