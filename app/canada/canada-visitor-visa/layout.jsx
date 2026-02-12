export const metadata = {
    title: "Canada Visitor Visa | Migrate Zone",
    description: "Explore Canada with a Visitor Visa. Apply for a TRV and visit Canada for tourism, business, or family purposes. Expert guidance from Migrate Zone.",
    keywords: "canada visitor visa, canada trv, tourism visa, business visa canada, canada family visit visa, canada visa india, migrate zone",
    alternates: {
        canonical: "https://www.migratezone.com/services/canada-visitor-visa",
    },
    openGraph: {
        type: "article",
        title: "Canada Visitor Visa | Migrate Zone",
        description: "Plan your visit to Canada with ease. Apply for your Canada Visitor Visa today with Migrate Zone.",
        url: "https://www.migratezone.com/services/canada-visitor-visa",
        images: [
            {
                url: "/media/services/og-canada-visa.jpg",
                width: 1200,
                height: 630,
                alt: "Canada Visitor Visa",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canada Visitor Visa | Migrate Zone",
        description: "Explore Canada with a Visitor Visa, for business, tourism, or visiting family. Start your application today.",
        images: ["/media/services/og-canada-visa.jpg"],
    },
};

export default function CanadaVisitorVisaLayout({ children }) {
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
                                "name": "Visitor Visa",
                                "item": "https://www.migratezone.com/services/canada-visitor-visa"
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
                                "name": "How long is a Canada Visitor Visa valid for?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A Canada Visitor Visa is typically valid for up to 6 months per visit, but it can vary depending on the case and the applicant’s circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I work while on a Visitor Visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, a Visitor Visa does not allow you to work in Canada. If you want to work while in Canada, you must apply for a work permit."
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
