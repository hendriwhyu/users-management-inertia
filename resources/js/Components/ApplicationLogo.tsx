import { User } from 'lucide-react';

export default function ApplicationLogo() {
    return (
        <div className="flex aspect-square size-16 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <User className="size-12" />
        </div>
    );
}
