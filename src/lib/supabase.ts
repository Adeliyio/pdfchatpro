import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kyfyayyftxzirvteyirh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5ZnlheXlmdHh6aXJ2dGV5aXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxODk3NjQsImV4cCI6MjA0Nzc2NTc2NH0.s-6fUjNn0oBapKqbqD7iW774oDfox81mrgkr_q2ayNs';

export const supabase = createClient(supabaseUrl, supabaseKey);