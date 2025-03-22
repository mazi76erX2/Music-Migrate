"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLogsContext } from "@/context/logs-context"
import { ListMusic, Loader } from "lucide-react"

export default function ListPlaylistsTab() {
  const [isListing, setIsListing] = useState(false)
  const { addLog } = useLogsContext()

  const handleList = async () => {
    setIsListing(true)
    addLog("Fetching your playlists...\n")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate listing playlists
      const playlists = [
        { id: "sp_123456", name: "Workout Mix" },
        { id: "sp_234567", name: "Chill Vibes" },
        { id: "sp_345678", name: "Road Trip" },
        { id: "sp_456789", name: "Study Focus" },
        { id: "sp_567890", name: "Party Hits" },
      ]

      addLog("Your playlists:\n")
      playlists.forEach((playlist) => {
        addLog(`ID: ${playlist.id} - Name: ${playlist.name}\n`)
      })

      addLog("\nTotal playlists: " + playlists.length + "\n")
    } catch (error) {
      addLog(`Error listing playlists: ${error}\n`)
    } finally {
      setIsListing(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg">
        <ListMusic className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">List Your Playlists</h2>
        <p className="text-gray-300 mb-6 font-body">
          View a list of all your Spotify playlists with their IDs. This is useful if you want to transfer specific
          playlists.
        </p>
      </div>

      <Button
        variant="default"
        size="lg"
        onClick={handleList}
        disabled={isListing}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isListing ? (
          <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            Listing...
          </>
        ) : (
          <>
            <ListMusic className="mr-2 h-5 w-5" />
            List Playlists
          </>
        )}
      </Button>
    </div>
  )
}

