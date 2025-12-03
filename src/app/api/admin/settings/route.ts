import { NextRequest, NextResponse } from 'next/server';
import { getPersonaSettings, updatePersonaSetting } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword || password !== adminPassword) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const settings = await getPersonaSettings();
    return NextResponse.json({ settings });
  } catch (error) {
    console.error('Error fetching persona settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch persona settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { password, personaId, schedulingEnabled } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword || password !== adminPassword) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!personaId || typeof schedulingEnabled !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing personaId or schedulingEnabled' },
        { status: 400 }
      );
    }

    await updatePersonaSetting(personaId, schedulingEnabled);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating persona setting:', error);
    return NextResponse.json(
      { error: 'Failed to update persona setting' },
      { status: 500 }
    );
  }
}
