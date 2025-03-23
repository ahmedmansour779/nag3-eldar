import { Metadata } from "next";
import { metadataBlogs } from "../data/meta/metadata";

export const metadata: Metadata = metadataBlogs;

export default function MedicinesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}