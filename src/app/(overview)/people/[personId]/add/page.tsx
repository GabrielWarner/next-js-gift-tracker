import Form from "@/components/add-gift-to-person-fom"
import { auth } from "../../../../../../auth"
export default function Page({ params }: { params: { personId: string } }) {
    const session = auth()
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Person Add Gift Form</div>
        <Form id={params.personId}/>
      </main>
    )
  }
  