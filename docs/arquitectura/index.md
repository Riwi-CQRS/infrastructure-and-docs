---
sidebar_position: 1
title: Overview
---

# Arquitectura del sistema

CQRS Engine separa las operaciones de **lectura (Query)** y **escritura (Command)**
para escalar cada flujo de forma independiente.

## Componentes principales

```text
┌─────────────────────────────────────────────┐
│               cqrs-frontend                 │
│           Angular - UI del portal           │
└───────────────────┬─────────────────────────┘
                    │ HTTP / REST
┌───────────────────▼─────────────────────────┐
│               cqrs-backend                  │
│         .NET Web API - endpoints            │
│  Commands → Write DB   Queries → Read DB    │
└───────────┬───────────────────┬─────────────┘
            │                   │
    ┌───────▼───────┐   ┌───────▼───────┐
    │  Write Store  │   │  Read Store   │
    │  SQL Server   │   │  SQL Server   │
    └───────────────┘   └───────────────┘
```

## Principios de diseño

- **CQRS**: comandos y consultas viajan por rutas separadas.
- **Event Sourcing**: el estado se reconstruye desde eventos; trazabilidad completa.
- **Database-Centric**: los Stored Procedures son la capa de lógica de datos.
- **Hardening**: acceso directo a SQL Server bloqueado desde fuera de la VPS
  (UFW + Fail2ban). Solo el backend puede conectarse a la base de datos.
