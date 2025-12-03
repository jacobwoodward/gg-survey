-- Create persona_settings table for controlling scheduling availability per persona
CREATE TABLE IF NOT EXISTS persona_settings (
  id SERIAL PRIMARY KEY,
  persona_id VARCHAR(100) NOT NULL UNIQUE,
  scheduling_enabled BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert default settings for all personas (all enabled by default)
INSERT INTO persona_settings (persona_id, scheduling_enabled) VALUES
  ('student', true),
  ('mentor', true),
  ('employer', true),
  ('program_director', true),
  ('coach', true),
  ('general', true)
ON CONFLICT (persona_id) DO NOTHING;

-- Add persona column to waitlist table to track which persona the user selected
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS persona VARCHAR(100);

-- Update source column to default to 'schedule' instead of 'students'
-- (existing entries will keep their current source value)
