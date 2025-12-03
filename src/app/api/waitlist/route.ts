import { NextRequest, NextResponse } from 'next/server';
import { saveWaitlistEntry } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { name, email, source } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const id = await saveWaitlistEntry({ name, email, source });
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error saving waitlist entry:', error);
    return NextResponse.json(
      { error: 'Failed to save waitlist entry' },
      { status: 500 }
    );
  }
}
