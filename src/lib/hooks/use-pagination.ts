import { ChangeEvent, useState } from 'react';

type PaginationType = {
  totalPages: number;
  currentPage: number;
  take: number;
  order?: 'asc' | 'desc' | undefined;
  orderBy?: string;
  totalItems: number;
  skip: number;
};

export function usePagination() {
  const [pagination, setPagination] = useState<PaginationType>({
    totalPages: 1,
    currentPage: 1,
    take: 10,
    skip: 0,
    totalItems: 10,
  });

  const setCurrentPage = (page: number) => {
    setPagination((oldState) => {
      const { take } = oldState;
      return {
        ...oldState,
        currentPage: page,
        skip: page === 1 ? 0 : (page - 1) * take,
      };
    });
  };

  const goNext = () => {
    setPagination((oldState) => {
      const { totalPages, currentPage, take } = oldState;

      const nextPage = currentPage + 1;

      return {
        ...oldState,
        currentPage: nextPage > totalPages ? totalPages : nextPage,
        skip: currentPage === 1 ? take : currentPage * take,
      };
    });
  };

  const goBack = () => {
    setPagination((oldState) => {
      const { currentPage, take } = oldState;

      const previousPage = currentPage - 1;

      return {
        ...oldState,
        currentPage: previousPage < 1 ? 1 : previousPage,
        skip: previousPage === 1 ? 0 : (previousPage - 1) * take,
      };
    });
  };

  const rangeChange = (value: ChangeEvent<HTMLSelectElement>) => {
    setPagination((oldState) => ({
      ...oldState,
      take: Number(value.target.value),
      currentPage: 1,
    }));
  };

  const setTotalPage = (totalItems: number) => {
    setPagination((oldState) => {
      const total = Math.ceil(totalItems / oldState.take);

      return { ...oldState, totalPages: total, totalItems };
    });
  };

  const handleOrdenation = (orderBy?: string) => {
    const { order, orderBy: currentOrderBy } = pagination;
    let updatedOrder = order;

    if (currentOrderBy !== orderBy) {
      updatedOrder = undefined;
    }

    if (updatedOrder === 'asc') {
      setPagination((oldState) => ({ ...oldState, order: 'desc' }));
      return;
    }

    if (updatedOrder === 'desc') {
      setPagination((oldState) => {
        const { currentPage, take, totalPages, totalItems, skip } = oldState;
        return { currentPage, take, totalPages, totalItems, skip };
      });
      return;
    }

    setPagination((oldState) => ({ ...oldState, order: 'asc', orderBy }));
  };

  const getClassToCurrentOrderColumn = (columnName: string) => {
    const { order, orderBy } = pagination;
    let orderClass = 'table-sort';
    if (order && orderBy === columnName) {
      orderClass = order === 'asc' ? 'table-sort-asc' : 'table-sort-desc';
    }
    return orderClass;
  };

  return {
    goBack,
    goNext,
    rangeChange,
    setCurrentPage,
    setTotalPage,
    handleOrdenation,
    pagination,
    getClassToCurrentOrderColumn,
  };
}

export type usePaginationType = ReturnType<typeof usePagination>;
