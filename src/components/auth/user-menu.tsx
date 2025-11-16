'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { User, LogOut, Settings } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export function UserMenu() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setIsLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (isLoading) {
    return <div className="h-10 w-10 animate-pulse bg-gray-200 rounded-full" />
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {user.user_metadata?.avatar_url ? (
          <img
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata.full_name || 'User'}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        )}
        <span className="text-sm font-medium">
          {user.user_metadata?.full_name || user.email?.split('@')[0]}
        </span>
      </div>

      <Button
        onClick={handleSignOut}
        variant="ghost"
        size="sm"
        className="text-gray-600 hover:text-gray-900"
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}