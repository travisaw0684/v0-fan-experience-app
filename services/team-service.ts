import { query } from "@/lib/db"
import type { Team } from "@/types/database"

export async function getTeams(league?: string): Promise<Team[]> {
  const queryString = `
    SELECT * FROM "Team"
    ${league ? 'WHERE "league" = $1' : ""}
    ORDER BY "name" ASC
  `

  const params = league ? [league] : []
  return await query<Team>(queryString, params)
}

export async function getTeamById(id: string): Promise<Team | null> {
  const teams = await query<Team>('SELECT * FROM "Team" WHERE "id" = $1', [id])
  return teams.length > 0 ? teams[0] : null
}

export async function getTeamsByIds(ids: string[]): Promise<Team[]> {
  if (ids.length === 0) return []

  const placeholders = ids.map((_, i) => `$${i + 1}`).join(",")
  const queryString = `SELECT * FROM "Team" WHERE "id" IN (${placeholders})`

  return await query<Team>(queryString, ids)
}
