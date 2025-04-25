import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Clock, MapPin, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MatchesPage() {
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
            <h1 className="text-3xl font-bold mb-4">Upcoming Matches</h1>
            <p className="text-muted-foreground">Find the latest fixtures and join match discussions with other fans</p>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Matches</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
              <TabsTrigger value="weekend">This Weekend</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {matches.map((match, i) => (
                  <MatchCard key={i} match={match} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="today">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {matches.slice(0, 3).map((match, i) => (
                  <MatchCard key={i} match={{ ...match, date: "Today" }} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tomorrow">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {matches.slice(3, 6).map((match, i) => (
                  <MatchCard key={i} match={{ ...match, date: "Tomorrow" }} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="weekend">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {matches.slice(6, 9).map((match, i) => (
                  <MatchCard key={i} match={{ ...match, date: "Saturday, Jul 15" }} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="week">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {matches.map((match, i) => (
                  <MatchCard key={i} match={match} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <section className="mt-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Match</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">Don't miss this week's biggest fixture</p>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=1200"
                  width={1200}
                  height={300}
                  alt="Featured Match"
                  className="w-full object-cover h-48 md:h-64"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-primary text-primary-foreground">Champions League</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      width={80}
                      height={80}
                      alt="Home Team"
                      className="mx-auto mb-2"
                    />
                    <h3 className="font-bold">Real Madrid</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">VS</div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="h-4 w-4" /> Tuesday, Jul 18
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="h-4 w-4" /> 20:00 GMT
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <MapPin className="h-4 w-4" /> Santiago Bernabéu
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      width={80}
                      height={80}
                      alt="Away Team"
                      className="mx-auto mb-2"
                    />
                    <h3 className="font-bold">Bayern Munich</h3>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4 flex justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5.2K fans attending</span>
                </div>
                <div className="flex gap-2">
                  <Button>Join Watch Party</Button>
                  <Button variant="outline">Match Details</Button>
                </div>
              </CardFooter>
            </Card>
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

function MatchCard({
  match,
}: {
  match: {
    homeTeam: string
    awayTeam: string
    competition: string
    date: string
    time: string
    venue: string
  }
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline">{match.competition}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3 w-3" /> {match.date}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 items-center py-4">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=60&width=60"
              width={60}
              height={60}
              alt={match.homeTeam}
              className="mx-auto mb-2"
            />
            <h3 className="font-medium text-sm">{match.homeTeam}</h3>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold mb-1">VS</div>
            <div className="text-xs text-muted-foreground">{match.time}</div>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=60&width=60"
              width={60}
              height={60}
              alt={match.awayTeam}
              className="mx-auto mb-2"
            />
            <h3 className="font-medium text-sm">{match.awayTeam}</h3>
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

const matches = [
  {
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    competition: "Premier League",
    date: "Tuesday, Jul 11",
    time: "15:00 GMT",
    venue: "Old Trafford",
  },
  {
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    competition: "Premier League",
    date: "Tuesday, Jul 11",
    time: "17:30 GMT",
    venue: "Emirates Stadium",
  },
  {
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    competition: "La Liga",
    date: "Tuesday, Jul 11",
    time: "20:00 GMT",
    venue: "Camp Nou",
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Tottenham",
    competition: "Premier League",
    date: "Wednesday, Jul 12",
    time: "15:00 GMT",
    venue: "Etihad Stadium",
  },
  {
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    competition: "Serie A",
    date: "Wednesday, Jul 12",
    time: "17:30 GMT",
    venue: "Allianz Stadium",
  },
  {
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    competition: "Bundesliga",
    date: "Wednesday, Jul 12",
    time: "19:45 GMT",
    venue: "Allianz Arena",
  },
  {
    homeTeam: "PSG",
    awayTeam: "Marseille",
    competition: "Ligue 1",
    date: "Saturday, Jul 15",
    time: "16:00 GMT",
    venue: "Parc des Princes",
  },
  {
    homeTeam: "Atletico Madrid",
    awayTeam: "Sevilla",
    competition: "La Liga",
    date: "Saturday, Jul 15",
    time: "18:15 GMT",
    venue: "Wanda Metropolitano",
  },
  {
    homeTeam: "Inter Milan",
    awayTeam: "Napoli",
    competition: "Serie A",
    date: "Saturday, Jul 15",
    time: "20:45 GMT",
    venue: "San Siro",
  },
]
