import Search from "@/components/search-bar"
import Image from 'next/image';
import { AddPerson } from "@/components/buttons";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <div>People Page</div>
          <section id="search-bar" className="flex">
              <Search placeholder="search people"></Search>
              <p>or</p>
              <AddPerson/>
          </section>
          <h2>PERSON TABLE</h2>
          <table className="min-w-full text-gray-900 md:table border-spacing-1 outline">
            <tbody className="bg-white">
            {/*TODO: take data and map each person to a TABLE ROW */}
              <tr>
                <td>Image</td>
                <td>NAME</td>
                <td>WISHLIST</td>
                <td>EDIT</td>
                <td>DELETE</td>
              </tr>
            </tbody>
          </table>

        </section>
      </main>
    )
  }
  