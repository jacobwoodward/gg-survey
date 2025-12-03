import { NextResponse } from 'next/server';
import { getPersonaSettings } from '@/lib/db';

export async function GET() {
  try {
    const settings = await getPersonaSettings();
    // Convert to a simple object for easier client-side use
    const settingsMap: Record<string, boolean> = {};
    for (const setting of settings) {
      settingsMap[setting.persona_id] = setting.scheduling_enabled;
    }
    return NextResponse.json({ settings: settingsMap });
  } catch (error) {
    console.error('Error fetching schedule settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedule settings' },
      { status: 500 }
    );
  }
}
