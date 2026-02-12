export const metadata = {
    title: "Skilled Nominated Visa – Subclass 190 | Migrate Zone",
    description: "Secure Australian Permanent Residency with state sponsorship under the Subclass 190 Visa. Learn about nomination criteria, points, and priority processing.",
    keywords: "skilled nominated visa, subclass 190, Australia PR, state sponsorship, immigration to Australia, points-based visa, Skilled Migration Australia",
    alternates: {
        canonical: "https://www.migratezone.com/services/skilled-nominated-visa-subclass-190",
    },
    openGraph: {
        type: "article",
        title: "Skilled Nominated Visa – Subclass 190 | Migrate Zone",
        description: "Migrate to Australia with state sponsorship via the Skilled Nominated Visa (Subclass 190). Immediate permanent residency for skilled workers.",
        url: "https://www.migratezone.com/services/skilled-nominated-visa-subclass-190",
        images: [
            {
                url: "/media/services/og-190.jpg",
                width: 1200,
                height: 630,
                alt: "Skilled Nominated Visa – Subclass 190",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Skilled Nominated Visa – Subclass 190 | Migrate Zone",
        description: "Apply for the Skilled Nominated Visa Subclass 190. Get state support for your Australian Permanent Residency. Learn more at Migrate Zone.",
        images: ["/media/services/og-190.jpg"],
    },
};

export default function SkilledNominated190Layout({ children }) {
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
                                "name": "Subclass 190 Visa",
                                "item": "https://www.migratezone.com/services/skilled-nominated-visa-subclass-190"
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
                                "name": "Is the 190 visa a permanent visa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, the 190 visa grants immediate permanent residency in Australia."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What’s the benefit of state nomination?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You receive 5 additional points for your EOI and priority processing from the Department of Home Affairs."
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
