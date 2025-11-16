'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Chrome } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  redirectTo?: string
  className?: string
  children?: React.ReactNode
}

export function LoginButton({
  redirectTo = '/',
  className,
  children
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${redirectTo}`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })

      if (error) {
        setError(error.message)
        console.error('Login error:', error)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className={className}
        variant="outline"
      >
        {isLoading ? (
          <span className="flex items-center">
            <span className="animate-spin mr-2">⊙</span>
            Signing in...
          </span>
        ) : (
          <>
            <Chrome className="mr-2 h-4 w-4" />
            {children || 'Sign in with Google'}
          </>
        )}
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </>
  )
}