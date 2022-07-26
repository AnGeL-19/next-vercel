import React from 'react';
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function Pricing() {
  return (
    <MainLayout >
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing.js</code>
        </p>
    </MainLayout>
  )
}
