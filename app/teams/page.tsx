import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TeamsGrid } from "@/components/teams-grid"

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
              <TeamsGrid league="Premier League" />
            </TabsContent>

            <TabsContent value="laliga">
              <TeamsGrid league="La Liga" />
            </TabsContent>

            <TabsContent value="bundesliga">
              <TeamsGrid league="Bundesliga" />
            </TabsContent>

            <TabsContent value="seriea">
              <TeamsGrid league="Serie A" />
            </TabsContent>

            <TabsContent value="ligue1">
              <TeamsGrid league="Ligue 1" />
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
