import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MatchesGrid } from "@/components/matches-grid"

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
            <Link href="/matches" className="text-sm font-medium transition-colors hover:text-primary">
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
              <TabsTrigger value="premier">Premier League</TabsTrigger>
              <TabsTrigger value="champions">Champions League</TabsTrigger>
              <TabsTrigger value="laliga">La Liga</TabsTrigger>
              <TabsTrigger value="bundesliga">Bundesliga</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <MatchesGrid upcoming={true} />
            </TabsContent>

            <TabsContent value="premier">
              <MatchesGrid competition="Premier League" upcoming={true} />
            </TabsContent>

            <TabsContent value="champions">
              <MatchesGrid competition="Champions League" upcoming={true} />
            </TabsContent>

            <TabsContent value="laliga">
              <MatchesGrid competition="La Liga" upcoming={true} />
            </TabsContent>

            <TabsContent value="bundesliga">
              <MatchesGrid competition="Bundesliga" upcoming={true} />
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
