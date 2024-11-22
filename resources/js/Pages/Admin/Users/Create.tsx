import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import UserForm from "@/Components/UserForm";
import { toast } from "@/hooks/use-toast";

export default function CreateUserPage() {
    const { processing } = useForm();

    const handleSubmit = (data: any) => {
        router.post(route('users.store'), data, {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: "Success created user",
                    description: "User created successfully",
                    duration: 2000,
                });
            },
            onError: (errors) => {
                const errorMessage =
                    errors?.message ||
                    "Failed to create user. Please try again.";
                toast({
                    title: "Error",
                    description: errorMessage,
                    variant: "destructive",
                    duration: 2000,
                });
            },
        });
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create User
                </h2>
            }
        >
            <Head title="Create User" />

            <UserForm onSubmit={handleSubmit} isSubmitting={processing} />
        </AuthenticatedLayout>
    );
}
