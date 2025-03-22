"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLogsContext } from "@/context/logs-context"
import { LogIn, Youtube } from "lucide-react"

export default function LoginTab() {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const { addLog } = useLogsContext()

  const handleLogin = async () => {
    setIsLoggingIn(true)
    addLog("Attempting to log in to YouTube Music...\n")

    try {
      // In a real implementation, this would call an API endpoint
      // that handles the OAuth flow with YouTube Music
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if oauth file exists (simulated)
      const oauthExists = Math.random() > 0.5

      if (oauthExists) {
        addLog("OAuth file detected, auto login successful\n")
      } else {
        addLog("No OAuth file detected. Please complete the authorization in the popup window.\n")
        // In a real implementation, this would open a popup or redirect to the OAuth flow
        await new Promise((resolve) => setTimeout(resolve, 3000))
        addLog("Authorization completed successfully\n")
      }
    } catch (error) {
      addLog(`Error during login: ${error}\n`)
    } finally {
      setIsLoggingIn(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg">
        <Youtube className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">Welcome to MusicMigrate!</h2>
        <p className="text-gray-300 mb-6 font-body">
          To start transferring your music, you need to login to YouTube Music first.
        </p>
      </div>

      <Button
        variant="default"
        size="lg"
        onClick={handleLogin}
        disabled={isLoggingIn}
        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isLoggingIn ? (
          <>Logging in...</>
        ) : (
          <>
            <LogIn className="mr-2 h-5 w-5" />
            Login to YouTube Music
          </>
        )}
      </Button>
    </div>
  )
}

