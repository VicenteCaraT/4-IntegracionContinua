# Seguimiento — TP4: Integración Continua

## Evidencias registradas

- [x] Falla de código detectada por Semgrep: `evidencias/falla-codigo-semgrep.png`. La captura muestra el hallazgo de `eval` y el job fallido antes de corregir la ruta en la rama `falla-codigo`.

## Pendiente

- [ ] Confirmar que la corrección de `eval` se subió a la rama `falla-codigo`, que Semgrep pasa y fusionar la PR.
- [ ] Probar la dependencia vulnerable y registrar el resultado de `npm audit`.
- [ ] Probar el test roto y registrar el fallo de `npm test`.
- [ ] Corregir y fusionar las PR de dependencia y test.
- [ ] Cerrar sin fusionar la PR del secreto ficticio, conservando la evidencia.
- [ ] Completar retos extra: protección de `main`, Trivy y ZAP.
