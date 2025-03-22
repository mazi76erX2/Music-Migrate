"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLogsContext } from "@/context/logs-context"
import { useSettingsContext } from "@/context/settings-context"
import { Copy, Loader, Music2 } from "lucide-react"

export default function CopySpecificPlaylistTab() {
  const [isCopying, setIsCopying] = useState(false)
  const [spotifyPlaylistId, setSpotifyPlaylistId] = useState("")
  const [ytPlaylistId, setYtPlaylistId] = useState("")
  const { addLog } = useLogsContext()
  const { settings } = useSettingsContext()

  const handleCopy = async () => {
    if (!spotifyPlaylistId) {
      addLog("Error: Spotify playlist ID is required\n")
      return
    }

    setIsCopying(true)
    addLog(`Starting to copy playlist ${spotifyPlaylistId} to YouTube Music...\n`)

    try {
      addLog(`Using algorithm: ${settings.algorithm}\n`)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate fetching playlist details
      addLog("Fetching playlist details from Spotify...\n")
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const playlistName = "My Awesome Playlist"
      const songCount = Math.floor(Math.random() * 30) + 10

      addLog(`Found playlist "${playlistName}" with ${songCount} songs\n`)

      if (ytPlaylistId) {
        addLog(`Using existing YouTube Music playlist ID: ${ytPlaylistId}\n`)
      } else {
        addLog("Creating new playlist on YouTube Music...\n")
        await new Promise((resolve) => setTimeout(resolve, 800))
        const newYtId = "yt_" + Math.random().toString(36).substring(2, 10)
        addLog(`Created new playlist with ID: ${newYtId}\n`)
      }

      for (let i = 1; i <= songCount; i++) {
        addLog(`Adding song ${i}/${songCount}\n`)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      addLog(`\nCompleted copying "${playlistName}" to YouTube Music\n`)
    } catch (error) {
      addLog(`Error copying playlist: ${error}\n`)
    } finally {
      setIsCopying(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
        <Music2 className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">Copy Specific Playlist</h2>
        <p className="text-gray-300 mb-6 font-body">
          Transfer a specific Spotify playlist to YouTube Music by entering its ID. You can optionally specify a
          destination YouTube Music playlist.
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="spotify-id" className="block text-sm font-medium">
            Spotify playlist ID:
          </label>
          <Input
            id="spotify-id"
            value={spotifyPlaylistId}
            onChange={(e) => setSpotifyPlaylistId(e.target.value)}
            placeholder="Enter Spotify playlist ID"
            className="bg-[#121212]/50 border-[#696969] focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="yt-id" className="block text-sm font-medium">
            YT Music playlist ID (optional):
          </label>
          <Input
            id="yt-id"
            value={ytPlaylistId}
            onChange={(e) => setYtPlaylistId(e.target.value)}
            placeholder="Enter YT Music playlist ID (optional)"
            className="bg-[#121212]/50 border-[#696969] focus:border-amber-500 transition-colors"
          />
        </div>

        <Button
          variant="default"
          size="lg"
          onClick={handleCopy}
          disabled={isCopying}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isCopying ? (
            <>
              <Loader className="mr-2 h-5 w-5 animate-spin" />
              Copying...
            </>
          ) : (
            <>
              <Copy className="mr-2 h-5 w-5" />
              Copy Playlist
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

