export const metadata = {
    title: "Provincial Nominee Investor Visa – Canada | Migrate Zone",
    description: "Secure Canadian PR by investing or establishing a business through the Provincial Nominee Program. Expert guidance for PNP Entrepreneur streams.",
    keywords: "provincial nominee visa, canada business visa, invest in canada, PNP visa canada, entrepreneur visa canada, migrate zone",
    alternates: {
        canonical: "https://www.migratezone.com/services/provincial-nominee-investor-visa-canada",
    },
    openGraph: {
        type: "article",
        title: "Provincial Nominee Investor Visa – Canada | Migrate Zone",
        description: "Explore your pathway to Canadian PR through investment or business establishment with the Provincial Nominee Program.",
        url: "https://www.migratezone.com/services/provincial-nominee-investor-visa-canada",
        images: [
            {
                url: "/media/services/og-pnp.jpg",
                width: 1200,
                height: 630,
                alt: "Provincial Nominee Investor Visa – Canada",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provincial Nominee Investor Visa – Canada | Migrate Zone",
        description: "Start or invest in a business through a Canadian province to gain PR with the PNP Investor Visa.",
        images: ["/media/services/og-pnp.jpg"],
    },
};

export default function PNPInvestorLayout({ children }) {
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
                                "name": "Canada Migration",
                                "item": "https://www.migratezone.com/canada"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Business Visa",
                                "item": "https://www.migratezone.com/canada/business-visa"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Provincial Nominee Investor Visa",
                                "item": "https://www.migratezone.com/services/provincial-nominee-investor-visa-canada"
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
                                "name": "Do I get PR directly under PNP Entrepreneur Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Most provinces issue a 2-year Work Permit initially. Once business milestones are met, you can apply for PR nomination."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I include my family?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Your spouse and dependent children can accompany you and receive open work/study permits."
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
