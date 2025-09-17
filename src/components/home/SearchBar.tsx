"use client";

import { ChangeEvent, KeyboardEvent } from "react";
import { Input, Button, Box, Field, Group, CloseButton, InputGroup } from "@chakra-ui/react";

interface SearchBarProps {
  searchTerm: string;
  clearHandler: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  const { clearHandler, searchHandler, searchTerm, onChange } = props;
  const endElement = searchTerm ? (
    <CloseButton
      size="xs"
      me="-2"
      onClick={clearHandler}
    />
  ) : undefined;

  const enterKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <Box mb="6">
      <Field.Root>
        <Field.Label>Search</Field.Label>
        <Group attached w="full" maxW="sm">
          <InputGroup endElement={endElement}>
            <Input
              maxW="md"
              value={searchTerm}
              onChange={onChange}
              onKeyDown={enterKeyHandler}
            />
          </InputGroup>
          <Button onClick={searchHandler}>Search</Button>
        </Group>
      </Field.Root>
    </Box>
  );
}
