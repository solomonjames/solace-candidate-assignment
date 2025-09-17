"use client";

import {
  Pagination,
  ButtonGroup,
  IconButton
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Paginator(props: PaginationProps) {
  const {
    currentPage,
    totalCount,
    pageSize,
    onPageChange
  } = props;
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  return (
    <Pagination.Root
      count={totalCount}
      pageSize={pageSize}
      page={currentPage}
      onPageChange={(e) => onPageChange(e.page)}
    >
      <ButtonGroup variant="outline" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              variant={{ base: "outline", _selected: "solid" }}
              key={page.value}
            >
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>

        <Pagination.PageText />
      </ButtonGroup>
    </Pagination.Root>
  );
}
