// app/session-wrapper.tsx (or .jsx)
'use client';  // Ensure this is a client component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionWrapperProps {
    children: ReactNode;
}

export default function SessionWrapper({ children }: SessionWrapperProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
