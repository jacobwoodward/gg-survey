import { sql } from '@vercel/postgres';

export interface SurveyResponse {
  id?: number;
  persona: string;
  name: string;
  email?: string;
  title?: string;
  company?: string;
  responses: Record<string, string | string[] | number>;
  created_at?: Date;
}

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS survey_responses (
      id SERIAL PRIMARY KEY,
      persona VARCHAR(100) NOT NULL,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      title VARCHAR(255),
      company VARCHAR(255),
      responses JSONB NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function saveSurveyResponse(data: SurveyResponse): Promise<number> {
  const result = await sql`
    INSERT INTO survey_responses (persona, name, email, title, company, responses)
    VALUES (${data.persona}, ${data.name}, ${data.email || null}, ${data.title || null}, ${data.company || null}, ${JSON.stringify(data.responses)})
    RETURNING id
  `;
  return result.rows[0].id;
}

export async function getSurveyResponses(): Promise<SurveyResponse[]> {
  const result = await sql`
    SELECT * FROM survey_responses ORDER BY created_at DESC
  `;
  return result.rows as SurveyResponse[];
}

// Waitlist functions
export interface WaitlistEntry {
  id?: number;
  name: string;
  email: string;
  source?: string;
  created_at?: Date;
}

export async function saveWaitlistEntry(data: WaitlistEntry): Promise<number> {
  const result = await sql`
    INSERT INTO waitlist (name, email, source)
    VALUES (${data.name}, ${data.email}, ${data.source || 'students'})
    RETURNING id
  `;
  return result.rows[0].id;
}

export async function getWaitlistEntries(): Promise<WaitlistEntry[]> {
  const result = await sql`
    SELECT * FROM waitlist ORDER BY created_at DESC
  `;
  return result.rows as WaitlistEntry[];
}
