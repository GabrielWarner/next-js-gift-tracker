import SideNav from '@/components/sidenav'
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
            <SideNav/>
        </div>
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  );
}
