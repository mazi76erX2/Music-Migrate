"use client"

import { useRef, useEffect } from "react"
import { useLogsContext } from "@/context/logs-context"
import { useSettingsContext } from "@/context/settings-context"
import { Terminal } from "lucide-react"

export default function LogsPanel() {
  const { logs } = useLogsContext()
  const { settings } = useSettingsContext()
  const logsEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (settings.autoScroll && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [settings.autoScroll])

  return (
    <div className="h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#1a1625]/80 backdrop-blur-sm shadow-lg">
      <div className="p-2 border-b border-white/10 bg-[#121212]/80 flex items-center">
        <Terminal className="h-4 w-4 mr-2 text-[#1DB954]" />
        <h3 className="text-sm font-medium font-display">Console Output</h3>
      </div>
      <div className="h-[calc(100%-36px)] overflow-auto p-4 font-mono text-sm">
        {logs.length === 0 ? (
          <div className="text-gray-500 italic">No logs yet. Actions will be displayed here.</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {log}
            </div>
          ))
        )}
        <div ref={logsEndRef} />
      </div>
    </div>
  )
}

