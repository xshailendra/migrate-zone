export const metadata = {
    title: "UK Skilled Worker Visa | Migrate Zone",
    description: "Work and live in the UK with a Skilled Worker Visa. gateway to working and living in the UK for skilled professionals.",
    keywords: "uk skilled worker visa, work in uk, uk job offer, skilled immigration uk, migrate zone",
    alternates: {
        canonical: "https://www.migratezone.com/uk/uk-skilled-worker-visa",
    },
    openGraph: {
        type: "article",
        title: "UK Skilled Worker Visa | Migrate Zone",
        description: "Your pathway to working and living in the UK. professional support for skilled workers from India, UAE, and Australia.",
        url: "https://www.migratezone.com/uk/uk-skilled-worker-visa",
        images: [
            {
                url: "/media/services/og-skilled-worker-visa.jpg",
                width: 1200,
                height: 630,
                alt: "UK Skilled Worker Visa",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Skilled Worker Visa | Migrate Zone",
        description: "Scale your career in the UK. expert guidance on Skilled Worker Visa applications and sponsorship.",
        images: ["/media/services/og-skilled-worker-visa.jpg"],
    },
};

export default function UKSkilledWorkerLayout({ children }) {
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
                                "name": "UK Migration",
                                "item": "https://www.migratezone.com/uk"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Skilled Worker Visa",
                                "item": "https://www.migratezone.com/uk/uk-skilled-worker-visa"
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
                                "name": "What is the minimum salary requirement for the UK Skilled Worker Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The salary requirement is typically £25,600 per year or £10.10 per hour, but this can vary depending on the occupation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I bring my family with me on a Skilled Worker Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can include your spouse or partner and dependent children in your application for the Skilled Worker Visa."
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
