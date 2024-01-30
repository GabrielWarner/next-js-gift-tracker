import { fetchPersonGift } from "@/app/lib/data"
export default async function Page({ params }: { params: { personId: string, giftId: string } }) {
  const gift = await fetchPersonGift(params.giftId)
  if (!gift){
    throw new Error('Gift not found')
  }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Specific Person Gift Page</div>
        <div>{gift.name}</div>
        <div>{gift.price}</div>
        <div>{gift.url}</div>
        <div>{gift.imageUrl}</div>
      </main>
    )
  }
  