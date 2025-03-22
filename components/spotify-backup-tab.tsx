"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLogsContext } from "@/context/logs-context"
import { Download, AirplayIcon as Spotify } from "lucide-react"

export default function SpotifyBackupTab() {
  const [isBackingUp, setIsBackingUp] = useState(false)
  const { addLog } = useLogsContext()

  const handleBackup = async () => {
    setIsBackingUp(true)
    addLog("Starting Spotify backup process...\n")

    try {
      // Simulate the backup process
      addLog("Authenticating with Spotify...\n")
      await new Promise((resolve) => setTimeout(resolve, 1000))

      addLog("Fetching your playlists...\n")
      await new Promise((resolve) => setTimeout(resolve, 1500))

      addLog("Found 12 playlists\n")

      for (let i = 1; i <= 12; i++) {
        addLog(`Backing up playlist ${i}/12: "My Playlist ${i}"\n`)
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      addLog("Backup completed successfully!\n")
    } catch (error) {
      addLog(`Error during backup: ${error}\n`)
    } finally {
      setIsBackingUp(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#1DB954] to-[#1DB954]/80 shadow-lg">
        <Spotify className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">Backup Your Spotify Playlists</h2>
        <p className="text-gray-300 mb-6 font-body">
          First, we need to create a backup of all your Spotify playlists before transferring them to YouTube Music.
        </p>
      </div>

      <Button
        variant="default"
        size="lg"
        onClick={handleBackup}
        disabled={isBackingUp}
        className="bg-gradient-to-r from-[#1DB954] to-[#1DB954]/80 hover:from-[#1DB954]/90 hover:to-[#1DB954]/70 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isBackingUp ? (
          <>Backing up...</>
        ) : (
          <>
            <Download className="mr-2 h-5 w-5" />
            Backup Playlists
          </>
        )}
      </Button>
    </div>
  )
}

