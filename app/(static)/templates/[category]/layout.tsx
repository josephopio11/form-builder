import { ReactNode } from 'react'

import { AppSidebar } from '@/components/templates/templates-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

interface LayoutProps {
  children: ReactNode
  params: {
    category: string
  }
}

export default function TemplateLayout({ children, params }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full lg:pl-3">{children}</main>
    </SidebarProvider>
  )
}
