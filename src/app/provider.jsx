"use client";

import NextAuthProviders from "@/Providers/NextAuthProviders";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <NextAuthProviders>
      {children}
      {/* <Toaster position="top-left" reverseOrder={false} /> */}
    </NextAuthProviders>
  );
}
