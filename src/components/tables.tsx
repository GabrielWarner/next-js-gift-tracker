import { fetchUserWishlist } from "@/app/lib/data";
import { fetchUsersPersons } from "@/app/lib/data";
import Link from "next/link";
import { DeletePerson } from "./buttons";
import { BookOpenIcon } from '@heroicons/react/24/outline';

export async function UserWishlistTable() {
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

export async function PeopleTable() {
  const data = await fetchUsersPersons()
  const people = data?.people
    return (
        <table className="min-w-full text-gray-900 md:table border-spacing-1 outline">
            <thead className="bg-white">
            {/*TODO: take data and map each person to a TABLE ROW */}
              <tr>
                <td>Image</td>
                <td>NAME</td>
                <td>WISHLIST</td>
                <td>BDAY</td>
                <td>EDIT</td>
                <td>DELETE</td>
              </tr>
            </thead>
            <tbody>
              {people?.map((person) => {
                return(
                  <tr key={person.id}>
                    <td>
                      <Link href={`/people/${person.id}`}>
                        {person.imageUrl}
                      </Link>
                    </td>
                    <td>
                      <Link href={`/people/${person.id}`}>
                      {person.name}
                      </Link>
                    </td>
                    <td>
                      <Link href={`/people/${person.id}`}>
                      <BookOpenIcon/>
                      </Link>
                    </td>
                    <td>{person.birthday.toDateString()}</td>
                    <td>EDIT ICON</td>
                    <td className="m-24">
                      <DeletePerson id={person.id}/>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    )
}
