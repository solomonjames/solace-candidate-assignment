"use client";

import { ChangeEvent } from "react";
import { Input, Button, Text, Box } from "@chakra-ui/react";

interface SearchBarProps {
  searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function SearchBar({ searchTerm, onChange, onClick }: SearchBarProps) {
  return (
    <Box mb="6">
      <Text fontSize="lg" fontWeight="medium" mb="2">Search</Text>
      <Text fontSize="sm" color="fg.muted" mb="2">
        Searching for: <Text as="span" fontWeight="semibold">{searchTerm}</Text>
      </Text>
      <Input maxW="md" value={searchTerm} onChange={onChange} />
      <Button ml="4" onClick={onClick}>Reset Search</Button>
    </Box>
  );
}
