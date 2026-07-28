---
sidebar_position: 3
title: Provisioning
---

# Provisioning - Resultados de pruebas

> 🔄 En ejecución - 3 aprobados · 1 bloqueado · 2 pendientes

:::info Cambio de diseño
La creación de base de datos es **manual desde el Dashboard**, no automática.
Ver [ADR-001](../../arquitectura/decisiones).
:::

## Qué se probó

| ID | Caso | Prioridad | Resultado |
|---|---|---|---|
| CP-PROV-001 | Creación manual de BD MySQL desde el Dashboard | Alta | ✅ Aprobado |
| CP-PROV-002 | Usuario MySQL generado tiene permisos solo sobre su propia BD | Alta | ✅ Aprobado |
| CP-PROV-003 | Contraseña generada cumple estándares de seguridad | Media | ✅ Aprobado |
| CP-PROV-004 | La creación queda registrada en el log de auditoría | Alta | 🚫 Bloqueado |
| CP-PROV-005 | El sistema respeta el límite de almacenamiento (20 MB) | Media | ⏳ Pendiente |
| CP-PROV-006 | El sistema respeta el límite de 3 bases por usuario | Alta | ⏳ Pendiente |

## Resultados relevantes

**CP-PROV-001 - Creación desde Dashboard**
La base de datos se crea correctamente y aparece de inmediato en el Dashboard
con estado "Activa". La UI muestra el cupo disponible ("1 de 3 bases - puedes crear 2 más"),
confirmando el límite de 3 bases por usuario (ver ADR-004).

**CP-PROV-002 - Aislamiento de permisos**
El usuario MySQL generado tiene `ALL PRIVILEGES` únicamente sobre su propia
base de datos. No puede acceder a otras bases en el mismo servidor - aislamiento
correcto entre clientes.

**CP-PROV-003 - Seguridad de contraseña**
La contraseña generada es aleatoria, de alta longitud y sin patrones reconocibles.
Cumple estándares de seguridad sin necesidad de un mínimo formal definido en contrato.

**CP-PROV-004 - Auditoría (bloqueado)**
El endpoint de auditoría existe en Swagger pero responde con error.
No fue posible verificar el registro de la creación. Ver BUG-010.

## Hallazgos abiertos

- **BUG-009 (medio)** - El connection string entregado por el Dashboard no incluye
  `allowPublicKeyRetrieval=true`. Cualquier usuario que conecte con DBeaver o
  MySQL Workbench sin SSL recibirá un error en su primer intento de conexión.
  Ver la [guía de conexión](../../arquitectura/entornos).
  Se recomienda incluir el parámetro en el connection string mostrado en la UI.

- **BUG-010 (alto)** - `GET /api/provisioning/mine` responde con error.
  CP-PROV-004 queda bloqueado hasta su resolución.
