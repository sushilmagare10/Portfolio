"use client"

import type { LinkName } from '@/lib/types'
import React, { useState, createContext, useContext } from 'react'


type ActiveLinkContextProviderProps = {
  children: React.ReactNode
}

type ActiveLinkContextType = {
  activeLink: LinkName;
  setActiveLink: React.Dispatch<React.SetStateAction<LinkName>>;
  timeOfLastLink: number;
  setTimeOfLastLink: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveLinkContext = createContext<ActiveLinkContextType | null>(null)

export default function ActiveLinkContextProvider({ children }: ActiveLinkContextProviderProps) {

  const [activeLink, setActiveLink] = useState<LinkName>("Home")
  const [timeOfLastLink, setTimeOfLastLink] = useState(0)


  return (
    <ActiveLinkContext.Provider value={
      {
        activeLink,
        setActiveLink,
        timeOfLastLink,
        setTimeOfLastLink
      }}>
      {children}
    </ActiveLinkContext.Provider>
  )
}

//custom hook

export function useActiveLinkContext() {
  const context = useContext(ActiveLinkContext);

  if (context === null) {
    throw new Error(
      "useActiveLinkContext must be used within an ActiveLinkContextProvider"
    )
  }

  return context
}

