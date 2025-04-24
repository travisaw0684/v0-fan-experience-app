"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Star, Users } from "lucide-react"
import Image from "next/image"
import type { Team } from "@/types/database"

interface TeamsGridProps {
  league?: string
}

export function TeamsGrid({ league }: TeamsGridProps) {
  const [teams, setTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeams() {
      try {
        setIsLoading(true)
        const url = league ? `/api/teams?league=${encodeURIComponent(league)}` : "/api/teams"

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Failed to fetch teams")
        }

        const data = await response.json()
        setTeams(data)
      } catch (err) {
        setError("Error loading teams. Please try again.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeams()
  }, [league])

  if (isLoading) {
    return <div className="text-center py-8">Loading teams...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  if (teams.length === 0) {
    return <div className="text-center py-8">No teams found.</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  )
}

function TeamCard({ team }: { team: Team }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={team.logo || `/placeholder.svg?height=150&width=300&text=${encodeURIComponent(team.name)}`}
          width={300}
          height={150}
          alt={team.name}
          className="aspect-video w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{team.name}</CardTitle>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="h-3 w-3" /> {team.stadium || "Stadium information unavailable"}
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>Founded: {team.founded || "Unknown"}</p>
        <p>League: {team.league}</p>
        <p>Country: {team.country}</p>
      </CardContent>
      <CardFooter className="border-t p-2">
        <div className="flex w-full justify-between">
          <Button variant="ghost" size="sm" className="gap-1">
            <Star className="h-4 w-4" /> Follow
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
