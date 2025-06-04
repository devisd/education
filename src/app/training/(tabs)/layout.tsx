import React from 'react'
import { TabsNav } from "./TabsNav";

export default function TabsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TabsNav />
            {children}
        </>
    )
}
