import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Create demo user
  const password = await hash("password123", 10)
  const user = await prisma.user.upsert({
    where: { email: "demo@footballfanhub.com" },
    update: {},
    create: {
      email: "demo@footballfanhub.com",
      name: "John Doe",
      password,
      profile: {
        create: {
          bio: "Passionate football supporter. I follow the Premier League closely and never miss a match.",
          location: "Manchester, UK",
        },
      },
    },
  })

  // Create teams
  const premierLeagueTeams = [
    {
      name: "Manchester United",
      shortName: "MUN",
      league: "Premier League",
      country: "England",
      stadium: "Old Trafford",
      founded: 1878,
    },
    {
      name: "Liverpool",
      shortName: "LIV",
      league: "Premier League",
      country: "England",
      stadium: "Anfield",
      founded: 1892,
    },
    {
      name: "Manchester City",
      shortName: "MCI",
      league: "Premier League",
      country: "England",
      stadium: "Etihad Stadium",
      founded: 1880,
    },
    {
      name: "Chelsea",
      shortName: "CHE",
      league: "Premier League",
      country: "England",
      stadium: "Stamford Bridge",
      founded: 1905,
    },
    {
      name: "Arsenal",
      shortName: "ARS",
      league: "Premier League",
      country: "England",
      stadium: "Emirates Stadium",
      founded: 1886,
    },
  ]

  for (const team of premierLeagueTeams) {
    await prisma.team.upsert({
      where: { name: team.name },
      update: {},
      create: team,
    })
  }

  // Get teams for creating matches
  const manUtd = await prisma.team.findUnique({ where: { name: "Manchester United" } })
  const liverpool = await prisma.team.findUnique({ where: { name: "Liverpool" } })
  const manCity = await prisma.team.findUnique({ where: { name: "Manchester City" } })
  const chelsea = await prisma.team.findUnique({ where: { name: "Chelsea" } })
  const arsenal = await prisma.team.findUnique({ where: { name: "Arsenal" } })

  if (manUtd && liverpool && manCity && chelsea && arsenal) {
    // Create matches
    const matches = [
      {
        homeTeamId: manUtd.id,
        awayTeamId: liverpool.id,
        date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        competition: "Premier League",
        venue: "Old Trafford",
      },
      {
        homeTeamId: arsenal.id,
        awayTeamId: chelsea.id,
        date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        competition: "Premier League",
        venue: "Emirates Stadium",
      },
      {
        homeTeamId: manCity.id,
        awayTeamId: manUtd.id,
        date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
        competition: "Premier League",
        venue: "Etihad Stadium",
      },
    ]

    for (const match of matches) {
      await prisma.match.create({
        data: match,
      })
    }

    // Create some posts
    await prisma.post.create({
      data: {
        title: "Thoughts on the upcoming Manchester Derby",
        content: "This is going to be an exciting match! What are your predictions?",
        authorId: user.id,
        match: {
          connect: {
            id: (
              await prisma.match.findFirst({
                where: {
                  homeTeamId: manCity.id,
                  awayTeamId: manUtd.id,
                },
              })
            )?.id,
          },
        },
      },
    })
  }

  console.log("Database has been seeded!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
