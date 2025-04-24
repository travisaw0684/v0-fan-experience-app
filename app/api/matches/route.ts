import { type NextRequest, NextResponse } from "next/server"
import { getMatches } from "@/services/match-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const competition = searchParams.get("competition") || undefined
    const upcoming = searchParams.get("upcoming") === "true"
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined

    const matches = await getMatches({ competition, upcoming, limit })

    return NextResponse.json(matches)
  } catch (error) {
    console.error("Error fetching matches:", error)
    return NextResponse.json({ error: "Failed to fetch matches" }, { status: 500 })
  }
}
