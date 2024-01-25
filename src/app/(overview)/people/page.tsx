import Search from "@/components/search-bar"
import Image from 'next/image';
import { AddPerson } from "@/components/buttons";
import { fetchUsersPersons } from "@/app/lib/data";
import Link from "next/link";

export default async function Page() {
  const data = await fetchUsersPersons()
  const people = data?.persons
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <div>People Page</div>
          <section id="search-bar" className="flex">
              <Search placeholder="search people"></Search>
              <p>or</p>
              <AddPerson/>
          </section>
          {/* TODO: Add table to display all people */}
          <h2>PERSON TABLE</h2>
          <table className="min-w-full text-gray-900 md:table border-spacing-1 outline">
            <thead className="bg-white">
            {/*TODO: take data and map each person to a TABLE ROW */}
              <tr>
                <td>Image</td>
                <td>NAME</td>
                <td>WISHLIST</td>
                <td>EDIT</td>
                <td>DELETE</td>
              </tr>
            </thead>
            <tbody>
              {people?.map((person) => {
                return(
                  <tr key={person.id}>
                    <td>{person.imageUrl}</td>
                    <td>{person.name}</td>
                    <td>wishlist icon</td>
                    <td><Link href='/'></Link></td>
                    <td>delete icon</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </section>
      </main>
    )
  }
  