import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UserMenu } from '@/components/auth/user-menu'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <UserMenu />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card>
            <CardHeader>
              <CardTitle>Welcome back, {user.user_metadata?.full_name || user.email}!</CardTitle>
              <CardDescription>
                You're successfully logged in with Google OAuth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">User Information</h3>
                  <dl className="mt-2 divide-y divide-gray-200">
                    <div className="py-3 flex justify-between">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="text-sm text-gray-900">{user.email}</dd>
                    </div>
                    {user.user_metadata?.full_name && (
                      <div className="py-3 flex justify-between">
                        <dt className="text-sm font-medium text-gray-500">Name</dt>
                        <dd className="text-sm text-gray-900">{user.user_metadata.full_name}</dd>
                      </div>
                    )}
                    <div className="py-3 flex justify-between">
                      <dt className="text-sm font-medium text-gray-500">User ID</dt>
                      <dd className="text-sm text-gray-900 font-mono text-xs">{user.id}</dd>
                    </div>
                    <div className="py-3 flex justify-between">
                      <dt className="text-sm font-medium text-gray-500">Provider</dt>
                      <dd className="text-sm text-gray-900">Google</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}