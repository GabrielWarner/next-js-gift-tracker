import Link from "next/link";
import { Button } from "./button";
import { addGiftToUserWishlist } from "@/app/lib/actions";
export default async function Form() {
  return (
    <form action={addGiftToUserWishlist}>
      <label htmlFor="name">Enter Gift Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Gift name..."
        defaultValue=""
      />
      <label htmlFor="price">Enter Price</label>
      <input id="price" name="price" type="text" placeholder="0.00" />
      <label htmlFor="url">Enter Product Link</label>
      <input
        id="url"
        name="url"
        type="text"
        placeholder="Enter link here"
        defaultValue=""
      />

      <label htmlFor="image" className="mb-2 block text-sm font-medium">
        {" "}
        Select Image{" "}
      </label>
      <div className="relative">
        <input
          id="image"
          name="image"
          type="file"
          className="peer block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-gray-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-100"
        />
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/people"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Add Gift</Button>
        </div>
      </div>
    </form>
  );
}
