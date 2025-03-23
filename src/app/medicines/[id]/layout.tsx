import { metadataMedicinesDetails } from "@/app/data/meta/metadata";
import { Metadata } from "next";

export const metadata: Metadata = metadataMedicinesDetails;

export default function MedicinesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}