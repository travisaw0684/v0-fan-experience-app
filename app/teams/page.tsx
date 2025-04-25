import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Search, Users, Star, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TeamsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FootballFanHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/discover" className="text-sm font-medium transition-colors hover:text-primary">
              Matches
            </Link>
            <Link href="/teams" className="text-sm font-medium transition-colors hover:text-primary">
              Teams
            </Link>
            <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Teams</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search for teams..." className="pl-10 w-full max-w-lg" />
            </div>
          </div>

          <Tabs defaultValue="premier">
            <TabsList className="mb-8">
              <TabsTrigger value="premier">Premier League</TabsTrigger>
              <TabsTrigger value="laliga">La Liga</TabsTrigger>
              <TabsTrigger value="bundesliga">Bundesliga</TabsTrigger>
              <TabsTrigger value="seriea">Serie A</TabsTrigger>
              <TabsTrigger value="ligue1">Ligue 1</TabsTrigger>
            </TabsList>

            <TabsContent value="premier">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {premierLeagueTeams.map((team, i) => (
                  <TeamCard key={i} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="laliga">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {laLigaTeams.map((team, i) => (
                  <TeamCard key={i} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bundesliga">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {bundesligaTeams.map((team, i) => (
                  <TeamCard key={i} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="seriea">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {serieATeams.map((team, i) => (
                  <TeamCard key={i} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ligue1">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {ligue1Teams.map((team, i) => (
                  <TeamCard key={i} team={team} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <section className="mt-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get to know more about one of the most popular teams in the Premier League
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Team Stadium"
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Manchester United</h3>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">
                    <strong>75,000+</strong> fans on FootballFanHub
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Manchester United Football Club is a professional football club based in Old Trafford, Greater
                  Manchester, England. The club competes in the Premier League, the top flight of English football.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Recent Achievements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Premier League Champions (13 times)</li>
                    <li>UEFA Champions League Winners (3 times)</li>
                    <li>FA Cup Winners (12 times)</li>
                    <li>UEFA Europa League Winners (1 time)</li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Button>Follow Team</Button>
                  <Button variant="outline">View Fixtures</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t bg-muted">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FootballFanHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function TeamCard({ team }: { team: { name: string; followers: string } }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src="/placeholder.svg?height=150&width=300"
          width={300}
          height={150}
          alt={team.name}
          className="aspect-video w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{team.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Users className="h-3 w-3" /> {team.followers} followers
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

const premierLeagueTeams = [
  { name: "Manchester United", followers: "2.3M" },
  { name: "Liverpool", followers: "2.1M" },
  { name: "Manchester City", followers: "1.9M" },
  { name: "Chelsea", followers: "1.8M" },
  { name: "Arsenal", followers: "1.7M" },
  { name: "Tottenham Hotspur", followers: "1.5M" },
  { name: "Newcastle United", followers: "1.2M" },
  { name: "Aston Villa", followers: "950K" },
]

const laLigaTeams = [
  { name: "Real Madrid", followers: "2.5M" },
  { name: "Barcelona", followers: "2.4M" },
  { name: "Atletico Madrid", followers: "1.6M" },
  { name: "Sevilla", followers: "980K" },
  { name: "Valencia", followers: "870K" },
  { name: "Real Betis", followers: "750K" },
  { name: "Villarreal", followers: "680K" },
  { name: "Athletic Bilbao", followers: "620K" },
]

const bundesligaTeams = [
  { name: "Bayern Munich", followers: "2.2M" },
  { name: "Borussia Dortmund", followers: "1.9M" },
  { name: "RB Leipzig", followers: "1.1M" },
  { name: "Bayer Leverkusen", followers: "890K" },
  { name: "Borussia Mönchengladbach", followers: "780K" },
  { name: "VfL Wolfsburg", followers: "650K" },
  { name: "Eintracht Frankfurt", followers: "620K" },
  { name: "FC Schalke 04", followers: "580K" },
]

const serieATeams = [
  { name: "Juventus", followers: "1.9M" },
  { name: "AC Milan", followers: "1.8M" },
  { name: "Inter Milan", followers: "1.7M" },
  { name: "AS Roma", followers: "1.3M" },
  { name: "Napoli", followers: "1.1M" },
  { name: "Lazio", followers: "890K" },
  { name: "Atalanta", followers: "720K" },
  { name: "Fiorentina", followers: "650K" },
]

const ligue1Teams = [
  { name: "Paris Saint-Germain", followers: "2.0M" },
  { name: "Olympique Marseille", followers: "1.2M" },
  { name: "Olympique Lyonnais", followers: "1.1M" },
  { name: "AS Monaco", followers: "890K" },
  { name: "LOSC Lille", followers: "720K" },
  { name: "OGC Nice", followers: "580K" },
  { name: "Stade Rennais", followers: "520K" },
  { name: "RC Lens", followers: "480K" },
]
