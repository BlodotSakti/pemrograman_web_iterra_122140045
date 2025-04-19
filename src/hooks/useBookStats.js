import { useMemo } from 'react';

export function useBookStats(books) {
  return useMemo(() => ({
    total: books.length,
    owned: books.filter(b => b.status === 'milik').length,
    reading: books.filter(b => b.status === 'baca').length,
    wishlist: books.filter(b => b.status === 'beli').length
  }), [books]);
}