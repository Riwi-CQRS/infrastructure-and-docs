---
sidebar_position: 2
title: Auth
---

# Auth - Resultados de pruebas

> ✅ Módulo completo - 5/5 aprobados

## Qué se probó

| ID | Caso | Prioridad | Resultado |
|---|---|---|---|
| CP-AUTH-001 | Login con Google - usuario nuevo, sin auto-provisioning | Alta | ✅ Aprobado |
| CP-AUTH-002 | Login con GitHub - usuario nuevo, sin auto-provisioning | Alta | ✅ Aprobado |
| CP-AUTH-003 | Mismo correo con distinto proveedor accede a la misma cuenta | Alta | ✅ Aprobado |
| CP-AUTH-004 | Credenciales visibles tras creación manual de base de datos | Alta | ✅ Aprobado |
| CP-AUTH-005 | Registro manual con correo duplicado es rechazado | Media | ✅ Aprobado |

## Resultados relevantes

**CP-AUTH-001 / CP-AUTH-002 - Login OAuth (Google y GitHub)**
El flujo OAuth funciona correctamente con ambos proveedores. Al autenticarse
por primera vez, el usuario llega al Dashboard sin base de datos asociada,
con una opción visible y clara para crearla manualmente - comportamiento
correcto según ADR-001.

**CP-AUTH-003 - Identidad por correo**
El sistema unifica correctamente la identidad cuando el mismo correo se usa
con distintos proveedores, sin crear registros duplicados - comportamiento
correcto según ADR-002.

**CP-AUTH-004 - Credenciales post-creación**
Los 8 campos de conexión (host, puerto, nombre de BD, usuario, contraseña,
motor, fecha, estado) se muestran correctamente. La contraseña está oculta
por defecto con toggle. Se incluye además un connection string completo
listo para copiar, no contemplado en el contrato original.

**CP-AUTH-005 - Registro con correo duplicado**
El backend rechaza el intento con un error explícito en español.

## Hallazgos abiertos

- **BUG-002** - Faltan campos `fechaCreacion` y `esNuevo` en la respuesta de `/api/auth/me`.
- **BUG-008** - El menú hamburguesa no despliega en tamaño de pantalla normal;
  solo aparece al redimensionar la ventana.
