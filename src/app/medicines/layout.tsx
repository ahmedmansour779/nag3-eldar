import { Metadata } from "next";
import { metadataMedicines } from "../data/meta/metadata";

export const metadata: Metadata = metadataMedicines;

export default function MedicinesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}