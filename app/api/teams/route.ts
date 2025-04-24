import { type NextRequest, NextResponse } from "next/server"
import { getTeams } from "@/services/team-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const league = searchParams.get("league") || undefined

    const teams = await getTeams(league)

    return NextResponse.json(teams)
  } catch (error) {
    console.error("Error fetching teams:", error)
    return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 })
  }
}
