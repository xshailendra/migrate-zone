export const metadata = {
    title: "Skilled Independent Visa – Subclass 189 | Migrate Zone",
    description: "Migrate to Australia independently on points with the Skilled Independent Visa. Learn how to apply for Permanent Residency with expert guidance.",
    keywords: "skilled independent visa, subclass 189, Australia PR, immigration to Australia, points-based visa, Skilled Migration Australia",
    alternates: {
        canonical: "https://www.migratezone.com/services/skilled-independent-visa-189",
    },
    openGraph: {
        type: "article",
        title: "Skilled Independent Visa – Subclass 189 | Migrate Zone",
        description: "Migrate to Australia without sponsorship using the Skilled Independent Visa (Subclass 189). Your direct path to permanent residency.",
        url: "https://www.migratezone.com/services/skilled-independent-visa-189",
        images: [
            {
                url: "/media/services/og-skilled-independent-189.jpg",
                width: 1200,
                height: 630,
                alt: "Skilled Independent Visa – Subclass 189",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Skilled Independent Visa – Subclass 189 | Migrate Zone",
        description: "Apply for the Skilled Independent Visa Subclass 189. Permanent Residency in Australia, no sponsor needed. Learn more at Migrate Zone.",
        images: ["/media/services/og-skilled-independent-189.jpg"],
    },
};

export default function SkilledIndependent189Layout({ children }) {
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
                                "name": "Subclass 189 Visa",
                                "item": "https://www.migratezone.com/services/skilled-independent-visa-189"
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
                                "name": "What is the minimum point score for 189 visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The minimum is 65 points, but higher scores improve your chances of receiving an invitation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need a job offer to apply for this visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. This visa is independent and does not require a sponsor or job offer."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the 189 visa permanent?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, the visa grants you Australian permanent residency and leads to citizenship after a few years of legal stay."
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
