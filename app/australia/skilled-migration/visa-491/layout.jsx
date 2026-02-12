export const metadata = {
    title: "Skilled Regional (Provisional) Visa – Subclass 491 | Migrate Zone",
    description: "Live, work, and migrate to regional Australia with the Skilled Regional Visa Subclass 491. Learn about the 15-point bonus and pathway to PR after 3 years.",
    keywords: "subclass 491, regional visa australia, migrate to australia, skilled visa, australian permanent residency, 491 visa, Regional Migration Australia",
    alternates: {
        canonical: "https://www.migratezone.com/services/skilled-regional-visa-subclass-491",
    },
    openGraph: {
        type: "article",
        title: "Skilled Regional (Provisional) Visa – Subclass 491 | Migrate Zone",
        description: "Migrate to regional Australia with the Subclass 491 Visa. Your direct pathway to permanent residency after 3 living years in designated areas.",
        url: "https://www.migratezone.com/services/skilled-regional-visa-subclass-491",
        images: [
            {
                url: "/media/services/og-491-visa.jpg",
                width: 1200,
                height: 630,
                alt: "Skilled Regional (Provisional) Visa – Subclass 491",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Skilled Regional (Provisional) Visa – Subclass 491 | Migrate Zone",
        description: "Explore the Skilled Regional Visa Subclass 491, offering a PR pathway through state or family sponsorship. Expert guidance at Migrate Zone.",
        images: ["/media/services/og-491-visa.jpg"],
    },
};

export default function SkilledRegional491Layout({ children }) {
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
                                "name": "Subclass 491 Visa",
                                "item": "https://www.migratezone.com/services/skilled-regional-visa-subclass-491"
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
                                "name": "Is the 491 visa permanent?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No, it’s a 5-year provisional visa, but it leads to PR through Subclass 191 after 3 years of living and working in a regional area."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I move to a city after getting the 491 visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You’re expected to live and work in designated regional areas. Moving to non-regional areas (e.g., Sydney, Melbourne, Brisbane) could affect your PR eligibility."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the benefits of the 491 visa over 189 or 190?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Easier nomination with more flexible criteria, 15 bonus points for sponsorship, and a clear pathway to PR even with lower overall points."
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
