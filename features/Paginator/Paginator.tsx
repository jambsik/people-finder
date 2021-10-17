/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
import { Button } from "theme-ui";
import { Pagination } from "../../constants/Pagination";
import { paginatorItemStyles, paginatorRootStyles } from "./Paginator.styles";

export interface PaginatorProps {
  total: number;
  onClickPage: (page: number) => void;
}

export const Paginator = ({ total, onClickPage }: PaginatorProps) => {
  const getNumberOfPages = () =>
    Math.floor(total / Pagination.DefaultLimit) + Pagination.offset;
  const [numberOfPages, setNumberOfPages] = useState<number>(getNumberOfPages);
  const [currentPage, setCurrentPage] = useState<number>(Pagination.offset);

  useEffect(() => {
    setNumberOfPages(getNumberOfPages());
  }, [total]);

  const onClickPageHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number
  ) => {
    event.preventDefault();

    setCurrentPage(page);
    onClickPage(page);
  };

  const paginatorItems = Array(numberOfPages)
    .fill("")
    .map((value: string, index: number) => {
      const page = index + Pagination.offset;
      return (
        <Button
          sx={paginatorItemStyles}
          key={index}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onClickPageHandler(event, page)
          }
        >
          {page}
        </Button>
      );
    });

  return (
    <div sx={paginatorRootStyles}>
      current page: {currentPage} ~{paginatorItems}
    </div>
  );
};
