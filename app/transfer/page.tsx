import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginTab from "@/components/login-tab"
import SpotifyBackupTab from "@/components/spotify-backup-tab"
import LoadLikedSongsTab from "@/components/load-liked-songs-tab"
import ListPlaylistsTab from "@/components/list-playlists-tab"
import CopyAllPlaylistsTab from "@/components/copy-all-playlists-tab"
import CopySpecificPlaylistTab from "@/components/copy-specific-playlist-tab"
import SettingsTab from "@/components/settings-tab"
import LogsPanel from "@/components/logs-panel"
import { ThemeProvider } from "@/components/theme-provider"
import { Music, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TransferPage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="spotify-ytmusic-theme">
      <main className="min-h-screen bg-gradient-to-br from-[#1a1625] via-[#26242f] to-[#1e1e24] text-white p-4">
        <header className="max-w-7xl mx-auto flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-[#1DB954]" />
            <h1 className="text-2xl font-bold font-display">MusicMigrate</h1>
          </div>
          <Link href="/" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </header>

        <div className="flex flex-col h-[calc(100vh-120px)] max-w-7xl mx-auto">
          <div className="flex-grow mb-4">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full justify-start bg-[#121212]/80 overflow-x-auto rounded-t-xl backdrop-blur-sm">
                <TabsTrigger value="login">Login to YT Music</TabsTrigger>
                <TabsTrigger value="backup">Spotify Backup</TabsTrigger>
                <TabsTrigger value="liked">Load Liked Songs</TabsTrigger>
                <TabsTrigger value="list">List Playlists</TabsTrigger>
                <TabsTrigger value="copyAll">Copy All Playlists</TabsTrigger>
                <TabsTrigger value="copySpecific">Copy Specific Playlist</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent
                value="login"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <LoginTab />
              </TabsContent>

              <TabsContent
                value="backup"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <SpotifyBackupTab />
              </TabsContent>

              <TabsContent
                value="liked"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <LoadLikedSongsTab />
              </TabsContent>

              <TabsContent
                value="list"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <ListPlaylistsTab />
              </TabsContent>

              <TabsContent
                value="copyAll"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <CopyAllPlaylistsTab />
              </TabsContent>

              <TabsContent
                value="copySpecific"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <CopySpecificPlaylistTab />
              </TabsContent>

              <TabsContent
                value="settings"
                className="bg-[#26242f]/80 p-6 rounded-b-xl backdrop-blur-sm border border-white/5"
              >
                <SettingsTab />
              </TabsContent>
            </Tabs>
          </div>

          <div className="h-1/3 min-h-[200px]">
            <LogsPanel />
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}

