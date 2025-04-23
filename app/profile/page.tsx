import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Edit, Heart, MessageCircle, Settings, Share2, Users, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
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
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Link href="/profile">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="Profile"
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="relative mb-8">
            <div className="h-48 w-full overflow-hidden rounded-xl bg-muted md:h-64">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                width={1200}
                height={400}
                alt="Cover"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-16 left-4 flex items-end md:left-8">
              <div className="relative h-32 w-32 overflow-hidden rounded-xl border-4 border-background bg-muted">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4 mb-4">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2 md:right-8">
              <Button size="sm" variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <strong>1.2k</strong> followers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <strong>450</strong> following
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <strong>5.2k</strong> likes
                </span>
              </div>
              <div className="ml-auto flex gap-2">
                <Badge variant="outline">Premier League Fan</Badge>
                <Badge variant="outline">Season Ticket Holder</Badge>
                <Badge variant="outline">Supporter Since 2010</Badge>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">About</h2>
              <p className="text-muted-foreground">
                Passionate football supporter. I follow the Premier League closely and never miss a match. Been
                supporting my team through thick and thin since 2010!
              </p>
            </div>
            <Tabs defaultValue="posts">
              <TabsList className="mb-8">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="likes">Likes</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <TabsContent value="posts" className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Avatar"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-base">John Doe</CardTitle>
                          <CardDescription>Posted 2 hours ago</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Just got back from the most amazing match! The atmosphere at the stadium was electric and we
                        scored in the last minute to win! #FootballFever #MatchDay
                      </p>
                      <Image
                        src="/placeholder.svg?height=300&width=600"
                        width={600}
                        height={300}
                        alt="Stadium Photo"
                        className="rounded-lg object-cover"
                      />
                    </CardContent>
                    <CardContent className="border-t pt-4">
                      <div className="flex justify-between">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-4 w-4" /> 124
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageCircle className="h-4 w-4" /> 32
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Share2 className="h-4 w-4" /> Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="media" className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width={200}
                      height={200}
                      alt={`Media ${i}`}
                      className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="likes">
                <div className="grid gap-4 md:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              width={40}
                              height={40}
                              alt="Avatar"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-base">Fan Account {i}</CardTitle>
                            <CardDescription>Posted 3 days ago</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>This is a post that John liked. It contains interesting content about fan activities.</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="events">
                <div className="grid gap-4 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          width={400}
                          height={200}
                          alt={`Event ${i}`}
                          className="aspect-video w-full object-cover"
                        />
                        <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          Attending
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>Derby Match</CardTitle>
                        <CardDescription>July {10 + i}, 2025 • Stadium Event</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          This is an event that John is attending. It will feature special guests and interactive
                          activities.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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
