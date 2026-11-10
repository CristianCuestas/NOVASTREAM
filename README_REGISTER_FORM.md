NovaStreams: Módulo de Registro

Descripción del módulo

El formulario de registro ("register.html") permite que un nuevo usuario cree su cuenta en NovaStreams. Los datos que captura son la base para el inicio de sesión, el perfil del usuario y la vinculación con sus plataformas de streaming.

Autor del módulo: Keiver Martínez

Datos que captura

| Campo | Tipo de entrada | Validación actual (HTML) |
|---|---|---|
| Nombres | Texto | Obligatorio |
| Apellidos | Texto | Obligatorio |
| País | Lista desplegable | Obligatorio |
| Nombre de usuario | Texto | Obligatorio |
| Correo | Correo electrónico | Obligatorio, formato de correo |
| Teléfono | Teléfono | Obligatorio |
| Contraseña | Contraseña | Obligatoria, mínimo 8 caracteres |
| Confirmar contraseña | Contraseña | Obligatoria, mínimo 8 caracteres |
| Términos y condiciones | Casilla | Obligatoria |
| Vinculación de cuenta | Enlaces (YouTube, Twitch, TikTok) | Pendiente de implementar |

Cómo interactúa con los otros módulos

El formulario de registro creado en "register.html" captura los datos personales y de acceso del usuario. Estos datos, en un entorno real, serían enviados al "Backend", que los validaría y luego los almacenaría en una Base de Datos.

Flujo conceptual

1. El usuario llena el formulario y el navegador valida lo básico (campos obligatorios, formato de correo, longitud mínima de la contraseña).
2. El formulario envía los datos al backend.
3. El backend debe verificar que las contraseñas coincidan, que el correo y el nombre de usuario no estén ya registrados, y que la contraseña se almacene cifrada (nunca en texto plano).
4. Si todo es correcto, se guarda el usuario en la base de datos y se redirige al inicio de sesión.

Conexión con otras páginas y módulos

| Módulo | Relación con el registro |
|---|---|
| Inicio de sesión ("login.html") | El enlace "Inicia sesión" lleva a este módulo; tras registrarse, el usuario entra por aquí. |
| Términos y condiciones ("terms.html") | Se abre en una pestaña nueva desde la casilla. |
| Vinculación con YouTube, Twitch y TikTok | Los botones están como maqueta; la integración real dependería de la autenticación de cada plataforma y modificaciones futuras. |

Relación con las materias del proyecto

- "Lógica de programación:" la validación de datos (contraseñas iguales, correo único, campos completos) es lógica condicional que se implementará a futuro.
- "Metodologías de la programación:" cada integrante trabaja su módulo en el repositorio compartido con Github, se programan reuniones para la validación de lo realizado y se determinan las nuevas implementaciones o modificaciones.

Diseño responsivo

| Ancho de pantalla | Comportamiento |
|---|---|
| Más de 900 px | Dos columnas: logo a la izquierda, formulario a la derecha |
| 900 px o menos | Los bloques se apilan en una sola columna |
| 600 px o menos | Los campos de cada fila del formulario quedan uno debajo del otro |

Estructura de archivos

```
├── register.html
├── css/
│   └── register.css
└── images/
    ├── NovaStreams.svg
    ├── GoogleLogo.png
    ├── TwitchLogo.png
    └── TikTokLogo.png
```