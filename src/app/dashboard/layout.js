"use client";
import { Home, PlusCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar (Overlay) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <aside className="w-64 bg-gray-900 text-white p-5 flex flex-col gap-4 h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <Link
            href="/dashboard/add-product"
            className="flex items-center gap-2 hover:text-blue-400"
            onClick={() => setSidebarOpen(false)}
          >
            <PlusCircle size={20} /> Add Product
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-400"
            onClick={() => setSidebarOpen(false)}
          >
            <Home size={20} /> Back to Home
          </Link>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-gray-900 text-white p-5 flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <Link
          href="/dashboard/add-product"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <PlusCircle size={20} /> Add Product
        </Link>

        <Link href="/" className="flex items-center gap-2 hover:text-blue-400">
          <Home size={20} /> Back to Home
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden mb-4 flex items-center gap-2 text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} /> Menu
        </button>

        {children}
      </main>
    </div>
  );
}
