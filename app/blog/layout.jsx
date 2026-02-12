export const metadata = {
    title: "Blog | Migrate Zone - Visa & Immigration Insights",
    description: "Stay updated with the latest news, visa policy changes, and immigration guides from Migrate Zone experts.",
    keywords: "migration blog, visa updates, canada immigration news, australia visa guide, uk immigration blog",
    alternates: {
        canonical: "https://www.migratezone.com/blog",
    },
    openGraph: {
        type: "website",
        title: "Blog | Migrate Zone - Visa & Immigration Insights",
        description: "Expert immigration advice and global visa news.",
        url: "https://www.migratezone.com/blog",
        images: [
            {
                url: "/media/og-blog.jpg",
                width: 1200,
                height: 630,
                alt: "Migrate Zone Blog",
            },
        ],
    },
};

export default function BlogLayout({ children }) {
    return (
        <>
            {/* Breadcrumb Structured Data */}
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
                                "name": "Blog",
                                "item": "https://www.migratezone.com/blog"
                            }
                        ]
                    })
                }}
            />
            {children}
        </>
    );
}
