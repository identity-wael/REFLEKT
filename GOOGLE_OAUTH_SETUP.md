# Google OAuth Setup for REFLEKT

## Step 1: Create OAuth 2.0 Credentials in Google Cloud Console

1. Go to: https://console.cloud.google.com/apis/credentials?project=reflekt-production

2. **Configure OAuth Consent Screen** (if not already done):
   - Click "CONFIGURE CONSENT SCREEN"
   - Choose "External" user type
   - Fill in:
     - App name: REFLEKT
     - User support email: identity@wael.ai
     - App domain: http://localhost:3000 (for development)
     - Developer contact: identity@wael.ai
   - Add scopes: email, profile, openid
   - Save and continue

3. **Create OAuth 2.0 Client ID**:
   - Click "+ CREATE CREDENTIALS" → "OAuth client ID"
   - Application type: "Web application"
   - Name: "REFLEKT Supabase Auth"
   - Add Authorized JavaScript origins:
     ```
     http://localhost:3000
     https://osgubfnhibgdvrpedigp.supabase.co
     ```
   - Add Authorized redirect URIs:
     ```
     https://osgubfnhibgdvrpedigp.supabase.co/auth/v1/callback
     ```
   - Click "CREATE"

4. **Save the credentials**:
   - Copy the Client ID
   - Copy the Client Secret

## Step 2: Configure Supabase

1. Go to: https://supabase.com/dashboard/project/osgubfnhibgdvrpedigp/auth/providers

2. Find "Google" in the providers list and enable it

3. Add your credentials:
   - **Client ID**: [paste from GCP]
   - **Client Secret**: [paste from GCP]
   - **Authorized Client IDs** (optional): Leave empty for now

4. Click "Save"

## Step 3: Update Your .env.local

Add these to your `.env.local` file:
```
# Google OAuth (optional - for reference)
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
```

## Step 4: Get Your Supabase Anon Key

1. Go to: https://supabase.com/dashboard/project/osgubfnhibgdvrpedigp/settings/api

2. Copy the "anon public" key

3. Update `.env.local`:
```
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## URLs for Quick Access

- **GCP Credentials**: https://console.cloud.google.com/apis/credentials?project=reflekt-production
- **Supabase Auth Providers**: https://supabase.com/dashboard/project/osgubfnhibgdvrpedigp/auth/providers
- **Supabase API Keys**: https://supabase.com/dashboard/project/osgubfnhibgdvrpedigp/settings/api

## Testing

After setup, you can test by:
1. Restart your Next.js dev server
2. Navigate to the login page
3. Click "Sign in with Google"
4. Complete the OAuth flow

## Important Notes

- The redirect URI must match exactly what's configured in both GCP and Supabase
- For production, add your production domain to authorized origins and redirect URIs
- Keep the Client Secret secure - never commit it to Git