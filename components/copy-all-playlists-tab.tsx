"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLogsContext } from "@/context/logs-context"
import { useSettingsContext } from "@/context/settings-context"
import { Copy, Loader } from "lucide-react"

export default function CopyAllPlaylistsTab() {
  const [isCopying, setIsCopying] = useState(false)
  const { addLog } = useLogsContext()
  const { settings } = useSettingsContext()

  const handleCopy = async () => {
    setIsCopying(true)
    addLog("Starting to copy all playlists from Spotify to YouTube Music...\n")

    try {
      addLog(`Using algorithm: ${settings.algorithm}\n`)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate copying playlists
      const playlists = [
        { name: "Workout Mix", songs: 25 },
        { name: "Chill Vibes", songs: 42 },
        { name: "Road Trip", songs: 18 },
        { name: "Study Focus", songs: 30 },
        { name: "Party Hits", songs: 22 },
      ]

      addLog(`Found ${playlists.length} playlists to copy\n`)

      for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i]
        addLog(`\nCopying playlist ${i + 1}/${playlists.length}: "${playlist.name}"\n`)
        addLog(`Creating playlist on YouTube Music...\n`)
        await new Promise((resolve) => setTimeout(resolve, 800))

        for (let j = 1; j <= playlist.songs; j++) {
          addLog(`Adding song ${j}/${playlist.songs}\n`)
          await new Promise((resolve) => setTimeout(resolve, 100))
        }

        addLog(`Completed copying "${playlist.name}" to YouTube Music\n`)
      }

      addLog("\nAll playlists have been successfully copied to YouTube Music!\n")
    } catch (error) {
      addLog(`Error copying playlists: ${error}\n`)
    } finally {
      setIsCopying(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
        <Copy className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">Copy All Playlists</h2>
        <p className="text-gray-300 mb-6 font-body">
          Transfer all your Spotify playlists to YouTube Music at once. This process may take some time as songs are
          added one by one.
        </p>
      </div>

      <Button
        variant="default"
        size="lg"
        onClick={handleCopy}
        disabled={isCopying}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isCopying ? (
          <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            Copying...
          </>
        ) : (
          <>
            <Copy className="mr-2 h-5 w-5" />
            Copy All Playlists
          </>
        )}
      </Button>
    </div>
  )
}

