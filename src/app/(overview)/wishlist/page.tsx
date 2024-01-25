import Search from "@/components/search-bar"
import { AddUserGift } from '@/components/buttons'
import UserWishlistTable from '@/components/tables'

export default async function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Wishlist Page</div>
        <section id="search-bar" className="flex">
              <Search placeholder="search people"></Search>
              <p>or</p>
              <AddUserGift/>
          </section>
        <UserWishlistTable/>
      </main>
    )
  }
  