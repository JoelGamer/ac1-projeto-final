interface MPSoC {
  x: number;
  y: number;
}

interface Cluster {
  x: number;
  y: number;
}

type ApplicationNameTemplate = 'Application';
type ApplicationID = '0' | '1' | '2' | '3' | '4' | '5' | '6';

type ApplicationName = `${ApplicationNameTemplate}${ApplicationID}`

interface ExampleApplication {
  name: ApplicationName;
  quantity: number
}

export interface Example {
  mpsoc: MPSoC;
  cluster: Cluster;
  maxTasksPerProcessor: number;
  timeout: number;
  apps: ExampleApplication[];
}

interface ApplicationTaskCommunications {
  id: number;
  loadCommunication: number;
}

export interface ApplicationTask {
  id: number;
  load: number;
  executionTime: number;
  priority: number;
  taskCommunications: ApplicationTaskCommunications[];
}

export interface Application {
  name: ApplicationName;
  tasks: ApplicationTask[];
}

export type ProcessorType = 'SP' | 'GMP' | 'LMP';

export interface Processor {
  type: ProcessorType
  maxTasks?: number
  tasks?: any[]
  apps?: ExampleApplication[]
  isRunning?: boolean
  runningMessage?: string
}