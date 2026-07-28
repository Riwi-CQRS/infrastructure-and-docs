---
sidebar_position: 1
title: Resumen ejecutivo
---

# Entrega 02 - Auth & Provisioning

## Estado de cobertura

| Módulo | Casos | Aprobados | Bloqueados | Pendientes |
|---|---|---|---|---|
| Auth | 5 | 5 | 0 | 0 |
| Provisioning | 6 | 3 | 1 | 2 |
| Dashboard | 5 | 0 | 0 | 5 |
| Landing | 5 | 0 | 0 | 5 |
| **Total** | **21** | **8** | **1** | **12** |

## Cambio de requisitos

:::warning Rediseño durante la entrega
El aprovisionamiento pasó de **automático** a **manual** (disparado desde el Dashboard),
y la identidad de usuario se valida por **correo**, no por proveedor OAuth.

Auth y Provisioning se rediseñaron en consecuencia. La ronda de ejecución
anterior quedó archivada en `cqrs-qa` como referencia histórica.
:::

## Hallazgos destacados

| Módulo | Hallazgo | Impacto |
|---|---|---|
| Auth | Menú hamburguesa no despliega en tamaño normal de pantalla | UI - medio |
| Auth | Faltan campos `fechaCreacion`/`esNuevo` en `/api/auth/me` | Backend - medio |
| Provisioning | Connection string no incluye parámetro `allowPublicKeyRetrieval` - cualquier usuario que conecte con DBeaver/Workbench recibe error en el primer intento | UX - medio |
| Provisioning | `GET /api/provisioning/mine` responde con error; auditoría no verificable | Backend - alto |

El detalle completo de cada hallazgo está en `cqrs-qa/entrega-02-auth-provisioning/bugs.md`.

## Repositorio de evidencias

```text
cqrs-qa/
└── entrega-02-auth-provisioning/
    ├── casos-de-prueba/        <- pasos, criterios y resultados detallados
    ├── evidencias/             <- capturas por módulo
    └── checklist-evidencias.md
```
