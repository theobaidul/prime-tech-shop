import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useNavigate } from 'react-router-dom';

export default function ProductPagination({
  currentPage,
  limit,
  total,
  setPage,
}) {
  const navigate = useNavigate();
  const totalPage = Math.ceil(total / limit);
  const pageArray = Array.from({ length: totalPage }, (_, i) => ({
    id: i + 1,
  }));

  return (
    <Pagination className="m-0 w-fit justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              setPage((prev) => (currentPage > 1 ? prev - 1 : currentPage));
              navigate(
                `?page=${currentPage > 1 ? currentPage - 1 : currentPage}&limit=${limit}`
              );
            }}
          />
        </PaginationItem>
        {pageArray?.map((page) => (
          <PaginationItem key={page?.id}>
            <PaginationLink
              onClick={() => {
                setPage(page?.id);
                navigate(`?page=${page?.id}&limit=${limit}`);
              }}
            >
              {page?.id}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              setPage((prev) =>
                currentPage < totalPage ? prev + 1 : currentPage
              );
              navigate(
                `?page=${currentPage < totalPage ? currentPage + 1 : currentPage}&limit=${limit}`
              );
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
