import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deletePerson } from '@/app/lib/actions';
export function AddPerson() {
  return (
    <Link
      href="/people/add/"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add Person</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function AddUserGift() {
  return (
    <Link
      href="/wishlist/add/"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add Gift</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function DeletePerson({ id }: { id: string }) {
  const deletePersonWithID = deletePerson.bind('null', id)
  return (
    <form action={deletePersonWithID}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}