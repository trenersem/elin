import { BookContext } from "@/app/context/BookContext";
import { useContext } from "react";

export const useBookService = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('error with BookServiceContext');
  }
  return context;
};
