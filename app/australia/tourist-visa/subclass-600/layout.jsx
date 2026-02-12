export const metadata = {
    title: "Australia Visitor Visa – Subclass 600 | Migrate Zone",
    description: "Travel to Australia for tourism, business meetings, or family visits. Get expert guidance for the Subclass 600 Visitor Visa with fast processing.",
    keywords: "australia visitor visa, subclass 600, tourist visa australia, business visitor visa, family visitor visa, travel to australia, migrate zone",
    alternates: {
        canonical: "https://www.migratezone.com/services/australia-visitor-visa-subclass-600",
    },
    openGraph: {
        type: "article",
        title: "Australia Visitor Visa – Subclass 600 | Migrate Zone",
        description: "Hassle-free visitor visa support for Australia. Apply for Subclass 600 for tourism, business, or family visits.",
        url: "https://www.migratezone.com/services/australia-visitor-visa-subclass-600",
        images: [
            {
                url: "/media/services/og-australia-visitor-visa.jpg",
                width: 1200,
                height: 630,
                alt: "Australia Visitor Visa – Subclass 600",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Australia Visitor Visa – Subclass 600 | Migrate Zone",
        description: "Plan your trip to Australia with our expert visitor visa services. Subclass 600 for all your short-term travel needs.",
        images: ["/media/services/og-australia-visitor-visa.jpg"],
    },
};

export default function VisitorVisa600Layout({ children }) {
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
                                "name": "Visitor Visa Subclass 600",
                                "item": "https://www.migratezone.com/services/australia-visitor-visa-subclass-600"
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
                                "name": "How long can I stay on a Visitor Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You may stay up to 3, 6, or 12 months, depending on your application and reason for travel."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I work on a Visitor Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. The Subclass 600 visa does not permit work. You may attend business meetings but not take up employment."
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
