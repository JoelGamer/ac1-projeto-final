import { useState, useMemo } from 'react';
import { TabMenu, TabMenuTabChangeParams } from 'primereact/tabmenu';
import Exemplo from './exemplo';
import Home from './home';
import { examples } from '../tasks/examples';
import { Example } from '../@types/types';
import processManager from '../services/process-manager';
import About from './about';

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home' },
  { label: 'Exemplo 1', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 2', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 3', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 4', icon: 'pi pi-fw pi-file' },
  { label: 'Exemplo 5', icon: 'pi pi-fw pi-file' },
  { label: 'Sobre', icon: 'pi pi-fw pi-info-circle' },
];

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [example, setExample] = useState<Example>();

  const onTabChange = (e: TabMenuTabChangeParams) => {
    setTabIndex(e.index);
    processManager.running = false;

    setExample(examples[e.index - 1])
  };

  const display = () => {
    switch (tabIndex) {
      case 0:
        return <Home />
      case 6:
        return <About />
      default:
        return example ? <Exemplo example={example} /> : <></>
    }
  }

  return (
    <div>
      <TabMenu activeIndex={tabIndex} model={items} onTabChange={onTabChange} />
      {display()}
    </div>
  );
}

export default App;
