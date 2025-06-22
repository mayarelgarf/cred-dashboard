"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative w-16 h-16 p-0 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] border-2 border-purple-700/60 shadow-2xl rounded-2xl flex items-center justify-center transition-all hover:scale-105 focus:ring-2 focus:ring-purple-400"
        >
          <Sun className="h-8 w-8 scale-100 rotate-0 transition-all text-yellow-300 dark:scale-0 dark:-rotate-90 drop-shadow-lg" />
          <Moon className="absolute h-8 w-8 scale-0 rotate-90 transition-all text-purple-300 dark:scale-100 dark:rotate-0 drop-shadow-lg" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] border-2 border-purple-700/60 shadow-xl rounded-xl text-white">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-purple-600/30 focus:bg-purple-600/40 cursor-pointer">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-purple-600/30 focus:bg-purple-600/40 cursor-pointer">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-purple-600/30 focus:bg-purple-600/40 cursor-pointer">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
