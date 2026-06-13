import { NextResponse } from 'next/server';
import { runRecommendationEngine } from '@/utils/recommendEngine';
import { UserInput } from '@/types';

export async function POST(request: Request) {
  try {
    const body: UserInput = await request.json();

    if (!body.zodiac || !body.primaryConcern) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recommendations = runRecommendationEngine(body);
    return NextResponse.json({ success: true, data: recommendations });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}