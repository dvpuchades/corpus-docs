---
title: Dónde están tus datos
summary: Los datos de salud brutos no salen de tu iPhone. Sólo se envía un resumen estructurado y anonimizado del día — niveles, no biométricos — para generar el coaching, por una conexión cifrada y sin que nada quede en un servidor.
section: privacy
order: 1
updated: 2026-05-05
---

Esta es la versión corta. La [política de privacidad](/es/privacy) es la versión larga y vinculante — léela para el detalle completo.

## Lo que se queda en tu dispositivo

**Todo.** En concreto:

- Cada medida bruta leída de Apple Salud — frecuencia cardíaca, HRV, fases de sueño, pasos, entrenamientos, movilidad, composición corporal, mindfulness, ciclo.
- Tus métricas calculadas y todo su historial.
- Tus registros de hábitos, notas, fotos y respuestas del check-in.
- Tus insights personalizados y las correlaciones detrás de ellos.
- Tus objetivos, resumen del plan y el historial del chat.

Corpus no tiene servidores que guarden nada de esto. Se procesa en tu iPhone, se almacena en tu iPhone y se queda ahí.

## Lo que se envía (y lo que no)

Para generar tu coaching, los planes de entrenamiento y las respuestas del chat, Corpus envía un **resumen estructurado del día** a un servicio de IA por HTTPS. Ese resumen contiene:

- **Niveles de las métricas** — *"Sueño: Regular"*, *"Readiness: Bueno"* — no las medidas brutas detrás de ellos.
- Un **historial de 7 días** de estados de métricas y hábitos registrados.
- Tus **objetivos**, resumen del perfil y plan de entrenamiento actual.
- Tus **notas y respuestas del check-in** (sólo texto).
- **Mensajes del chat** durante una conversación.

Lo que **no** se envía:

- Series temporales brutas de frecuencia cardíaca, HRV u otros biométricos.
- Desglose de fases de sueño ni datos brutos de sueño.
- Rutas de GPS ni streams detallados de entrenamientos.
- Fotos más allá del momento del análisis (ver abajo).

El servicio de IA procesa el resumen en tiempo real y devuelve una respuesta. **No se guarda ningún dato biométrico en servidor más allá de la duración de esa única petición.**

## Tratamiento de fotos

Cuando haces una foto para registrar un hábito, la imagen se envía al servicio de IA para análisis — para describir lo que hay en ella y extraer etiquetas relevantes (por ejemplo identificar comidas en una foto). La imagen se procesa de forma transitoria y **no se guarda en remoto**. La foto original sólo se guarda en tu dispositivo.

## Lo que nunca hacemos

- No vendemos, compartimos ni monetizamos tus datos.
- No usamos analíticas de terceros, publicidad ni SDKs de tracking.
- No requerimos cuenta; no hay registro, ni login, ni perfil en la nube.
- No tenemos funciones sociales — ni feed, ni rankings, ni compartir.

## Por qué lo construimos así

Corpus existe para ayudarte a entender tu cuerpo. Esa misión sólo funciona si confías en nosotros con los datos — así que la arquitectura es la respuesta más simple posible a "¿cómo minimizas el riesgo?". La respuesta fue: no muevas los datos brutos, no guardes nada en servidor, envía sólo lo estrictamente necesario para que el modelo te dé un coaching útil. Lo demás se sigue.
