import Form from "@/components/add-person-form"
import { auth } from "../../../../../auth"
export default async function Page() {
  const session = await auth()
  const userId = session?.userId

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>ADD Person Form</div>
        <Form id={userId as string}/>
      </main>
    )
  }
  