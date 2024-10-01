import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const responseText = 'Soumyadip Moni'
  return new Response(responseText)
}
