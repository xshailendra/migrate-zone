export const metadata = {
    title: "Skilled In-Demand Visa Australia | Migrate Zone (482) – Fast-Tracked Australian PR",
    description: "Move to Australia with your in-demand skills. Fast-track your PR pathway with a Skilled In-Demand Visa (482). Expert guidance from Migrate Zone.",
    keywords: "skilled migration, 482 visa, Australian PR, Migrate Zone, in-demand visa, occupation list, Australia visa, skilled worker, PMSOL, MLTSSL",
    alternates: {
        canonical: "https://www.migratezone.com/skilled-in-demand-visa-australia",
    },
    openGraph: {
        type: "article",
        title: "Skilled In-Demand Visa Australia | Migrate Zone (482) – Fast-Tracked Australian PR",
        description: "Move to Australia with your in-demand skills. Fast-track your PR pathway with a Skilled In-Demand Visa (482).",
        url: "https://www.migratezone.com/skilled-in-demand-visa-australia",
        images: [
            {
                url: "/media/visa/og-skilled-visa.jpg",
                width: 1200,
                height: 630,
                alt: "Skilled In-Demand Visa Australia | Migrate Zone (482)",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Skilled In-Demand Visa Australia | Migrate Zone (482) – Fast-Tracked Australian PR",
        description: "Move to Australia with your in-demand skills. Fast-track your PR pathway with a Skilled In-Demand Visa (482).",
        images: ["/media/visa/og-skilled-visa.jpg"],
    },
};

export default function SkilledInDemandLayout({ children }) {
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
                                "name": "Skilled In-Demand Visa 482",
                                "item": "https://www.migratezone.com/skilled-in-demand-visa-australia"
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
                                "name": "What is the minimum score required for a skilled PR visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A minimum of 65 points is required, but higher scores improve your chances of receiving an invitation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is employer sponsorship necessary for skilled migration?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Not always. Subclass 189 and 190 don’t require employer sponsorship. However, employer-backed visas like 482, 494, and 186 are often faster."
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
