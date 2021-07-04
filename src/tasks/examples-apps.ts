import { Application } from '../@types/types';

export const exampleApps: Application[] = [
  {
    name: 'Application0',
    tasks: [
      {
        id: 0,
        load: 1500,
        executionTime: 3000,
        priority: 0,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 300
          }
        ]
      },
      {
        id: 1,
        load: 2700,
        executionTime: 1000,
        priority: 4,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 400
          },
          {
            id: 1,
            loadCommunication: 150
          }
        ]
      }
    ]
  },
  {
    name: 'Application1',
    tasks: [
      {
        id: 0,
        load: 700,
        executionTime: 10000,
        priority: 1,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 150
          },
          {
            id: 1,
            loadCommunication: 200
          }
        ]
      },
      {
        id: 1,
        load: 5000,
        executionTime: 1200,
        priority: 10,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 550
          }
        ]
      },
      {
        id: 2,
        load: 2500,
        executionTime: 2500,
        priority: 5,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 400
          },
          {
            id: 1,
            loadCommunication: 300
          },
          {
            id: 3,
            loadCommunication: 200
          },
          {
            id: 4,
            loadCommunication: 100
          }
        ]
      }
    ]
  },
  {
    name: 'Application2',
    tasks: [
      {
        id: 0,
        load: 1500,
        executionTime: 3000,
        priority: 0,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 300
          }
        ]
      },
      {
        id: 1,
        load: 2700,
        executionTime: 1000,
        priority: 4,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 400
          },
          {
            id: 1,
            loadCommunication: 150
          }
        ]
      }
    ]
  },
  {
    name: 'Application3',
    tasks: [
      {
        id: 0,
        load: 1500,
        executionTime: 3000,
        priority: 0,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 300
          }
        ]
      },
      {
        id: 1,
        load: 2700,
        executionTime: 1000,
        priority: 4,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 400
          },
          {
            id: 1,
            loadCommunication: 150
          }
        ]
      }
    ]
  },
  {
    name: 'Application4',
    tasks: [
      {
        id: 0,
        load: 1500,
        executionTime: 3000,
        priority: 0,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 300
          }
        ]
      },
      {
        id: 1,
        load: 2700,
        executionTime: 1000,
        priority: 4,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 400
          },
          {
            id: 1,
            loadCommunication: 150
          }
        ]
      }
    ]
  },
  {
    name: 'Application5',
    tasks: [
      {
        id: 0,
        load: 9000,
        executionTime: 15000,
        priority: 22,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 1000
          },
          {
            id: 1,
            loadCommunication: 1200
          },
          {
            id: 2,
            loadCommunication: 3000
          },
          {
            id: 3,
            loadCommunication: 2500
          },
          {
            id: 4,
            loadCommunication: 500
          }
        ]
      },
    ]
  },
  {
    name: 'Application6',
    tasks: [
      {
        id: 0,
        load: 1500,
        executionTime: 3000,
        priority: 0,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 300
          }
        ]
      },
      {
        id: 1,
        load: 2700,
        executionTime: 1000,
        priority: 4,
        taskCommunications: [
          {
            id: 0,
            loadCommunication: 400
          },
          {
            id: 1,
            loadCommunication: 150
          }
        ]
      }
    ]
  }
]