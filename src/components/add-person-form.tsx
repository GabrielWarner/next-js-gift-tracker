'use client';
import { UserCircleIcon, CalendarIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/button';
import Link from 'next/link';
import { AddPerson } from '@/app/lib/actions';

export default function Form() {
  const AddPersonToUserID = AddPerson.bind(null, '1');
  return (
    <form action={AddPersonToUserID}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Person Name */}
        <div className="mb-4">
          <label htmlFor="person-name" className="mb-2 block text-sm font-medium">
            Persons Name
          </label>
          <div className="relative">
            <input
              id="person-name"
              name="name"
              type="text"
              placeholder="Enter person's name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Birthday */}
        <div className="mb-4">
          <label htmlFor="birthday" className="mb-2 block text-sm font-medium">
            Birthday
          </label>
          <div className="relative">
            <input
              id="birthday"
              name="birthday"
              type="date"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Select Image
          </label>
          <div className="relative">
            <input
              id="image"
              name="image"
              type="file"
              className="peer block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-gray-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-100"
            />
            {/* <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/people"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Person</Button>
      </div>
    </form>
  );
}
