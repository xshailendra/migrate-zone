export const metadata = {
    title: "USA Visitor Visa | Migrate Zone (B-1/B-2)",
    description: "Secure your USA Visitor Visa (B-1/B-2) with Migrate Zone. Expert assistance for tourism, business, and family visits. 25+ years of expertise.",
    keywords: "usa visitor visa, usa b1/b2 visa, tourism visa usa, business visa usa, migrate zone usa visitor visa, visa consultant",
    alternates: {
        canonical: "https://www.migratezone.com/services/usa-visitor-visa",
    },
    openGraph: {
        type: "article",
        title: "USA Visitor Visa | Migrate Zone (B-1/B-2)",
        description: "Expert USA Visitor Visa (B-1/B-2) processing with Migrate Zone. Travel, business, or family visits made easy.",
        url: "https://www.migratezone.com/services/usa-visitor-visa",
        images: [
            {
                url: "/media/services/usa-visitor-visa.jpg",
                width: 1200,
                height: 630,
                alt: "USA Visitor Visa",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "USA Visitor Visa | Migrate Zone (B-1/B-2)",
        description: "Secure your USA Visitor Visa for tourism, business, or family visits with Migrate Zone.",
        images: ["/media/services/usa-visitor-visa.jpg"],
    },
};

export default function USAVisitorVisaLayout({ children }) {
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
                                "name": "USA Migration",
                                "item": "https://www.migratezone.com/usa"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Visitor Visa (B-1/B-2)",
                                "item": "https://www.migratezone.com/services/usa-visitor-visa"
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
                                "name": "How long can I stay in the USA on a Visitor Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Typically, you can stay up to 6 months on a USA Visitor Visa. However, the duration of your stay will be determined by the immigration officer at the port of entry."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I work or study on a Visitor Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, the USA Visitor Visa is for tourism, business, or medical purposes only. You are not allowed to work or enroll in a full-time study program during your visit."
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
