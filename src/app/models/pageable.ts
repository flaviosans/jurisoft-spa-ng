class Pageable<T> {
  content: Array<T>;
  size: number;
  number: number;
  empty: boolean;
  totalElements: number;
  totalPages: number;
}
