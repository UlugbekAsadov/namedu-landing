import {
  Pagination,
  PaginationPrevious,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from '../ui/pagination';

const CustomPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const pageNumbers = () => {
    const pages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 2) {
        pages.push(1);
        if (currentPage > 2) {
          pages.push('...');
        }
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination className="mt-10 md:gap-3">
      <PaginationPrevious
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      />
      <PaginationContent>
        {pageNumbers().map((page, index) =>
          page === '...' ? (
            <PaginationEllipsis key={index} />
          ) : (
            <PaginationItem key={index}>
              <PaginationLink
                className="cursor-pointer"
                isActive={currentPage === page}
                onClick={() => typeof page === 'number' && onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
      </PaginationContent>
      <PaginationNext
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
      />
    </Pagination>
  );
};

export default CustomPagination;
