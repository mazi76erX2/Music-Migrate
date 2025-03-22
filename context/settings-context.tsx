"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Settings = {
  autoScroll: boolean
  algorithm: number
}

type SettingsContextType = {
  settings: Settings
  updateSettings: (newSettings: Settings) => void
}

const defaultSettings: Settings = {
  autoScroll: true,
  algorithm: 0,
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings)

  useEffect(() => {
    // Load settings from localStorage on mount
    const savedSettings = localStorage.getItem("spotify-ytmusic-settings")
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (e) {
        console.error("Failed to parse settings:", e)
      }
    }
  }, [])

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings)
    localStorage.setItem("spotify-ytmusic-settings", JSON.stringify(newSettings))
  }

  return <SettingsContext.Provider value={{ settings, updateSettings }}>{children}</SettingsContext.Provider>
}

export function useSettingsContext() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettingsContext must be used within a SettingsProvider")
  }
  return context
}

