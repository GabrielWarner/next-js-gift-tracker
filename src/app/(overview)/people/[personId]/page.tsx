import { fetchPersonGifts } from "@/app/lib/data";
export default async function Page({ params }: { params: { personId: string } }) {
      const { gifts } = await fetchPersonGifts(params.personId)
    return (
      <main>
        <div>Page to display gifts for tracked person</div>
        {/*GIFTS WILL BE RENDERED HERE*/}
      </main>
    )
  }
  


