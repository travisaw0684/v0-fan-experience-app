"use client"

import { useEffect, useState } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Star, Users } from "lucide-react"
import Image from "next/image"

type Team = {
  id: string
  name: string
  shortName: string | null
  logo: string | null
  league: string
  country: string
  stadium: string | null
  founded: number | null
}

export function TeamsList({ league }: { league: string }) {
  const [teams, setTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeams() {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/teams?league=${encodeURIComponent(league)}`)

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
    return <div className="text-center py-8">No teams found for this league.</div>
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
          src={team.logo || "/placeholder.svg?height=150&width=300"}
          width={300}
          height={150}
          alt={team.name}
          className="aspect-video w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{team.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Users className="h-3 w-3" /> {team.stadium || "Stadium information unavailable"}
        </CardDescription>
      </CardHeader>
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
