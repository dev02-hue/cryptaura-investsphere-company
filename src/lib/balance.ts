import { ProfileData } from "@/types/businesses";
import { getSession } from "./auth";
import { supabase } from "./supabaseClient";
import { redirect } from "next/navigation";

export async function getTotalDeposit(): Promise<number> {
    try {
      console.log('[getTotalDeposit] Getting user session...');
      const session = await getSession();
  
      if (!session?.user) {
        console.warn('[getTotalDeposit] No authenticated user found');
      
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }

        return 0;
      }
  
      const userId = session.user.id;
  
      console.log('[getTotalDeposit] Fetching deposits for user:', userId);
  
      const { data: deposits, error } = await supabase
        .from('cryptaura_deposits')
        .select('amount')
        .eq('user_id', userId);
  
      if (error) {
        console.error('[getTotalDeposit] Supabase error:', error);
        return 0;
      }
  
      const total = deposits?.reduce((acc, curr) => acc + Number(curr.amount), 0) || 0;
      console.log(`[getTotalDeposit] Total deposit: $${total.toFixed(2)}`);
  
      return total;
    } catch (err) {
      console.error('[getTotalDeposit] Unexpected error:', err);
      return 0;
    }
}

export async function getTotalInvestment(): Promise<number> {
    try {
      console.log('[getTotalInvestment] Getting user session...');
      const session = await getSession();
  
      if (!session?.user) {
        console.warn('[getTotalInvestment] No authenticated user found');

        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return 0;
      }
  
      const userId = session.user.id;
  
      console.log('[getTotalInvestment] Fetching investments for user:', userId);
  
      const { data: investments, error } = await supabase
        .from('cryptaura_user_investments')
        .select('amount, status')
        .eq('user_id', userId);
  
      if (error) {
        console.error('[getTotalInvestment] Supabase error:', error);
        return 0;
      }
  
      // Sum only active investments (optional, based on status)
      const total = investments
        ?.filter(inv => inv.status === 'active') // or remove this filter if you want all
        .reduce((acc, curr) => acc + Number(curr.amount), 0) || 0;
  
      console.log(`[getTotalInvestment] Total investment: $${total.toFixed(2)}`);
      return total;
    } catch (err) {
      console.error('[getTotalInvestment] Unexpected error:', err);
      return 0;
    }
}

/**
 * Fetch the total amount of completed withdrawals for the logged-in user.
 * @returns total completed withdrawal amount (0 if none or error)
 */
export async function getTotalCompletedWithdrawal(): Promise<number> {
    try {
      const session = await getSession();
      if (!session?.user) {
        console.warn('[getTotalCompletedWithdrawal] No session found');
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return 0;
      }
  
      const userId = session.user.id;
      console.log('[getTotalCompletedWithdrawal] Fetching completed withdrawals for user:', userId);
  
      const { data, error } = await supabase
        .from('cryptaura_withdrawals')
        .select('amount')
        .eq('user_id', userId)
        .eq('status', 'completed');
  
      if (error) {
        console.error('[getTotalCompletedWithdrawal] Supabase error:', error);
        return 0;
      }
  
      const total = (data ?? []).reduce((sum, row) => sum + Number(row.amount || 0), 0);
      console.log('[getTotalCompletedWithdrawal] Total completed withdrawal:', total);
      return total;
    } catch (err) {
      console.error('[getTotalCompletedWithdrawal] Unexpected error:', err);
      return 0;
    }
}

export async function getTotalPendingWithdrawal(): Promise<number> {
    try {
      const session = await getSession();
      if (!session?.user) {
        console.warn('[getTotalPendingWithdrawal] No session found');
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return 0;
      }
  
      const userId = session.user.id;
      console.log('[getTotalPendingWithdrawal] Fetching pending withdrawals for user:', userId);
  
      const { data, error } = await supabase
        .from('cryptaura_withdrawals')
        .select('amount')
        .eq('user_id', userId)
        .eq('status', 'pending');
  
      if (error) {
        console.error('[getTotalPendingWithdrawal] Supabase error:', error);
        return 0;
      }
  
      const total = (data ?? []).reduce((sum, row) => sum + Number(row.amount || 0), 0);
      console.log('[getTotalPendingWithdrawal] Total pending withdrawal:', total);
      return total;
    } catch (err) {
      console.error('[getTotalPendingWithdrawal] Unexpected error:', err);
      return 0;
    }
}

