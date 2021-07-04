import { ApplicationTask, ExampleApplication, ProcessorType } from '../@types/types';

class ProcessorService {
  readonly id: string;
  readonly type: ProcessorType;
  readonly maxTasks: number | undefined;
  tasks: ApplicationTask[] = [];
  queuedTask: ApplicationTask | undefined;
  element: JSX.Element | undefined;
  isRunning: boolean = false;

  constructor(id: string, type: ProcessorType, maxTasks?: number) {
    this.id = id;
    this.type = type;
    this.maxTasks = maxTasks;
  }
  
  addTask(task: ApplicationTask) {
    this.tasks.push(task);
    this.dispatchProcessorEvent('tasks');

    if (!this.isRunning) this.executeTask(task);
  }

  addQueuedTask(task: ApplicationTask | undefined) {
    if (this.type !== 'LMP') {
      console.warn(`Using LMP functionality on a non LMP Processor! Processor Type: ${this.type}`);
      return;
    }

    this.queuedTask = task;
    this.dispatchProcessorEvent('queuedTask');
  }
  
  isFull() {
    if (!this.maxTasks) return false;
    return this.tasks.length >= this.maxTasks;
  }

  private getNextTask() {
    if (this.tasks.length > 0) return this.tasks[0];
    return undefined;
  }

  private async executeTask(task: ApplicationTask) {
    this.isRunning = true;

    await new Promise(r => setTimeout(r, task.load));
    setTimeout(() => {
      this.tasks.shift();
      this.dispatchProcessorEvent('tasks');

      const task = this.getNextTask();
      this.isRunning = false;

      if (task) this.executeTask(task);
    }, task.executionTime);
  }

  private dispatchProcessorEvent(type: string) {
    const event = new CustomEvent(`processor-${this.id}-${type}`);
    dispatchEvent(event);
  }
}

export default ProcessorService;
