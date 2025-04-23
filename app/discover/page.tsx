import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Search, Share2, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DiscoverPage() {
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
              Discover
            </Link>
            <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
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
            <h1 className="text-3xl font-bold mb-4">Matches & News</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search for matches, teams, or players..." className="pl-10 w-full max-w-lg" />
            </div>
          </div>

          <Tabs defaultValue="trending">
            <TabsList className="mb-8">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="premier">Premier League</TabsTrigger>
              <TabsTrigger value="laliga">La Liga</TabsTrigger>
              <TabsTrigger value="bundesliga">Bundesliga</TabsTrigger>
              <TabsTrigger value="champions">Champions League</TabsTrigger>
            </TabsList>

            <TabsContent value="trending">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <ContentCard key={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="music">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ContentCard key={i} category="Music" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sports">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ContentCard key={i} category="Sports" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="entertainment">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ContentCard key={i} category="Entertainment" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gaming">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ContentCard key={i} category="Gaming" />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
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

function ContentCard({ category = "Premier League" }: { category?: string }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src="/placeholder.svg?height=200&width=400"
          width={400}
          height={200}
          alt="Match Content"
          className="aspect-video w-full object-cover"
        />
        <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          {category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">Manchester United vs Liverpool: Match Preview</CardTitle>
        <CardDescription className="line-clamp-2">
          Key players to watch, tactical analysis, and predictions for this weekend's big derby match.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="User"
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">Football Analyst</p>
              <p className="text-xs text-muted-foreground">3 hours ago</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-2">
        <div className="flex w-full justify-between">
          <Button variant="ghost" size="sm" className="gap-1">
            <Heart className="h-4 w-4" /> 324
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageCircle className="h-4 w-4" /> 56
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