export async function getProfileData(): Promise<{ data?: ProfileData; error?: string }> {
    try {
      // 1. Get current session
      const { session } = await getSession();
      if (!session?.user) {
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return { error: 'Not authenticated' };
      }
  
      // 2. Fetch profile data including balance and total_bonus_and_interest
      const { data: profile, error } = await supabase
        .from('cryptaura_profile')
        .select('name, referral_code, username, email, phone_number, balance, total_bonus_and_interest, referral_count, referral_earnings')
        .eq('id', session.user.id)
        .single();
  
      if (error || !profile) {
        console.error('Error fetching profile:', error);
        return { error: 'Failed to fetch profile data' };
      }
  
      // 3. Return formatted data
      return {
        data: {
          name: profile.name,
          username: profile.username,
          referralCode: profile.referral_code,
          email: profile.email,
          phoneNumber: profile.phone_number,
          balance: profile.balance,
          totalBonusAndInterest: profile.total_bonus_and_interest || 0,
          // referralCount: profile.referral_count || 0,
          // referralEarnings: profile.referral_earnings || 0,
        },
      };
    } catch (err) {
      console.error('Unexpected error in getProfileData:', err);
      return { error: 'An unexpected error occurred' };
    }
}

// Additional analytics functions you might find useful:

export async function getTotalEarnings(): Promise<number> {
    try {
      const session = await getSession();
      if (!session?.user) {
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return 0;
      }
  
      const userId = session.user.id;
  
      // Get total from investments (expected returns)
      const { data: investments, error: invError } = await supabase
        .from('cryptaura_user_investments')
        .select('expected_return')
        .eq('user_id', userId)
        .eq('status', 'active');
  
      if (invError) {
        console.error('[getTotalEarnings] Error fetching investments:', invError);
        return 0;
      }
  
      // Get total from referral earnings
      const { data: profile, error: profileError } = await supabase
        .from('cryptaura_profile')
        .select('referral_earnings, total_bonus_and_interest')
        .eq('id', userId)
        .single();
  
      if (profileError) {
        console.error('[getTotalEarnings] Error fetching profile:', profileError);
        return 0;
      }
  
      const investmentEarnings = investments?.reduce((acc, curr) => acc + Number(curr.expected_return), 0) || 0;
      const referralEarnings = profile?.referral_earnings || 0;
      const bonusEarnings = profile?.total_bonus_and_interest || 0;
  
      const totalEarnings = investmentEarnings + referralEarnings + bonusEarnings;
      console.log(`[getTotalEarnings] Total earnings: $${totalEarnings.toFixed(2)}`);
      
      return totalEarnings;
    } catch (err) {
      console.error('[getTotalEarnings] Unexpected error:', err);
      return 0;
    }
}

export async function getActiveInvestmentsCount(): Promise<number> {
    try {
      const session = await getSession();
      if (!session?.user) {
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return 0;
      }
  
      const userId = session.user.id;
  
      const { count, error } = await supabase
        .from('cryptaura_user_investments')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('status', 'active');
  
      if (error) {
        console.error('[getActiveInvestmentsCount] Error:', error);
        return 0;
      }
  
      console.log(`[getActiveInvestmentsCount] Active investments: ${count}`);
      return count || 0;
    } catch (err) {
      console.error('[getActiveInvestmentsCount] Unexpected error:', err);
      return 0;
    }
}

export async function getPendingTransactionsCount(): Promise<{ deposits: number; withdrawals: number }> {
    try {
      const session = await getSession();
      if (!session?.user) {
        if (typeof window !== 'undefined') {
          window.location.href = '/signin';
        } else {
          redirect('/signin');
        }
        return { deposits: 0, withdrawals: 0 };
      }
  
      const userId = session.user.id;
  
      const [depositsResult, withdrawalsResult] = await Promise.all([
        supabase
          .from('cryptaura_deposits')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', userId)
          .eq('status', 'pending'),
        supabase
          .from('cryptaura_withdrawals')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', userId)
          .eq('status', 'pending')
      ]);
  
      const pendingDeposits = depositsResult.count || 0;
      const pendingWithdrawals = withdrawalsResult.count || 0;
  
      console.log(`[getPendingTransactionsCount] Pending deposits: ${pendingDeposits}, withdrawals: ${pendingWithdrawals}`);
      
      return {
        deposits: pendingDeposits,
        withdrawals: pendingWithdrawals
      };
    } catch (err) {
      console.error('[getPendingTransactionsCount] Unexpected error:', err);
      return { deposits: 0, withdrawals: 0 };
    }
}