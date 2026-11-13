# Seguimiento — TP4: Integración Continua

## Evidencias de fallas detectadas

- [x] La rama `falla-secreto` mostró la detección del token ficticio con Gitleaks. La PR se conserva sin fusionar.
- [x] La rama `falla-codigo` mostró el hallazgo de `eval` por Semgrep: `evidencias/falla-codigo-semgrep.png`.
- [x] La rama `falla-libreria` mostró la vulnerabilidad alta de Lodash: `evidencias/falla-libreria-npm-audit.png`.

## Estado de correcciones

- [x] Código inseguro corregido en la rama `falla-codigo`; resta confirmar el estado de fusión.
- [x] Lodash vulnerable quitado de `package.json` y `package-lock.json`; commit creado en `falla-libreria`.
- [ ] Confirmar que el pipeline de la PR `falla-libreria` queda verde y fusionarla.
- [ ] Ejecutar y corregir la rama `falla-test`.
- [ ] Cerrar la PR del secreto sin fusionarla y conservar evidencia.
- [ ] Completar retos extra: protección de `main`, Trivy y ZAP.
