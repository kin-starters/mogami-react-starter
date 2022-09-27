import { Anchor, AppShell, Container, Footer, Group, Header, Image, Text } from '@mantine/core'
import { ReactNode } from 'react'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={
        <Header height={92} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Image src="https://avatars.githubusercontent.com/u/82999948?v=4" style={{ height: 48, width: 48 }} />
        </Header>
      }
      footer={
        <Footer
          height={60}
          style={{
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Group spacing={4}>
            <Anchor target="_blank" href="https://github.com/kin-labs/kinetic">
              Kinetic
            </Anchor>
            <Text>by the</Text>
            <Anchor target="_blank" href="https://kin.org">
              Kin Foundation
            </Anchor>
          </Group>
        </Footer>
      }
    >
      <Container>{children}</Container>
    </AppShell>
  )
}
