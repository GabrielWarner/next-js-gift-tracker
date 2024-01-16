export type User = {
    id: string;
    wishlist_id: string; // Foreign key from Wishlist
    name: string;
    email: string;
  };

  export type Person = {
    id: string;
    user_id: string; // Foreign key from User
    wishlist_id: string; // Foreign key from Wishlist
    name: string;
    birthday: Date;
    image_url?: string;
  };

  export type WishList = {
    id: string;
    user_id: string; // Foreign key from User
    person_id: string; // Foreign key from Person
  }

  export type Gift = {
    id: string;
    wishlist_id: string; // Foreign key from Wishlist
    name: string;
    price?: number;
    url?: string;
    image_url?: string;
  };