import { NextRequest, NextResponse } from 'next/server';
import { saveSurveyResponse, initDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Initialize DB (creates table if not exists)
    await initDb();

    const data = await request.json();

    // Validate required fields
    if (!data.persona || !data.name || !data.responses) {
      return NextResponse.json(
        { error: 'Missing required fields: persona, name, and responses are required' },
        { status: 400 }
      );
    }

    const id = await saveSurveyResponse({
      persona: data.persona,
      name: data.name,
      email: data.email,
      title: data.title,
      company: data.company,
      responses: data.responses,
    });

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error saving survey response:', error);
    return NextResponse.json(
      { error: 'Failed to save survey response' },
      { status: 500 }
    );
  }
}
