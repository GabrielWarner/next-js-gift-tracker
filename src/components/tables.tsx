import { auth } from "../../auth";
import { fetchUserWishlist } from "@/app/lib/data";
import { Gift } from "@/app/lib/definitions";
export default async function UserWishlistTable() {
  const wishlist = await fetchUserWishlist();
  const gifts = wishlist?.gifts;
  console.log(gifts[0]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>URL</td>
          </tr>
        </thead>
        <tbody>
          {gifts.map((gift) => {
            return (
            <tr key={gift.id}>
                <td>{gift.name}</td>
                <td>{gift.price}</td>
                <td>{gift.url}</td>
                <td>{gift.id}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
