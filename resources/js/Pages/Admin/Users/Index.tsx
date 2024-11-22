import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import { DataTable } from "@/Components/DataTable/Index";
import { User } from "@/types/user";
import { PageProps } from "@/types";
import { columns as userColumns } from "@/Components/DataTable/UserColumn";
import { Button } from "@/Components/ui/button";
import { Plus } from "lucide-react";

export default function UsersPage({ users }: PageProps<{ users: User[] }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle>Table Users</CardTitle>
                                <Link href={route("users.create")}>
                                    <Button>
                                        <Plus />
                                        Create
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={userColumns} data={users} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
