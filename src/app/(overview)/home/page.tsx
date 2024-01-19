import Link from 'next/link'
import { Button } from '@/components/button'
import { getUsersPersons } from '@/app/lib/data'

export default async function Page() {
  const users = await getUsersPersons(1)
  console.log(users)  //TODO: fetch all necessary data after obtaining UserID from authentication

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Home Page</h1>
      <section className='flex flex-col'>
        <Button className='m-3'>
          <Link href='wishlist/add'>
            <span>Add to Wishlist</span>
          </Link>
        </Button>
        <Button className='m-3'>
          <Link href='wishlist/add'>
            <span>Add Person</span>
          </Link>
        </Button>
        <Button className='m-3'>
          <Link href='wishlist/add'>
            <span>Select Person</span>
          </Link>
        </Button>
      </section>
    </main>
  )
}
