"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type LogsContextType = {
  logs: string[]
  addLog: (log: string) => void
  clearLogs: () => void
}

const LogsContext = createContext<LogsContextType | undefined>(undefined)

export function LogsProvider({ children }: { children: ReactNode }) {
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (log: string) => {
    setLogs((prevLogs) => [...prevLogs, log])
  }

  const clearLogs = () => {
    setLogs([])
  }

  return <LogsContext.Provider value={{ logs, addLog, clearLogs }}>{children}</LogsContext.Provider>
}

export function useLogsContext() {
  const context = useContext(LogsContext)
  if (context === undefined) {
    throw new Error("useLogsContext must be used within a LogsProvider")
  }
  return context
}

