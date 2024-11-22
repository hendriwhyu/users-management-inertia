// EditUserPage.tsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { User } from "@/types/user";
import { PageProps } from "@/types";
import UserForm from "@/Components/UserForm";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export default function EditUserPage({ user }: PageProps<{ user: User }>) {
    const { processing } = useForm();

    const handleSubmit = async (data: any) => {

        router.put(`/admin/users/${user.id}`, data, {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "User updated successfully",
                    duration: 2000,
                });

            },
            onError: (errors) => {
                const errorMessage =
                    errors?.message || "Failed to update user. Please try again.";
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
                    Edit User
                </h2>
            }
        >
            <Head title="Edit User" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <UserForm
                        user={user}
                        onSubmit={handleSubmit}
                        isSubmitting={processing}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
