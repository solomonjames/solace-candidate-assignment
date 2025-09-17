"use client";

import { ChangeEvent } from "react";
import { Input, Button, Box, Field, Group, CloseButton, InputGroup } from "@chakra-ui/react";

interface SearchBarProps {
  searchTerm: string;
  clearHandler: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  const endElement = props.searchTerm ? (
    <CloseButton
      size="xs"
      me="-2"
      onClick={props.clearHandler}
    />
  ) : undefined;

  return (
    <Box mb="6">
      <Field.Root>
        <Field.Label>Search</Field.Label>
        <Group attached w="full" maxW="sm">
          <InputGroup endElement={endElement}>
            <Input maxW="md" value={props.searchTerm} onChange={props.onChange} />
          </InputGroup>
          <Button onClick={props.searchHandler}>Search</Button>
        </Group>
      </Field.Root>
    </Box>
  );
}
