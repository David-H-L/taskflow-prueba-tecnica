# Aplicación de Gestión de Proyectos y Tareas

La siguiente aplicación ayudara a todos los que requieran gestionar sus proyectos o tareas en sus respectivas areas que se dedican. De esta manera los usuarios seran podran gestionar todos sus proyectos mediante el penal prinpal de la aplicación que muestra a detalle todos sus datos registrados hasta el momento, finalmente esta aplicación no requiere de autenticación de usuario por este motivo es de uso individual.

**Nota: La aplicación web es para la version de pc y responsive a móvil.**

# Aplicación web

- Link de la aplicación 👉 [https://taskflow-prueba-tecnica-six.vercel.app/](https://taskflow-prueba-tecnica-six.vercel.app/)

# Tecnologías utilizadas

- React v 19.2.3
- TypeScript
- Tailwind CSS v 4
- Postgresql
- Prisma v 7.4.2
- Next 16.1.6
- Node v 24.11.1

## Librerias

- sweetalert2 v 11.26.22
- prettier v 3.8.1
- fontawesome v 7.2.0


## Decisiones tecnicas

SWEETALERT2: Cuenta con muchos modals responsive de confirmación, pregunta, exito, error, entre otros. Se utilizaron en este proyecto por que ayuda a desarrollar los proyectos mas rapidos ya que contamos con modals desarrollados y tambien temos la posibilidad de motificarlos si queremos algo mas personalizado. Con esto no tenemos que desarrollar desde cero y podemos utilizar algo ya creado con la posibilidad de mejorarlo.

PRETTIER: En este proyecto se utilizo prettier ya que nos ayuda a los desarrolladores a tener un estandar para trabajar en un quipo, podemos colocar en prettier configuraciones para que el codigo en todo el proyecto tome ese formato, de esa manera se tiene un codigo mas ordenado siguiendo los estandares que el equipo configura en prettier al iniciar un proyecto.

FONTAWESOME: Contamos muchos iconos para utilizarlos en nuestras interfaces, soluciona el problema de estar buscando iconos en internet o usar imagenes en los componentes de nuestra interfaz. en fontawesome podemos buscar directamente el icono que necesitamos utilizar para las interfaces de usuario, pero tiene una limitación, muchos de sus iconos son de paga pero tambien se puede utilizar otros gratis. Se puede utilizar en proyectos pequeños como este pero no en grandes a menos que cuentes con la versión de paga.






## Como usar

```
    # Ejecutar en la consola de vscode los siguientes comandos.
    git clone https://github.com/David-H-L/taskflow-prueba-tecnica.git
    cd taskflow-prueba-tecnica
    pnpm install
    pnpm install sweetalert2
    pnpm install prettier
    pnpm add prisma @types/pg --save-dev
    pnpm add @prisma/client @prisma/adapter-pg pg dotenv
    pnpm prisma init
    pnpm prisma migrate dev --name init
    pnpm prisma generate
    pnpm add -D tsx
    pnpm prisma db seed
    pnpm add @fortawesome/react-fontawesome
    pnpm add @fortawesome/free-regular-svg-icons
    pnpm add @fortawesome/fontawesome-svg-core
    pnpm add @fortawesome/free-solid-svg-icons

    pnpm install react-router-dom
    pnpm run dev    
```

## Variables de entorno necesarias

Para conectarte con la base de datos de postgresql en tu entorno local unicamente reemplazamos las siguientes variables de entorno.

- USER_DB
- YOUR_PASSWORD
- DB_NAME

```
    DATABASE_URL="postgresql://USER_DB:YOUR_PASSWORD@localhost:5432/DB_NAME"
```

Nota: el comando tiene que estar dentro de tu archivo .env


## Capturas de pantalla de la aplicación 

### Para computadora:

![git](/public//img/dashboard.png)

![git](/public//img/proyectos.png)

![git](/public//img/editar_proyecto.png)

![git](/public//img/crear_proyecto.png)

### Para celular:

![git](/public//img/dashboard_mobile.png)

![git](/public//img/proyectos_mobile.png)


## Flujo de trabajo utilizado

- GitFlow


## Problemas durante el desarrollo

Principalmente tenia muchos problemas con el tipado de TypeScript, con las interfaces y label. Pero se implemento todas las interfaces con el CRUD
