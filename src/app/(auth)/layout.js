import { AuthLayout } from '@/components/auth/components/AuthLayout'
import React from 'react'

export default function layout ({children}) {
  return (
    <AuthLayout>{children}</AuthLayout>
  )
}
