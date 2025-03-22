"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLogsContext } from "@/context/logs-context"
import { useSettingsContext } from "@/context/settings-context"
import { Heart, Loader } from "lucide-react"

export default function LoadLikedSongsTab() {
  const [isLoading, setIsLoading] = useState(false)
  const { addLog } = useLogsContext()
  const { settings } = useSettingsContext()

  const handleLoad = async () => {
    setIsLoading(true)
    addLog("Loading liked songs from Spotify...\n")

    try {
      // Simulate the loading process
      addLog(`Using algorithm: ${settings.algorithm}\n`)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      addLog("Fetching your liked songs from Spotify...\n")
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const totalSongs = Math.floor(Math.random() * 100) + 50
      addLog(`Found ${totalSongs} liked songs\n`)

      let processed = 0
      const batchSize = 10

      while (processed < totalSongs) {
        const current = Math.min(batchSize, totalSongs - processed)
        processed += current
        addLog(`Processed ${processed}/${totalSongs} songs\n`)
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      addLog("All liked songs have been loaded successfully!\n")
    } catch (error) {
      addLog(`Error loading liked songs: ${error}\n`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-red-500 shadow-lg">
        <Heart className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">Load Your Liked Songs</h2>
        <p className="text-gray-300 mb-6 font-body">
          Transfer all your liked songs from Spotify to YouTube Music. This will create a new playlist with all your
          favorites.
        </p>
      </div>

      <Button
        variant="default"
        size="lg"
        onClick={handleLoad}
        disabled={isLoading}
        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isLoading ? (
          <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <Heart className="mr-2 h-5 w-5" />
            Load Liked Songs
          </>
        )}
      </Button>
    </div>
  )
}

