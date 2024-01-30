import { fetchUserGift } from "@/app/lib/data"

export default async function Page({ params }: { params: { giftId: string } }) {
  const gift = await fetchUserGift(params.giftId)
  if(!gift){
    throw new Error('Cannot find gift')
  }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Wishlist Gift Page</div>
        <div>{gift.name}</div>
        <div>{gift.price}</div>
        <div>{gift.url}</div>
        <div>{gift.imageUrl}</div>
      </main>
    )
  }
  