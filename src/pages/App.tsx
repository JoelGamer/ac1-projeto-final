import { useState, useMemo } from 'react';
import { TabMenu, TabMenuTabChangeParams } from 'primereact/tabmenu';
import Exemplo from './exemplo';
import Home from './home';
import { examples } from '../tasks/examples';
import { Example } from '../@types/types';
import processManager from '../services/process-manager';

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
  const [example, setExample] = useState<Example>();

  const onTabChange = (e: TabMenuTabChangeParams) => {
    setTabIndex(e.index);
    processManager.running = false;

    setExample(examples[e.index - 1])
  };

  return (
    <div>
      <TabMenu activeIndex={tabIndex} model={items} onTabChange={onTabChange} />
      {tabIndex === 0 ? (
        <Home />
      ) : (
        example && <Exemplo example={example} />
      )}
    </div>
  );
}

export default App;
