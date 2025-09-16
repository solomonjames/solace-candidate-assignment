"use client";

import { type AdvocateEntity } from '@/db/schema';
import { Table } from "@chakra-ui/react";

interface AdvocateRowProps {
  advocate: AdvocateEntity;
}

export default function AdvocateRow({ advocate }: AdvocateRowProps) {
  return (
    <Table.Row>
      <Table.Cell>{advocate.firstName}</Table.Cell>
      <Table.Cell>{advocate.lastName}</Table.Cell>
      <Table.Cell>{advocate.city}</Table.Cell>
      <Table.Cell>{advocate.degree}</Table.Cell>
      <Table.Cell>
        {advocate.specialties.map((s, i) => (
          <div key={`index-${i}-${s}`}>{s}</div>
        ))}
      </Table.Cell>
      <Table.Cell>{advocate.yearsOfExperience}</Table.Cell>
      <Table.Cell>{advocate.phoneNumber}</Table.Cell>
    </Table.Row>
  );
}