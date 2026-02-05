import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative group"
      aria-label="Toggle Theme"
    >
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-violet-500 dark:to-fuchsia-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />

      {/* Button container */}
      <div className="relative px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:border-purple-400 dark:group-hover:border-violet-400">
        <div className="flex items-center gap-2">
          {/* Sun icon for light mode */}
          <Sun className="h-5 w-5 text-amber-500 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 absolute" />

          {/* Moon icon for dark mode */}
          <Moon className="h-5 w-5 text-indigo-400 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />

          {/* Spacer to maintain size */}
          <div className="h-5 w-5 opacity-0">
            <Sun className="h-5 w-5" />
          </div>
        </div>
      </div>
    </button>
  )
}
