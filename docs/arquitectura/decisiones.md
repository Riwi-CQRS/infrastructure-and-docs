---
sidebar_position: 2
title: Decisiones técnicas
---

# Decisiones técnicas (ADRs)

## ADR-001 - Aprovisionamiento manual desde Dashboard

**Contexto:** el diseño original contemplaba aprovisionamiento automático al registrar un usuario.

**Decisión:** el aprovisionamiento pasó a ser **manual**, disparado explícitamente
desde el Dashboard por el usuario.

**Razón:** mayor control sobre el ciclo de vida de los recursos; evita
aprovisionamientos huérfanos por registros incompletos.

---

## ADR-002 - Identidad de usuario por correo electrónico

**Contexto:** la identidad inicialmente se validaba por proveedor OAuth.

**Decisión:** la identidad se valida **por correo electrónico**. Si dos proveedores
distintos usan el mismo correo, se considera la misma cuenta y el sistema
redirige al usuario existente.

**Razón:** simplifica el flujo de autenticación y evita duplicados entre proveedores.

---

## ADR-003 - SQL Server cerrado al exterior

**Decisión:** el puerto de SQL Server no es accesible desde fuera de la VPS.
UFW + Fail2ban bloquean cualquier intento de conexión directa.

**Razón:** hardening de seguridad por diseño, no por limitación operativa.

---

## ADR-004 - Límite de 3 bases de datos por usuario

**Decisión:** cada usuario puede aprovisionar hasta **3 bases de datos MySQL**.
La UI muestra el cupo disponible en todo momento.
