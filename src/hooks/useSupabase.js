import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext.jsx';

export const useSupabase = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SiteProvider');
  }
  if (!context.supabase) {
    throw new Error('Supabase client is not available on SiteContext');
  }
  return context.supabase;
};