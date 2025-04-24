"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star } from "lucide-react"
import Image from "next/image"
import type { Match } from "@/types/database"
import { format } from "date-fns"

interface MatchesGridProps {
  competition?: string
  upcoming?: boolean
  limit?: number
}

export function MatchesGrid({ competition, upcoming = true, limit }: MatchesGridProps) {
  const [matches, setMatches] = useState<Match[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMatches() {
      try {
        setIsLoading(true)
        let url = `/api/matches?upcoming=${upcoming}`

        if (competition) {
          url += `&competition=${encodeURIComponent(competition)}`
        }

        if (limit) {
          url += `&limit=${limit}`
        }

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Failed to fetch matches")
        }

        const data = await response.json()
        setMatches(data)
      } catch (err) {
        setError("Error loading matches. Please try again.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMatches()
  }, [competition, upcoming, limit])

  if (isLoading) {
    return <div className="text-center py-8">Loading matches...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  if (matches.length === 0) {
    return <div className="text-center py-8">No matches found.</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  )
}

function MatchCard({ match }: { match: Match }) {
  const matchDate = new Date(match.date)
  const formattedDate = format(matchDate, "EEEE, MMM d")
  const formattedTime = format(matchDate, "HH:mm")

  const homeTeam = match.homeTeam || { name: "Unknown Team", logo: null }
  const awayTeam = match.awayTeam || { name: "Unknown Team", logo: null }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline">{match.competition}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3 w-3" /> {formattedDate}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 items-center py-4">
          <div className="text-center">
            <Image
              src={
                homeTeam.logo ||
                `/placeholder.svg?height=60&width=60&text=${encodeURIComponent(homeTeam.name.substring(0, 3))}`
              }
              width={60}
              height={60}
              alt={homeTeam.name}
              className="mx-auto mb-2"
            />
            <h3 className="font-medium text-sm">{homeTeam.name}</h3>
            {match.status === "COMPLETED" && <div className="text-lg font-bold mt-1">{match.homeScore}</div>}
          </div>
          <div className="text-center">
            <div className="text-xl font-bold mb-1">{match.status === "COMPLETED" ? "FT" : "VS"}</div>
            <div className="text-xs text-muted-foreground">{formattedTime}</div>
            <div className="text-xs mt-1 px-2 py-1 rounded-full bg-muted inline-block">{match.status}</div>
          </div>
          <div className="text-center">
            <Image
              src={
                awayTeam.logo ||
                `/placeholder.svg?height=60&width=60&text=${encodeURIComponent(awayTeam.name.substring(0, 3))}`
              }
              width={60}
              height={60}
              alt={awayTeam.name}
              className="mx-auto mb-2"
            />
            <h3 className="font-medium text-sm">{awayTeam.name}</h3>
            {match.status === "COMPLETED" && <div className="text-lg font-bold mt-1">{match.awayScore}</div>}
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground justify-center">
          <MapPin className="h-3 w-3" /> {match.venue}
        </div>
      </CardContent>
      <CardFooter className="border-t p-2">
        <div className="flex w-full justify-between">
          <Button variant="ghost" size="sm" className="gap-1">
            <Star className="h-4 w-4" /> Remind
          </Button>
          <Button variant="ghost" size="sm">
            Match Thread
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
