import * as React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { AppTabPanel } from 'app/common/AppTabPanel';

export type TabbedData = {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export type TabbedContentProps = {
  tabs: TabbedData[];
};

export function TabbedContent({ tabs }: TabbedContentProps) {
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
    <Box id="app-tabbed-page" sx={{ flex: 1 }}>
      <Box id="app-tabs-container">
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
        >
          {tabEntries}
        </Tabs>
      </Box>
      <Box id="app-tabbed-content">{tabContent}</Box>
    </Box>
  );
}
