import { query } from "@/lib/db"
import type { Match, Team } from "@/types/database"
import { getTeamsByIds } from "./team-service"

export async function getMatches(options: {
  competition?: string
  upcoming?: boolean
  limit?: number
}): Promise<Match[]> {
  const { competition, upcoming, limit } = options

  const conditions = []
  const params: any[] = []
  let paramIndex = 1

  if (competition) {
    conditions.push(`"competition" = $${paramIndex++}`)
    params.push(competition)
  }

  if (upcoming) {
    conditions.push(`"date" >= NOW()`)
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""
  const limitClause = limit ? `LIMIT ${limit}` : ""

  const queryString = `
    SELECT * FROM "Match"
    ${whereClause}
    ORDER BY "date" ASC
    ${limitClause}
  `

  const matches = await query<Match>(queryString, params)

  // Get all team IDs from matches
  const teamIds = new Set<string>()
  matches.forEach((match) => {
    teamIds.add(match.homeTeamId)
    teamIds.add(match.awayTeamId)
  })

  // Fetch all teams in one query
  const teams = await getTeamsByIds(Array.from(teamIds))
  const teamsMap = new Map<string, Team>()
  teams.forEach((team) => teamsMap.set(team.id, team))

  // Add team objects to matches
  return matches.map((match) => ({
    ...match,
    homeTeam: teamsMap.get(match.homeTeamId),
    awayTeam: teamsMap.get(match.awayTeamId),
  }))
}

export async function getMatchById(id: string): Promise<Match | null> {
  const matches = await query<Match>('SELECT * FROM "Match" WHERE "id" = $1', [id])

  if (matches.length === 0) return null

  const match = matches[0]
  const teams = await getTeamsByIds([match.homeTeamId, match.awayTeamId])

  return {
    ...match,
    homeTeam: teams.find((team) => team.id === match.homeTeamId),
    awayTeam: teams.find((team) => team.id === match.awayTeamId),
  }
}
