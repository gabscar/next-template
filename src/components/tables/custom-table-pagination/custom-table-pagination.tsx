import * as S from './custom-table-pagination-style';
import { smallRightArrow } from '@core/assets';
import { usePaginationType } from '@lib/hooks/use-pagination';
import { useEffect, useState } from 'react';

interface CustomTablePaginationParams {
  pagination: usePaginationType;
}

const getRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};
export const CustomTablePagination = ({
  pagination,
}: CustomTablePaginationParams) => {
  const [arrPages, setArrPages] = useState<(string | number)[]>([]);

  useEffect(() => {
    const getArrPages = () => {
      const totalPageCount = pagination.pagination.totalPages;
      const totalPageNumbers = 5;
      const dots = '...';
      if (totalPageNumbers >= totalPageCount) {
        setArrPages(getRange(1, totalPageCount));
        return;
      }

      const leftSiblingIndex = Math.max(
        pagination.pagination.currentPage - 1,
        1,
      );
      const rightSiblingIndex = Math.min(
        pagination.pagination.currentPage + 1,
        totalPageCount,
      );

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        setArrPages([...getRange(1, 4), dots, totalPageCount]);
        return;
      }
      if (shouldShowLeftDots && !shouldShowRightDots) {
        setArrPages([
          firstPageIndex,
          dots,
          ...getRange(totalPageCount - 4, totalPageCount),
        ]);
        return;
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        setArrPages([
          firstPageIndex,
          dots,
          ...getRange(leftSiblingIndex, rightSiblingIndex),
          dots,
          lastPageIndex,
        ]);
        return;
      }

      return [];
    };
    getArrPages();
  }, [pagination.pagination]);

  const getFooterLabel = () => {
    const { currentPage, take, totalItems } = pagination.pagination;
    const getInterval = () => {
      if (currentPage > 1) {
        const currItem = currentPage === 1 ? 1 : (currentPage - 1) * take;

        return `${currItem}-${
          currItem + take < totalItems ? currItem + take : totalItems
        }`;
      } else {
        return `${totalItems > 0 ? 1 : 0}-${
          take < totalItems ? take : totalItems
        }`;
      }
    };
    const getTotal = () => {
      return ` de ${totalItems} itens`;
    };
    return getInterval() + getTotal();
  };
  return (
    <S.TableFooter>
      <S.FooterPageLabel>
        <span>{getFooterLabel()}</span>
      </S.FooterPageLabel>
      <S.FooterPageActions>
        <S.Iconimg
          src={smallRightArrow.src}
          alt="leftArrow"
          gradeRotate="180deg"
          disabled={pagination.pagination.currentPage === 1}
          onClick={() => {
            if (pagination.pagination.currentPage > 1) pagination.goBack();
          }}
        />
        <S.NumberContainer>
          {arrPages.map((pageNumber, idx) => {
            if (pageNumber === '...') {
              return (
                <div key={`${idx}-dots`} className="pagination-item dots">
                  &#8230;
                </div>
              );
            }

            return (
              <S.LabelNumber
                key={pageNumber}
                onClick={() => {
                  pagination.setCurrentPage(pageNumber as number);
                }}
                isSelected={pageNumber === pagination.pagination.currentPage}
              >
                {pageNumber}
              </S.LabelNumber>
            );
          })}
        </S.NumberContainer>
        <S.Iconimg
          src={smallRightArrow.src}
          alt="leftArrow"
          disabled={
            pagination.pagination.currentPage ===
            pagination.pagination.totalPages
          }
          onClick={() => {
            if (
              pagination.pagination.currentPage <
              pagination.pagination.totalPages
            )
              pagination.goNext();
          }}
        />
      </S.FooterPageActions>
    </S.TableFooter>
  );
};
