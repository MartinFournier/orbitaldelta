import * as React from 'react';
import { Box, Tabs, Tab, styled } from '@mui/material';
import { AppTabPanel } from 'app/common/AppTabPanel';

export type TabbedData = {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export type ContentTabbedProps = {
  tabs: TabbedData[];
};

export function ContentTabbed({ tabs }: ContentTabbedProps) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const tabEntries = tabs.map(t => (
    <Tab key={`app-tab-${t.id}`} id={`app-tab-${t.id}`} label={t.label} />
  ));
  const tabContent = tabs.map((t, index) => (
    <AppTabPanel
      key={`app-tab-content-${t.id}`}
      id={`app-tab-content-${t.id}`}
      currentValue={selectedTab}
      index={index}
    >
      {t.content}
    </AppTabPanel>
  ));

  return (
    <TabPageWrapper id="app-tabbed-page">
      <Box id="app-tabs-container">
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
        >
          {tabEntries}
        </Tabs>
      </Box>
      <TabbedContentContainer id="app-tabbed-content">
        {tabContent}
      </TabbedContentContainer>
    </TabPageWrapper>
  );
}

const TabPageWrapper = styled(Box)`
  flex: 1;
  flex-direction: column;
  display: flex;
`;

const TabbedContentContainer = styled(Box)`
  overflow-y: auto;
  height: 100px;
  flex: 1 1 auto;
`;
