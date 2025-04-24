"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"

type Team = {
  id: string
  name: string
  logo: string | null
}

type Match = {
  id: string
  date: string
  competition: string
  venue: string
  status: string
  homeTeam: Team
  awayTeam: Team
  homeScore: number | null
  awayScore: number | null
}

export function MatchesList({ competition, upcoming = true }: { competition?: string; upcoming?: boolean }) {
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
  }, [competition, upcoming])

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
              src={match.homeTeam.logo || "/placeholder.svg?height=60&width=60"}
              width={60}
              height={60}
              alt={match.homeTeam.name}
              className="mx-auto mb-2"
            />
            <h3 className="font-medium text-sm">{match.homeTeam.name}</h3>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold mb-1">VS</div>
            <div className="text-xs text-muted-foreground">{formattedTime}</div>
          </div>
          <div className="text-center">
            <Image
              src={match.awayTeam.logo || "/placeholder.svg?height=60&width=60"}
              width={60}
              height={60}
              alt={match.awayTeam.name}
              className="mx-auto mb-2"
            />
            <h3 className="font-medium text-sm">{match.awayTeam.name}</h3>
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
