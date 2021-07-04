import { useState, useMemo } from 'react';
import { TabMenu, TabMenuTabChangeParams } from 'primereact/tabmenu';
import Exemplo from './exemplo';
import Home from './home';
import { examples } from '../tasks/examples';

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home' },
  { label: 'Exemplo 1', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 2', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 3', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 4', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 5', icon: 'pi pi-fw pi-file' },
];

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const example = useMemo(() => examples[tabIndex - 1], [tabIndex]);

  const onTabChange = (e: TabMenuTabChangeParams) => {
    setTabIndex(e.index);
  };

  return (
    <div>
      <TabMenu activeIndex={tabIndex} model={items} onTabChange={onTabChange} />
      {tabIndex === 0 ? (
        <Home />
      ) : (
        <Exemplo example={example} />
      )}
    </div>
  );
}

export default App;
