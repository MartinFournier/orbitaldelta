import { TabbedData, TabbedContent } from 'app/common/TabbedContent';
import React from 'react';
import AutosaveSlider from './Autosave';
import { ShowEngineStats } from './ShowEngineStats';

export function Settings() {
  const gameplay = <AutosaveSlider />;
  const hotkeys = <>Hotkeys here</>;
  const debug = <ShowEngineStats />;

  const tabs: TabbedData[] = [
    { id: 'settings-gameplay', label: 'Gameplay', content: gameplay },
    { id: 'settings-hotkeys', label: 'Hotkeys', content: hotkeys },
    { id: 'settings-debug', label: 'Debug', content: debug },
  ];

  return <TabbedContent tabs={tabs} />;
}
