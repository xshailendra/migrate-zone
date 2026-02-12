export const metadata = {
    title: "Canada Business Visa Services | Migrate Zone",
    description: "Grow your business and invest in Canada. Explore Federal Business Immigration and Provincial Nominee Investor Visa pathways with Migrate Zone.",
    keywords: "Canada business visa, invest in Canada, entrepreneur visa Canada, start-up visa Canada, pnp investor visa, business immigration Canada",
    alternates: {
        canonical: "https://www.migratezone.com/canada/business-visa",
    },
    openGraph: {
        type: "article",
        title: "Canada Business Visa Services | Migrate Zone",
        description: "Scale your business in Canada. expert guidance on entrepreneur and investor visa pathways for Canadian Permanent Residency.",
        url: "https://www.migratezone.com/canada/business-visa",
        images: [
            {
                url: "/media/services/og-canada-business-visa.jpg",
                width: 1200,
                height: 630,
                alt: "Canada Business Visa Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canada Business Visa Services | Migrate Zone",
        description: "Invest and grow in Canada. professional support for Federal and Provincial business immigration programs.",
        images: ["/media/services/og-canada-business-visa.jpg"],
    },
};

export default function CanadaBusinessVisaLayout({ children }) {
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
                                "name": "What is the minimum investment required for a Provincial Nominee Investor Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Investment amounts vary by province, but typically range from CAD 150,000 to CAD 1.5 million."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I apply for Permanent Residency on a Business Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, both the Federal Business Immigration Program and Provincial Nominee Investor Visa can lead to Permanent Residency after meeting certain criteria."
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
