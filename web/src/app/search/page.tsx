"use client";
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { ReactElement } from "react"

function StarIcon(props: any): ReactElement<any, any> {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}

const providers = [
    {
        name: "John's Plumbing",
        description: "Experienced plumber serving the local community.",
        reviews: "4 (200 reviews)",
    },
    {
        name: "Sarah's Landscaping",
        description: "Lawn care and gardening services.",
        reviews: "5 (140 reviews)",
    },
    {
        name: "Bob's Handyman Services",
        description: "Skilled handyman for all your home repairs.",
        reviews: "4 (160 reviews)",
    },
    {
        name: "Jane's Cleaning Services",
        description: "Reliable and thorough house cleaning.",
        reviews: "5 (180 reviews)",
    }
];

export default function Page() {
    const searchParams = useSearchParams();
    let query = searchParams.get("q");
    const filtered = providers.filter(p => p.name.toLowerCase().includes(query?.toLowerCase() ?? ""));

    const router = useRouter();

    function gotoDetails() {
        router.push("/details");
    }

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Search Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        filtered.map(provider => (
                            <Card key={provider.name}>
                                <img
                                    alt="Provider"
                                    className="rounded-t-lg object-cover w-full aspect-video"
                                    height={200}
                                    src="/placeholder.svg"
                                    width={300}
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                                    <p className="text-gray-600 mb-4">{provider.description}</p>
                                    <div className="flex items-center space-x-2">
                                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                                        <span className="text-gray-600">{provider.reviews}</span>
                                    </div>
                                    <Button className="mt-4 w-full" variant="outline" onClick={gotoDetails}>
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
