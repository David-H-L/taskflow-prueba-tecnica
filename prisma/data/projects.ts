import { Priority, TaskStatus } from '@/generated/prisma/enums';

//Note: Here you can see a few example data entries.
// Feel free to change them to examples in your own language
// Currently, I have created three projects with five tasks for each project.

export const projects = [
  {
    name: 'Aplicación TaskFlow',
    description: 'Proyecto para gestionar tareas de manera eficiente',
    color: '#6366f1',
    tasks: [
      {
        title: 'Configurar proyecto Next.js',
        description: 'Inicializar proyecto con Next.js y TypeScript',
        status: TaskStatus.COMPLETED,
        priority: Priority.HIGH,
      },
      {
        title: 'Configurar Prisma',
        description: 'Conectar Prisma con PostgreSQL',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.HIGH,
      },
      {
        title: 'Diseñar esquema de base de datos',
        description: 'Definir modelos y relaciones',
        status: TaskStatus.COMPLETED,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Crear interfaz del panel de proyectos',
        description: 'Implementar componentes de interfaz para proyectos',
        status: TaskStatus.PENDING,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Implementar CRUD de tareas',
        description: 'Crear rutas API para gestionar tareas',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.HIGH,
      },
    ],
  },

  {
    name: 'Productividad Personal',
    description: 'Organizar actividades personales diarias',
    color: '#22c55e',
    tasks: [
      {
        title: 'Entrenamiento matutino',
        description: '30 minutos de ejercicio cardiovascular',
        status: TaskStatus.PENDING,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Leer un libro de programación',
        description: 'Leer al menos 20 páginas',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.LOW,
      },
      {
        title: 'Planificar objetivos semanales',
        description: 'Escribir objetivos para la próxima semana',
        status: TaskStatus.COMPLETED,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Limpiar espacio de trabajo',
        description: 'Organizar el escritorio y eliminar distracciones',
        status: TaskStatus.PENDING,
        priority: Priority.LOW,
      },
      {
        title: 'Practicar desafíos de programación',
        description: 'Resolver al menos 2 problemas de algoritmos',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.HIGH,
      },
    ],
  },

  {
    name: 'Aprendiendo Desarrollo Backend',
    description: 'Mejorar habilidades de desarrollo backend',
    color: '#f59e0b',
    tasks: [
      {
        title: 'Aprender Prisma ORM',
        description: 'Comprender migraciones, modelos y relaciones',
        status: TaskStatus.COMPLETED,
        priority: Priority.HIGH,
      },
      {
        title: 'Estudiar indexación en PostgreSQL',
        description:
          'Aprender cómo los índices mejoran el rendimiento de consultas',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Construir API REST',
        description: 'Crear endpoints para proyectos y tareas',
        status: TaskStatus.PENDING,
        priority: Priority.HIGH,
      },
      {
        title: 'Implementar autenticación',
        description: 'Agregar inicio de sesión y autenticación JWT',
        status: TaskStatus.PENDING,
        priority: Priority.HIGH,
      },
      {
        title: 'Escribir pruebas de backend',
        description: 'Agregar pruebas unitarias y de integración',
        status: TaskStatus.PENDING,
        priority: Priority.MEDIUM,
      },
    ],
  },
];
