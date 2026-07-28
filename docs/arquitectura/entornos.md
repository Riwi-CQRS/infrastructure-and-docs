---
sidebar_position: 3
title: Entornos y conexión
---

# Entornos del proyecto

Los entornos son **compartidos entre entregas** - el proyecto es incremental
sobre la misma plataforma.

## Entornos activos

| Entorno | URL | Tecnología |
|---|---|---|
| Frontend | https://cqrs.andrescortes.dev | Angular |
| Backend / Swagger | https://api.cqrs.andrescortes.dev | .NET Web API |
| Documentación | https://docs.cqrs.andrescortes.dev | Docusaurus v3 |

## Cómo conectarte a tu base de datos MySQL

Al conectarte por primera vez con un cliente como **DBeaver** o **MySQL Workbench**
usando las credenciales entregadas por el Dashboard, puede aparecer este error:

```text
Public Key Retrieval is not allowed
```

**Causa:** MySQL 8 usa `caching_sha2_password` por defecto y requiere SSL o el
parámetro `allowPublicKeyRetrieval=true` para completar el intercambio de claves.

### Solución en DBeaver

1. Abrir las propiedades de la conexión -> pestaña **Driver Properties**.
2. Buscar `allowPublicKeyRetrieval` y cambiar su valor a `true`.
3. Reconectar.

### Solución en el connection string

```text
jdbc:mysql://host:puerto/nombre_bd?allowPublicKeyRetrieval=true&useSSL=false
```

> Este ajuste es necesario únicamente si tu cliente no tiene SSL configurado.
