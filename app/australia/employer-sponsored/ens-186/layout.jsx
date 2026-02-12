export const metadata = {
    title: "Employer Nomination Scheme (ENS) – Subclass 186 Visa | Migrate Zone",
    description: "Secure Permanent Residency in Australia with Employer Sponsorship. Find out how the Subclass 186 visa can help you move to Australia today.",
    keywords: "ENS Subclass 186 visa, Australia PR, Employer Nomination Scheme, Subclass 186, Australia visa for skilled workers",
    alternates: {
        canonical: "https://www.migratezone.com/services/employer-nomination-scheme-ens-subclass-186-visa",
    },
    openGraph: {
        type: "article",
        title: "Employer Nomination Scheme (ENS) – Subclass 186 Visa | Migrate Zone",
        description: "Secure your permanent residency in Australia with the Subclass 186 visa. Find out how Migrate Zone can help you.",
        url: "https://www.migratezone.com/services/employer-nomination-scheme-ens-subclass-186-visa",
        images: [
            {
                url: "/media/services/og-ens-186.jpg",
                width: 1200,
                height: 630,
                alt: "Employer Nomination Scheme (ENS) – Subclass 186 Visa",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Employer Nomination Scheme (ENS) – Subclass 186 Visa | Migrate Zone",
        description: "Secure your Australian PR with the Subclass 186 visa. Learn more at Migrate Zone.",
        images: ["/media/services/og-ens-186.jpg"],
    },
};

export default function ENS186Layout({ children }) {
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
                                "name": "ENS Subclass 186 Visa",
                                "item": "https://www.migratezone.com/services/employer-nomination-scheme-ens-subclass-186-visa"
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
                                "name": "Can I apply for a 186 visa directly from India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, under the Direct Entry Stream, you can apply from outside Australia if your occupation and skills meet the requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the 186 visa a PR visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, the 186 visa provides permanent residency from the date of visa grant."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What’s the difference between 482 and 186 visas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The 482 visa is temporary and employer-sponsored. The 186 visa is permanent and often applied for after holding a 482 for 2-3 years under the TRT stream."
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
