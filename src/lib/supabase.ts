import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qylyythlebvudcieidex.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5bHl5dGhsZWJ2dWRjaWVpZGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NTY3MjYsImV4cCI6MjA3MDMzMjcyNn0.ILRM3YBzK9l3S033jC_b56H71y-x7wyIVEl2FJpo1Gk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)