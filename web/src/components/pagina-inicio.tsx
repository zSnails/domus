"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CardContent, Card } from "@/components/ui/card";
import { ReactElement } from "react";
import { useRouter } from "next/navigation";


export function PaginaInicio() {
    let router = useRouter();

    function gotoDetails() {
        router.push(`/details`);
    }

    function doSearch() {
        let input = document.getElementById("searchInput") as HTMLInputElement;
        let stars = document.getElementById("starRating") as HTMLSelectElement;
        const params = new URLSearchParams();
        params.set("q", input.value);
        params.set("s", stars.value);
        router.replace(`/search?${params.toString()}`);
    }
    return (
        <div>
            <main className="flex-1">
                <section className="bg-gray-100 py-12 md:py-20">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                    Find the Perfect Home Service
                                </h1>
                                <p className="text-gray-600 mb-8">
                                    Browse our directory of trusted service providers and book
                                    your next home project with ease.
                                </p>
                                <div className="flex">
                                    <Input
                                        id="searchInput"
                                        className="w-full px-4 py-3 rounded-md pr-12 grow me-1"
                                        placeholder="Search for services..."
                                    />
                                    <Select
                                        id="starRating">
                                        <option value="0">No rating</option>
                                        <option value="1">⭐ 1</option>
                                        <option value="2">⭐ 2</option>
                                        <option value="3">⭐ 3</option>
                                        <option value="4">⭐ 4</option>
                                        <option value="5">⭐ 5</option>
                                    </Select>
                                    {/*className="right-3 top-1/2 transform -translate-y-1/2"*/}
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={doSearch}
                                    >
                                        <SearchIcon className="w-6 h-6" />
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    alt="Home Services"
                                    className="rounded-lg"
                                    height={400}
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "500/400",
                                        objectFit: "cover",
                                    }}
                                    width={500}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-6 md:px-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            Featured Service Providers
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <Card>
                                <img
                                    alt="Provider"
                                    className="rounded-t-lg object-cover w-full aspect-video"
                                    height={200}
                                    src="/placeholder.svg"
                                    width={300}
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">John's Plumbing</h3>
                                    <p className="text-gray-600 mb-4">
                                        Experienced plumber serving the local community.
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                                        <span className="text-gray-600">4 (200 reviews)</span>
                                    </div>
                                    <Button
                                        className="mt-4 w-full"
                                        variant="outline"
                                        onClick={gotoDetails}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <img
                                    alt="Provider"
                                    className="rounded-t-lg object-cover w-full aspect-video"
                                    height={200}
                                    src="/placeholder.svg"
                                    width={300}
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">
                                        Jane's Cleaning Services
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Reliable and thorough house cleaning.
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                                        <span className="text-gray-600">5 (180 reviews)</span>
                                    </div>
                                    <Button
                                        className="mt-4 w-full"
                                        variant="outline"
                                        onClick={gotoDetails}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <img
                                    alt="Provider"
                                    className="rounded-t-lg object-cover w-full aspect-video"
                                    height={200}
                                    src="/placeholder.svg"
                                    width={300}
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">
                                        Bob's Handyman Services
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Skilled handyman for all your home repairs.
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                                        <span className="text-gray-600">5 (160 reviews)</span>
                                    </div>
                                    <Button
                                        className="mt-4 w-full"
                                        variant="outline"
                                        onClick={gotoDetails}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <img
                                    alt="Provider"
                                    className="rounded-t-lg object-cover w-full aspect-video"
                                    height={200}
                                    src="/placeholder.svg"
                                    width={300}
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">
                                        Sarah's Landscaping
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Lawn care and gardening services.
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                                        <span className="text-gray-600">4 (140 reviews)</span>
                                    </div>
                                    <Button
                                        className="mt-4 w-full"
                                        variant="outline"
                                        onClick={gotoDetails}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-12 md:py-20">
                    <div className="container mx-auto px-6 md:px-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            Browse Services
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <Link
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                href="#"
                            >
                                <div className="p-4">
                                    <PlugIcon className="w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Plumbing</h3>
                                    <p className="text-gray-600">
                                        Experienced plumbers for all your plumbing needs.
                                    </p>
                                </div>
                            </Link>
                            <Link
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                href="#"
                            >
                                <div className="p-4">
                                    <WashingMachineIcon className="w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Cleaning</h3>
                                    <p className="text-gray-600">
                                        Professional house cleaning services.
                                    </p>
                                </div>
                            </Link>
                            <Link
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                href="#"
                            >
                                <div className="p-4">
                                    <HammerIcon className="w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Handyman</h3>
                                    <p className="text-gray-600">
                                        Skilled handymen for home repairs and maintenance.
                                    </p>
                                </div>
                            </Link>
                            <Link
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                href="#"
                            >
                                <div className="p-4">
                                    <GrapeIcon className="w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Landscaping</h3>
                                    <p className="text-gray-600">
                                        Lawn care and gardening services.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <Link className="text-xl font-bold" href="#">
                            Home Services Platform
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-6">
                        <Link className="hover:underline" href="#">
                            About
                        </Link>
                        <Link className="hover:underline" href="#">
                            Contact
                        </Link>
                        <Link className="hover:underline" href="#">
                            Terms
                        </Link>
                        <Link className="hover:underline" href="#">
                            Privacy
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

function GrapeIcon(props: any): ReactElement<any, any> {
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
            <path d="M22 5V2l-5.89 5.89" />
            <circle cx="16.6" cy="15.89" r="3" />
            <circle cx="8.11" cy="7.4" r="3" />
            <circle cx="12.35" cy="11.65" r="3" />
            <circle cx="13.91" cy="5.85" r="3" />
            <circle cx="18.15" cy="10.09" r="3" />
            <circle cx="6.56" cy="13.2" r="3" />
            <circle cx="10.8" cy="17.44" r="3" />
            <circle cx="5" cy="19" r="3" />
        </svg>
    );
}

function HammerIcon(props: any): ReactElement<any, any> {
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
            <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
            <path d="m18 15 4-4" />
            <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
        </svg>
    );
}

function PlugIcon(props: any): ReactElement<any, any> {
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
            <path d="M12 22v-5" />
            <path d="M9 8V2" />
            <path d="M15 8V2" />
            <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
        </svg>
    );
}

function SearchIcon(props: any): ReactElement<any, any> {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

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
    );
}

function WashingMachineIcon(props: any): ReactElement<any, any> {
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
            <path d="M3 6h3" />
            <path d="M17 6h.01" />
            <rect width="18" height="20" x="3" y="2" rx="2" />
            <circle cx="12" cy="13" r="5" />
            <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
        </svg>
    );
}
