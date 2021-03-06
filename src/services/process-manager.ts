import { ApplicationTask } from '../@types/types';
import ProcessorService from './processor';

class ProcessManager {
  private _processors: ProcessorService[] = [];
  running: boolean = false;

  init() {
    this._processors = [];
  }

  run() {
    if (!this.running) {
      this.running = true;
      this.dispatchProcessManagerEvent('running');
    }
  }

  get processors() {
    return this._processors;
  }

  addTask(index: string, task: ApplicationTask) {
    const processor = this.getProcessor(index);
    if (!processor) throw new Error(`Processor not found! Index: ${index}`);
    if (processor.type !== 'SP') throw new Error(`Processor is not a type SP! Type: ${processor.type}`);
    if (processor.isFull()) return false;

    processor.addTask(task);
    return true;
  }

  getProcessor(index: string) {
    return this._processors.find((processor) => processor.id === index);
  }

  getLMPProcessor() {
    const processor = this._processors.find((processor) => processor.type === 'LMP');

    if (!processor) throw new Error('LMP Processor not found! Using function before processor initialization?');
    return processor;
  }

  addProcessor(processor: ProcessorService) {
    this._processors.push(processor)
  }

  private dispatchProcessManagerEvent(type: string) {
    const event = new CustomEvent(`process-${type}`);
    dispatchEvent(event);
  }
}

export default new ProcessManager();
