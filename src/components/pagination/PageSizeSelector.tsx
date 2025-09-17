import { createListCollection, Portal, Select } from '@chakra-ui/react';

interface PageSizeSelectorProps {
  pageSize: string[];
  setPageSize: (page: string[]) => void;
  options: number[];
}

export default function PageSizeSelector(props: PageSizeSelectorProps) {
  const { pageSize, setPageSize } = props;
  const pageSizeOptions = createListCollection({
    items: props.options.map((o) => ({ label: String(o), value: String(o)})),
  });

  return (
    <Select.Root width="100px" collection={pageSizeOptions} size="sm" value={pageSize} onValueChange={(e) => setPageSize(e.value)}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Size" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {pageSizeOptions.items.map((v) => (
              <Select.Item item={v} key={v.value}>
                {v.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
