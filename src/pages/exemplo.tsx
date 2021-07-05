import { FC, useMemo, useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Application, ApplicationTask, Example, ExampleApplication, MPSoC } from '../@types/types';
import Processor from '../components/processor';
import { exampleApps } from '../tasks/examples-apps';
import { calculateSpiral } from '../utils/calculate-spiral';
import processManager from '../services/process-manager';
import ProcessorService from '../services/processor';

const buildMPSoC = (mpsoc: MPSoC, maxTasks: number) => {
  for (let i = 0; i < mpsoc.x; i++) {
    for (let j = 0; j < mpsoc.y; j++) {
      const key = `${i}-${j}`;
      let processor;
      
      if (i == 0 && j == 0) {
        processor = new ProcessorService(key, 'GMP');
        processor.element = <Processor key={key} id={key} type="GMP" service={processor} />;

        processManager.addProcessor(processor);
        continue;
      }

      if (i == 0 && j == 1) {
        processor = new ProcessorService(key, 'LMP');
        processor.element = <Processor key={key} id={key} type="LMP" service={processor} />;

        processManager.addProcessor(processor);
        continue;
      }

      processor = new ProcessorService(key, 'SP', maxTasks);
      processor.element =  <Processor key={key} id={key} type="SP" service={processor} />;
      processManager.addProcessor(processor);
    }
  }
};

const displayProcessors = (mpsoc: MPSoC) => {
  const matrix: JSX.Element[] = [];

  for (let i = 0; i < mpsoc.x; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < mpsoc.y; j++) {
      const processor = processManager.getProcessor(`${i}-${j}`)
      if (processor && processor.element) row.push(processor.element);
    }
    matrix.push(<div key={i} className="processador-row">{row}</div>);
  }

  return matrix;
}

const getExampleApps = (apps: ExampleApplication[]) => {
  return apps.reduce<Application[]>((appsToRun, exampleApp) => {
    const application = exampleApps.find((app) => app.name === exampleApp.name)

    if (application) {
      for (let i = 0; i < exampleApp.quantity; i++) {
        appsToRun.push(application);
      }
    }

    return appsToRun;
  }, []);
}

const queryApplicationTask = (task: ApplicationTask, spiral: string[]) => {
  let spiralIndex = 0;
  while (true) {
    const processorIndex = spiral[spiralIndex];
    const added = processManager.addTask(processorIndex, task)
    
    if (added) {
      processManager.getLMPProcessor().addQueuedTask(undefined);
      break;
    };

    spiralIndex++;
  }
};

const Exemplo: FC<ExemploProps> = ({ example }) => {
  const [running, setRunning] = useState(false);
  const [taskManager, setTaskManager] = useState<NodeJS.Timeout>();
  const [processors, setProcessors] = useState<JSX.Element[]>([]);
  const spiral = useMemo(() => calculateSpiral(example.mpsoc.x, example.mpsoc.y), [example.mpsoc]);
  const apps = useMemo(() => getExampleApps(example.apps), [example.apps]);
  const tasks = useMemo(() => apps.reduce<ApplicationTask[]>((tasks, app) => {
    app.tasks.map((task) => {
      tasks.push(task);
    });
    return tasks;
  }, []), [apps]);

  useEffect(() => {
    buildMPSoC(example.mpsoc, example.maxTasksPerProcessor);
    setProcessors(displayProcessors(example.mpsoc));
  }, [example.mpsoc, example.maxTasksPerProcessor]);

  useEffect(() => {
    addEventListener('process-running', () => {
      setRunning(true);
    });
  }, []);

  useEffect(() => {
    if (!running) {
      if (taskManager) clearInterval(taskManager);
    }
  }, [running]);

  useEffect(() => {
    if (!taskManager && running) {
      setTaskManager(setInterval(() => {
        if (tasks.length > 0) {
          const task = tasks.shift();
          console.log('task', task)
          
          if (task) {
            queryApplicationTask(task, spiral);
            processManager.getLMPProcessor().addQueuedTask(tasks[0]);
          };
        } else {
          setRunning(false);
        }
      }, example.timeout));
    }
  }, [running]);
  
  return (
    <div className="exemplo">
      <div className="exemplo-aplicacoes">
        <DataTable value={apps} header="Aplicações" className="p-datatable-sm">
          <Column field="name" header="Nome" />
          <Column field="tasks.length" header="Tarefas" />
        </DataTable>
      </div>
      <div>
        {processors}
      </div>
    </div>
  );
};

export default Exemplo;

interface ExemploProps {
  example: Example
}
