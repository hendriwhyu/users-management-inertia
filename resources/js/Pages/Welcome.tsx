import { Head, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">
                            SIMUS
                        </h1>
                        <nav>
                            <ul className="flex space-x-4">
                                <Link href={route("register")}>
                                    <Button variant="outline">Register</Button>
                                </Link>
                                <Link href={route("login")}>
                                    <Button>Login</Button>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        Simplify User Management
                    </h2>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Effortlessly manage your users, roles, and permissions
                        with our intuitive user management solution.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <Button size="lg" className="w-full sm:w-auto">
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto"
                        >
                            Learn More
                        </Button>
                    </div>
                </section>

                {/* Features Section */}
                <section
                    id="features"
                    className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
                >
                    <h3 className="text-3xl font-bold text-center mb-8">
                        Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "User Management",
                                description:
                                    "Easily add, edit, and remove users from your system.",
                            },
                            {
                                title: "Role-Based Access",
                                description:
                                    "Define and assign roles with specific permissions.",
                            },
                            {
                                title: "Audit Logs",
                                description:
                                    "Track all user activities for enhanced security.",
                            },
                        ].map((feature, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white absolute bottom-0 w-full">
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-semibold">SIMUS</h4>
                            <p className="text-sm">
                                Simplifying user management since 2023
                            </p>
                        </div>
                        <nav>
                            <ul className="flex flex-wrap justify-center space-x-4">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    );
}
