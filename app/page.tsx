import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, TrendingUp, Users, Trophy } from "lucide-react"
import Image from "next/image"

export default function Home() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect with football fans worldwide
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our community of passionate football supporters. Get match updates, interact with other fans,
                    and stay connected to your favorite teams and players.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="w-full">
                      Join Now
                    </Button>
                  </Link>
                  <Link href="/discover">
                    <Button size="lg" variant="outline" className="w-full">
                      Explore Content
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                What's Trending
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Right Now</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Discover what other fans are talking about and join the conversation.
              </p>
            </div>
          </div>
          <Tabs defaultValue="all" className="mt-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="premier">Premier League</TabsTrigger>
                <TabsTrigger value="laliga">La Liga</TabsTrigger>
                <TabsTrigger value="champions">Champions League</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ContentCard key={i} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="music" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <ContentCard key={i} category="Music" />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sports" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <ContentCard key={i} category="Sports" />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="entertainment" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <ContentCard key={i} category="Entertainment" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't miss out on these exciting events happening soon.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Event Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Featured Event
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Champions League Final</h3>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    Join us for the biggest match of the year. Watch the game with other fans, participate in pre-match
                    discussions, and celebrate with the community.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">July 15-17, 2025</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Over 50,000 attendees expected</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/events/summer-festival">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="w-full">
                      View All Events
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Connect with other fans, share your experiences, and be part of something special.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Match Analysis</CardTitle>
                <CardDescription>Get expert analysis on recent matches and upcoming fixtures.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Exclusive Content"
                  className="aspect-video rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Explore</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fan Forums</CardTitle>
                <CardDescription>Discuss tactics, transfers, and team news with other supporters.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Fan Forums"
                  className="aspect-video rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Discussions</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Watch Parties</CardTitle>
                <CardDescription>Join virtual and in-person events to watch matches together.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Virtual Meetups"
                  className="aspect-video rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">See Schedule</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FootballFanHub</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
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
          alt="Content"
          className="aspect-video w-full object-cover"
        />
        <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          {category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">Amazing New Content Title</CardTitle>
        <CardDescription className="line-clamp-2">
          This is a brief description of the content. It provides context and entices users to click.
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
              <p className="font-medium">User Name</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-2">
        <div className="flex w-full justify-between">
          <Button variant="ghost" size="sm" className="gap-1">
            <Heart className="h-4 w-4" /> 245
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageCircle className="h-4 w-4" /> 45
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
