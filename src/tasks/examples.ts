import { Example } from '../@types/types';

export const examples: Example[] = [
  {
    mpsoc: {
      x: 5,
      y: 5
    },
    cluster: {
      x: 5,
      y: 5
    },
    timeout: 1000,
    maxTasksPerProcessor: 2,
    apps: [
      {
        name: 'Application0',
        quantity: 2
      },
      {
        name: 'Application1',
        quantity: 1
      },
      {
        name: 'Application5',
        quantity: 3
      }
    ]
  },
  {
    mpsoc: {
      x: 4,
      y: 9
    },
    cluster: {
      x: 5,
      y: 5
    },
    maxTasksPerProcessor: 3,
    timeout: 1500,
    apps: [
      {
        name: 'Application1',
        quantity: 1
      },
      {
        name: 'Application2',
        quantity: 1
      },
      {
        name: 'Application3',
        quantity: 2
      }
    ]
  },
  {
    mpsoc: {
      x: 6,
      y: 9
    },
    cluster: {
      x: 5,
      y: 5
    },
    maxTasksPerProcessor: 1,
    timeout: 900,
    apps: [
      {
        name: 'Application2',
        quantity: 2
      }
    ]
  },
  {
    mpsoc: {
      x: 2,
      y: 3
    },
    cluster: {
      x: 5,
      y: 5
    },
    maxTasksPerProcessor: 2,
    timeout: 3000,
    apps: [
      {
        name: 'Application3',
        quantity: 2
      }
    ]
  },
  {
    mpsoc: {
      x: 5,
      y: 4
    },
    cluster: {
      x: 5,
      y: 5
    },
    maxTasksPerProcessor: 2,
    timeout: 2500,
    apps: [
      {
        name: 'Application4',
        quantity: 2
      }
    ]
  }
]