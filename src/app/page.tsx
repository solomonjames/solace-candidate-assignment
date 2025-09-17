'use client';

import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { Container, Flex, Stack } from '@chakra-ui/react';
import { type AdvocateEntity } from '@/db/schema';
import { advocateApi } from '@/lib/api';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import AdvocatesTable from '@/components/home/AdvocatesTable';
import PageSizeSelector from '@/components/pagination/PageSizeSelector';
// import Paginator from '@/components/pagination/Paginator';

export default function Home() {
  const pageSizeOptions = [10, 20, 50];
  const [advocates, setAdvocates] = useState<AdvocateEntity[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(['10']);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSearchTerm, setLastSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchAdvocates = useCallback(async (page: number, search: string) => {
    setIsLoading(true);
    try {
      const response = await advocateApi.fetchAll({
        page,
        limit: Number(pageSize[0]),
        search: search || undefined
      });
      setAdvocates(response.data);
      setTotalCount(response.totalCount);
    } catch (error) {
      console.error('Failed to fetch advocates:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pageSize]);

  useEffect(() => {
    void fetchAdvocates(1, '');
  }, [fetchAdvocates]);

  const searchHandler = () => {
    setCurrentPage(1);
    setLastSearchTerm(searchTerm);
    void fetchAdvocates(1, searchTerm);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const clearHandler = () => {
    setSearchTerm('');
    setLastSearchTerm('');
    setCurrentPage(1);
    void fetchAdvocates(1, '');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    void fetchAdvocates(page, lastSearchTerm);
  };

  return (
    <Container maxW="6xl" py="6">
      <Header />
      <SearchBar
        searchHandler={searchHandler}
        searchTerm={searchTerm}
        clearHandler={clearHandler}
        onChange={onChange}
      />
      <Stack width="full" gap="5">
        <AdvocatesTable advocates={advocates} isLoading={isLoading} />
        <Flex gap="4" direction={['column', 'column', 'row']}>
          <PageSizeSelector
            pageSize={pageSize}
            setPageSize={setPageSize}
            options={pageSizeOptions}
          />
          <Paginator
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={Number(pageSize[0])}
            onPageChange={handlePageChange}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
