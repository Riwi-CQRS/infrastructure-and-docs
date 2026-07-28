---
sidebar_position: 1
title: Repositorios y responsables
---

# Equipo y repositorios

## Integrantes y repos

| Repositorio | Responsable(s) | Descripción |
|---|---|---|
| `cqrs-frontend` | Hector | Angular - UI del portal |
| `cqrs-backend` | Cesar, Duvan | .NET Web API - endpoints REST |
| `cqrs-docs` | Todos (coordina Miguel) | Docusaurus - documentación técnica |
| `cqrs-qa` | Miguel | Casos de prueba, evidencia y checklists |

## Convenciones de nomenclatura

### Casos de prueba

- Formato: `CP-<MODULO>-<NUMERO>` - ej. `CP-AUTH-001`
- La numeración se reinicia por módulo en cada entrega si el módulo es nuevo;
  continúa si el módulo se sigue probando en entregas siguientes.

### Evidencias

- Formato: `CP-<MODULO>-<NUMERO>_<descripcion-corta>.png`
- Ubicación: `cqrs-qa/entrega-XX/evidencias/<modulo>/`

### Carpetas de entrega en cqrs-qa

- Formato: `entrega-XX-<nombre-corto>` - ej. `entrega-02-auth-provisioning`
- Cada entrega contiene: `casos-de-prueba/`, `evidencias/` y `checklist-evidencias.md`.
