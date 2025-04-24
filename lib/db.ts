import { neon } from "@neondatabase/serverless"

// Create a SQL client with the connection string from environment variables
export const sql = neon(process.env.DATABASE_URL!)

// Helper function to execute a query and return the results
export async function query<T>(queryString: string, params: any[] = []): Promise<T[]> {
  try {
    const result = await sql(queryString, params)
    return result as T[]
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}
