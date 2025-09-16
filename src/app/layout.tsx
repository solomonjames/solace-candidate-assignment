import type { Metadata } from "next";
import { ReactNode } from 'react';
import { Provider } from '@/components/ui/provider';
import { ColorModeButton } from '@/components/ui/color-mode';
import { Box, Container, Flex } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: "Solace Candidate Assignment",
  description: "Show us what you got",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Box>
            <Flex justify="flex-end" p="4">
              <ColorModeButton />
            </Flex>
            <Container>
              {children}
            </Container>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
