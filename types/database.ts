export type User = {
  id: string
  name: string | null
  email: string
  emailVerified: Date | null
  image: string | null
  password: string | null
  createdAt: Date
  updatedAt: Date
}

export type Profile = {
  id: string
  bio: string | null
  location: string | null
  joinedDate: Date
  coverImage: string | null
  userId: string
}

export type Team = {
  id: string
  name: string
  shortName: string | null
  logo: string | null
  league: string
  country: string
  stadium: string | null
  founded: number | null
  description: string | null
}

export type Match = {
  id: string
  date: Date
  competition: string
  venue: string
  status: "SCHEDULED" | "LIVE" | "COMPLETED" | "POSTPONED" | "CANCELLED"
  homeTeamId: string
  homeScore: number | null
  awayTeamId: string
  awayScore: number | null
  homeTeam?: Team
  awayTeam?: Team
}

export type Post = {
  id: string
  title: string
  content: string
  image: string | null
  createdAt: Date
  updatedAt: Date
  authorId: string
  matchId: string | null
  author?: User
}

export type Comment = {
  id: string
  content: string
  createdAt: Date
  updatedAt: Date
  authorId: string
  postId: string
  author?: User
}

export type Like = {
  id: string
  createdAt: Date
  userId: string
  postId: string
}

export type TeamFollow = {
  id: string
  createdAt: Date
  userId: string
  teamId: string
}
