import Search from "@/components/search-bar"
import Image from 'next/image';
import { AddPerson } from "@/components/buttons";
import { PeopleTable } from "@/components/tables";
import { fetchUsersPersons } from "@/app/lib/data";

export default async function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <div>People Page</div>
          <section id="search-bar" className="flex">
              <Search placeholder="search people"></Search>
              <p>or</p>
              <AddPerson/>
          </section>
          <PeopleTable/>
        </section>
      </main>
    )
  }
  