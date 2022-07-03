"use client"
import { ThemeProvider } from "next-themes"
export function Providers({ children }:any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-grey-700 
      dark:text-grey-200 text-grey-700 
      transition-colors duration-300
       select-none">
      {children}
       </div>
    </ThemeProvider>
  )
}

