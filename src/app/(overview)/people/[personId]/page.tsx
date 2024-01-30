import { fetchPersonGifts } from "@/app/lib/data";
import { AddPersonGift } from "@/components/buttons";
export default async function Page({ params }: { params: { personId: string } }) {
      const { gifts } = await fetchPersonGifts(params.personId)
    return (
      <main>
        <AddPersonGift id={params.personId}/>
        <div>Page to display gifts for tracked person</div>
        {/*GIFTS WILL BE RENDERED HERE*/}
        <table>
          <thead>
            <tr>
              <td>Gift Name</td>
              <td>Price</td>
              <td>URL</td>
              <td>Image URL</td>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift) => {
              return(
                <tr key={gift.id}>
                  <td>{gift.name}</td>
                  <td>{gift.price}</td>
                  <td>{gift.url}</td>
                  <td>{gift.imageUrl}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    )
  }
  


