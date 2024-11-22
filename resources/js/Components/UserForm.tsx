// UserForm.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { FormProvider, useForm as useReactHookForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/Components/ui/label";

// Define schema validation using Zod
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().optional(),
});

interface UserFormProps {
    user?: {
        id?: number;
        name: string;
        email: string;
    };
    onSubmit: (data: any) => void;
    isSubmitting?: boolean;
}

export default function UserForm({ user, onSubmit, isSubmitting = false }: UserFormProps) {
    const isEditMode = !!user;

    // Initial form values
    const defaultValues = {
        name: user?.name || "",
        email: user?.email || "",
        password: "", // Optional field
    };

    // Use react-hook-form with Zod validation
    const formMethods = useReactHookForm({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const { register, handleSubmit, formState } = formMethods;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{isEditMode ? 'Edit User' : 'Create User'}</CardTitle>
            </CardHeader>
            <CardContent>
                <FormProvider {...formMethods}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Name Field */}
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                {...register("name")}
                                className={
                                    formState.errors.name ? "border-red-500" : ""
                                }
                            />
                            {formState.errors.name && (
                                <p className="text-sm text-red-500">
                                    {formState.errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                className={
                                    formState.errors.email ? "border-red-500" : ""
                                }
                            />
                            {formState.errors.email && (
                                <p className="text-sm text-red-500">
                                    {formState.errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="password">
                                Password {isEditMode && '(Optional)'}
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                {...register("password")}
                                className={
                                    formState.errors.password ? "border-red-500" : ""
                                }
                            />
                            {formState.errors.password && (
                                <p className="text-sm text-red-500">
                                    {formState.errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : isEditMode ? 'Update User' : 'Create User'}
                        </Button>
                    </form>
                </FormProvider>
            </CardContent>
        </Card>
    );
}
