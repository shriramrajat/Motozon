import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Car, Users, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-brand-dark text-brand-white flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-gray-800">
          <Link href="/admin" className="font-heading font-bold text-2xl text-brand-primary tracking-tight">
            MOTOZON
          </Link>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Admin Portal</div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/cars" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Car size={20} /> Inventory
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Users size={20} /> Leads
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <form action={async () => {
            "use server"
            const { signOut } = await import("@/auth")
            await signOut()
          }}>
            <button type="submit" className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
              <LogOut size={20} /> Logout
            </button>
          </form>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 shadow-sm flex-shrink-0">
           <h2 className="text-xl font-semibold text-brand-dark font-heading">Admin Dashboard</h2>
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">
               A
             </div>
           </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
