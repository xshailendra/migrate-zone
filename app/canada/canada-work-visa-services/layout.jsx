export const metadata = {
    title: "Canada Work Visa Services | Migrate Zone",
    description: "Get hired and work legally in Canada. Expert guidance on Employer-Specific (LMIA) and Open Work Permits with Migrate Zone.",
    keywords: "canada work visa, canada work permit, lmia canada, open work permit, temporary foreign worker program, global talent stream",
    alternates: {
        canonical: "https://www.migratezone.com/services/canada-work-visa-services",
    },
    openGraph: {
        type: "article",
        title: "Canada Work Visa Services | Migrate Zone",
        description: "Scale your career in Canada. Comprehensive support for closed and open work permits, LMIA, and PR pathways.",
        url: "https://www.migratezone.com/services/canada-work-visa-services",
        images: [
            {
                url: "/media/services/og-canada-work-visa.jpg",
                width: 1200,
                height: 630,
                alt: "Canada Work Visa Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canada Work Visa Services | Migrate Zone",
        description: "Join the Canadian workforce. Professional assistance for all Canadian work permit categories.",
        images: ["/media/services/og-canada-work-visa.jpg"],
    },
};

export default function CanadaWorkVisaLayout({ children }) {
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
                                "name": "Work Visa",
                                "item": "https://www.migratezone.com/services/canada-work-visa-services"
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
                                "name": "Can I get a work visa without a job offer?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Generally, no. Most work visas require a valid job offer, but Open Work Permits are available in special cases like spouses of skilled workers or international graduates."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is an LMIA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A Labour Market Impact Assessment is a document proving a foreign worker is needed for a job that can't be filled by a Canadian citizen or permanent resident."
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
