# Empowering Phrases App 💡

📝 Descripción
Empowering Phrases es una aplicación web interactiva diseñada para gestionar frases motivadoras. Permite a los usuarios realizar un ciclo completo de CRUD (Crear, Leer, Actualizar y Borrar) sobre frases y sus respectivos autores. El proyecto aplica la metodología de Atomic Design para crear una interfaz modular, escalable y totalmente adaptable a dispositivos móviles.

🚀 Demo y Maquetas
Diagrama de flujo: https://miro.com/app/board/uXjVGcJuHvI=/

Diseño en Figma: https://www.figma.com/design/2fAClDYGHQfpY8SPI3AQxl/Diario-del-Pensador?node-id=25-3&t=0l5hN7LBQHUEB8vN-1

Tablero de Trello: https://trello.com/invite/b/69394aa289a842c61ad5a400/ATTI1724416b78c9306397ed5308aa4d77d1E09FF91C/empowering-phrases-app


🛠️ Tecnologías y Herramientas
Core: React.js (Componentes funcionales y Hooks).
Estilos: CSS3 / [Sass o Framework utilizado].
Arquitectura: Metodología Atomic Design.
Control de Versiones: Git & GitHub.
Entorno de Desarrollo: Visual Studio Code.

🧩 Arquitectura: Atomic Design
Para este proyecto hemos dividido la interfaz en:
Átomos: Botones de acción, inputs de texto, títulos.
Moléculas: Grupos de input con etiquetas, tarjetas de autor.
Organismos: Formulario de registro de frases, listado dinámico de tarjetas.
Templates: Estructura de layout (Header, Main, Footer).
Pages: Vista principal Home con lógica de estado.

📋 Planificación y Sprints
El proyecto se dividió en 2 Sprints:
Sprint 1: Maquetación, definición de componentes atómicos y lógica básica de visualización.
Sprint 2: Implementación del CRUD completo, persistencia en localStorage y optimización responsive.

Userflow
El usuario entra y ve la lista de frases existentes.
El usuario completa el formulario (Frase + Autor).
Al hacer clic en "Guardar", la frase aparece en la lista.
El usuario puede editar una frase existente o eliminarla.

⚙️ Requisitos Funcionales
Listar todas las frases con su autor.
Crear nuevas frases (con validación de autor anónimo).
Editar contenido y autor de frases existentes.
Eliminar frases de la lista.

💻 Instalación
Si quieres ejecutar este proyecto localmente:
1.Clona el repositorio:
bash
git clone https://github.com/lorenasferreira/diario-del-pensador.git

2.Entra en la carpeta:
bash
cd empowering-phrases

3.Instala las dependencias:
bash
npm install

4.Lanza la aplicación:
bash
npm run dev

👥 Equipo
Sukaina - ScrumMaster
María José - Product Owner
Lorena - Desarrolladora
Geraldine - Desarrolladora

📝 Notas del Code Review
Durante el desarrollo se priorizó el uso de:
useState: Para el manejo del array de frases y el estado de edición.
useEffect: Para sincronizar los cambios con el almacenamiento local.
Props: Para la comunicación eficiente entre componentes atómicos.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
