import Head from 'next/head'
import WvContainer from '@wevisdemo/ui/react/container';
import TestBTN from '../components/TestBTN';
import TestStyle from '../components/TestStyle';

import WvNavbar from '@wevisdemo/ui/react/navbar';
import WvNavButton from '@wevisdemo/ui/react/nav-button';
import WvFooter from '@wevisdemo/ui/react/footer';
import { useRouter, usePathname } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='bg-black text-white'>
      <WvNavbar title="POLITICS AND BUSINESS" >
        <WvNavButton active={pathname === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
        <WvNavButton active={pathname === '/about'} onClick={() => router.replace('/about')}>About</WvNavButton>
      </WvNavbar>
      <WvContainer>
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
        </h1>
        <TestBTN />
        <TestStyle />
      </WvContainer>
      <WvFooter />
    </div>
  )
}
