'use client';

import { type AdvocateEntity } from '@/db/schema';
import { Table, SkeletonText } from '@chakra-ui/react';

import AdvocateRow from '@/components/home/AdvocateRow';

interface AdvocatesTableProps {
  advocates: AdvocateEntity[];
  isLoading?: boolean;
}

export default function AdvocatesTable({ advocates, isLoading }: AdvocatesTableProps) {
  return (
    <Table.Root size="sm" variant="outline" stickyHeader striped>
      <Table.Header>
        <Table.Row bg="bg.subtle">
          <Table.ColumnHeader>First Name</Table.ColumnHeader>
          <Table.ColumnHeader>Last Name</Table.ColumnHeader>
          <Table.ColumnHeader>City</Table.ColumnHeader>
          <Table.ColumnHeader>Degree</Table.ColumnHeader>
          <Table.ColumnHeader>Specialties</Table.ColumnHeader>
          <Table.ColumnHeader>Years of Experience</Table.ColumnHeader>
          <Table.ColumnHeader>Phone Number</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {isLoading && (
          Array.from({ length: 10 }).map((_, index) => (
              <Table.Row key={index}>
                <Table.Cell><SkeletonText noOfLines={1} /></Table.Cell>
                <Table.Cell><SkeletonText noOfLines={1} /></Table.Cell>
                <Table.Cell><SkeletonText noOfLines={1} /></Table.Cell>
                <Table.Cell><SkeletonText noOfLines={1} /></Table.Cell>
                <Table.Cell><SkeletonText noOfLines={2} /></Table.Cell>
                <Table.Cell><SkeletonText noOfLines={1} /></Table.Cell>
                <Table.Cell><SkeletonText noOfLines={1} /></Table.Cell>
              </Table.Row>
            ))
        )}
        {!isLoading && advocates.map((advocate) => (
          <AdvocateRow key={advocate.id} advocate={advocate} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
