import { FC, useEffect, useState, useMemo } from 'react';
import { ApplicationTask, ProcessorType } from '../@types/types';
import processManager from '../services/process-manager';
import ProcessorService from '../services/processor';

const MaxTasksText: FC<MaxTasksTextProps> = (props) => {
  const text = useMemo(() => {
    if (!props.maxTasks) return '';
    if ((props.currentTasks || 0) >= props.maxTasks) return 'CHEIO'

    return `${props.currentTasks}/${props.maxTasks}`
  }, [props.currentTasks, props.maxTasks])

  return (
    <p>{text}</p>
  );
};

const QueuedTaskText: FC<QueuedTaskTextProps> = ({ task }) => {
  const text = useMemo(() => {
    if (!task) return '...';
    
    return `Queued Task ID: ${task.id}`;
  }, [task]);

  return (
    <p>{text}</p>
  );
};

const Processor: FC<ProcessorProps> = ({ service, ...props }) => {
  const [queuedTask, setQueuedTask] = useState<ApplicationTask | undefined>(undefined);
  const [currentTasks, setCurrentTasks] = useState(service.tasks.length);

  const onProcessorClick = () => {
    if (service.type !== 'GMP') return;
    processManager.run();
  };

  useEffect(() => {
    addEventListener(`processor-${props.id}-tasks`, (() => {
      setCurrentTasks(service.tasks.length);
    }));

    if (service.type === 'LMP') {
      addEventListener(`processor-${props.id}-queuedTask`, (() => {
        setQueuedTask(service.queuedTask);
      }));
    }
  }, []);

  return (
    <div className={`processador-${props.type}`} onClick={onProcessorClick}>
      <div className="text-content">
        <p>{props.type}</p>
        {props.type === 'SP' && <MaxTasksText currentTasks={currentTasks} maxTasks={service.maxTasks} />}
        {props.type === 'LMP' && <QueuedTaskText task={queuedTask} />}
      </div>
    </div>
  )
};

export default Processor;

interface MaxTasksTextProps {
  currentTasks?: number;
  maxTasks?: number;
}

interface QueuedTaskTextProps {
  task: ApplicationTask | undefined;
}

export interface ProcessorProps {
  id: string;
  type: ProcessorType;
  service: ProcessorService;
}
