export const metadata = {
    title: "Federal Business Immigration to Canada | Migrate Zone",
    description: "Establish your business in Canada through the Federal Business Immigration Program. expert support for entrepreneurs and startup visas.",
    keywords: "federal business immigration canada, startup visa canada, self-employed person program, business immigration, canada pr for entrepreneurs",
    alternates: {
        canonical: "https://www.migratezone.com/canada/business-visa/federal-business-immigration-canada",
    },
    openGraph: {
        type: "article",
        title: "Federal Business Immigration to Canada | Migrate Zone",
        description: "Your pathway to Canadian Permanent Residency through Federal Business programs. Start your startup or business in Canada with Migrate Zone.",
        url: "https://www.migratezone.com/canada/business-visa/federal-business-immigration-canada",
        images: [
            {
                url: "/media/services/og-canada-business-immigration.jpg",
                width: 1200,
                height: 630,
                alt: "Federal Business Immigration to Canada",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Federal Business Immigration to Canada | Migrate Zone",
        description: "Expert guidance for Canada's Federal Business Immigration. PR pathways for global entrepreneurs and investors.",
        images: ["/media/services/og-canada-business-immigration.jpg"],
    },
};

export default function FederalBusinessImmigrationLayout({ children }) {
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
                                "name": "Federal Business Immigration",
                                "item": "https://www.migratezone.com/canada/business-visa/federal-business-immigration-canada"
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
                                "name": "What is the processing time for Federal Business Immigration?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The processing time typically ranges from 12 to 18 months, depending on the specific program and individual circumstances."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need a business plan for the Federal program?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, a detailed business plan outlining how your venture will contribute to the Canadian economy is a mandatory requirement."
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
