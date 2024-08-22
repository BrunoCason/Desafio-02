import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'

export default function CheckAuthentication({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
