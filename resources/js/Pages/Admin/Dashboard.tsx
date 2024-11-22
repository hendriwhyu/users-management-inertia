import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import { DataTable } from "@/Components/DataTable/Index";
import { User } from "@/types/user";
import { PageProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export default function Dashboard({ users }: PageProps<{ users: User[] }>) {
    const { auth } = usePage().props;

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 grid lg:grid-cols-2 gap-4">
                <div className="mx-auto max-w-7xl px-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                                Pengenalan Aplikasi Manajemen Pengguna
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                Selamat datang {auth.user.name} di aplikasi
                                manajemen pengguna kami! Aplikasi ini dirancang
                                untuk memudahkan Anda dalam mengelola pengguna
                                di dalam sistem.
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Kelola pengguna dengan mudah</li>
                                <li>Antarmuka yang intuitif</li>
                                <li>Integrasi yang kuat dengan backend</li>
                            </ul>
                            <p>
                                Bergabunglah dengan kami dan tingkatkan
                                efisiensi manajemen pengguna Anda!
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="max-w-7xl px-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                                Recently Users
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns} data={users} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
