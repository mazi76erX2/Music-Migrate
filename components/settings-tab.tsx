"use client"

import { useSettingsContext } from "@/context/settings-context"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Sliders } from "lucide-react"

export default function SettingsTab() {
  const { settings, updateSettings } = useSettingsContext()

  const algorithmOptions = [
    { value: "0", label: "Exact match" },
    { value: "1", label: "Fuzzy match" },
    { value: "2", label: "Fuzzy match with videos" },
  ]

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 shadow-lg">
        <Sliders className="h-10 w-10" />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-3 font-display">Settings</h2>
        <p className="text-gray-300 mb-6 font-body">
          Customize your experience with these settings. Changes are saved automatically.
        </p>
      </div>

      <div className="w-full max-w-md space-y-6 bg-[#1a1625]/50 p-6 rounded-xl border border-white/10">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
          <Checkbox
            id="auto-scroll"
            checked={settings.autoScroll}
            onCheckedChange={(checked) => updateSettings({ ...settings, autoScroll: !!checked })}
            className="border-gray-500 data-[state=checked]:bg-[#1DB954] data-[state=checked]:border-[#1DB954]"
          />
          <Label htmlFor="auto-scroll" className="text-base cursor-pointer">
            Auto scroll logs
          </Label>
        </div>

        <div className="space-y-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
          <Label htmlFor="algorithm" className="text-base flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Algorithm: {algorithmOptions.find((opt) => opt.value === settings.algorithm.toString())?.label}
          </Label>
          <Select
            value={settings.algorithm.toString()}
            onValueChange={(value) => updateSettings({ ...settings, algorithm: Number.parseInt(value) })}
          >
            <SelectTrigger
              id="algorithm"
              className="bg-[#121212]/50 border-[#696969] focus:border-[#1DB954] transition-colors"
            >
              <SelectValue placeholder="Select algorithm" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1625] border-[#696969]">
              {algorithmOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="focus:bg-[#1DB954]/20">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

