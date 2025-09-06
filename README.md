# Lab 5 - React Router + Material UI

## Requisitos
- Node.js >= 16
- npm >= 8

## Instalación y ejecución
1. Clona o descarga este repositorio.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Corre el proyecto:
   ```bash
   npm run dev
   ```
4. Abre la URL que aparezca en consola (por default `http://localhost:5173/`).

## Vistas disponibles
- `/login` → Pantalla de inicio de sesión.
- `/home` → Página principal.
- `/dashboard` → Dashboard privado.
- `/reports` → Reports privado.

> Todas las rutas excepto `/login` están protegidas.  
> Si no se ha iniciado sesión, cualquier intento de acceder redirige a `/login`.

## Credenciales por default
- **Usuario:** `Oasis`  
- **Contraseña:** `2025`

## Cómo cambiar usuario/contraseña
Las credenciales están definidas en `src/context/AuthContext.jsx` dentro de la función `login`:

```jsx
const login = (user, pass) => {
  if (user === "Oasis" && pass === "2025") {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
    return true;
  }
  return false;
};
```

Para usar otros valores, simplemente reemplaza `"Oasis"` y `"2025"` por los datos que quieras.

## Logout
En el Header hay un botón **Logout** que:
- Cierra la sesión.
- Limpia el estado guardado en `localStorage`.
- Redirige automáticamente a `/login`.
