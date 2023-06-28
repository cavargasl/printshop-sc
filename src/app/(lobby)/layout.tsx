import SiteHeader from "@/components/layouts/SiteHeader"

interface LobbyLayoutProps {
  children: React.ReactNode
}

export default function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  )
}