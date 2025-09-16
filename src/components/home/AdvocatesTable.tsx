"use client";

import { type AdvocateEntity } from '@/db/schema';
import { Table } from "@chakra-ui/react";

import AdvocateRow from './AdvocateRow';

interface AdvocatesTableProps {
  advocates: AdvocateEntity[];
}

export default function AdvocatesTable({ advocates }: AdvocatesTableProps) {
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
        {advocates.map((advocate) => (
          <AdvocateRow key={advocate.id} advocate={advocate} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
