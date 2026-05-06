---
title: Dónde están tus datos
summary: Tu iPhone es el único sitio donde viven tus datos de salud — no se guarda nada en servidor. Corpus envía un resumen estructurado del día al servicio de IA para el coaching, y pide más detalle bajo demanda sólo cuando el coach lo necesita.
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

## Lo que se envía (y cuándo)

Para generar tu coaching, los planes de entrenamiento y las respuestas del chat, Corpus envía datos a un servicio de IA por HTTPS — bajo demanda, sólo cuando hay una petición que responder. Por defecto se trata de un **resumen estructurado del día** que contiene:

- **Niveles de las métricas** — *"Sueño: Regular"*, *"Disposición: Buena"*.
- Un **historial reciente** de estados de métricas y hábitos registrados.
- Tus **objetivos**, resumen del perfil y plan de entrenamiento actual.
- Tus **notas y respuestas del check-in** (sólo texto).
- **Mensajes del chat** durante una conversación.

Cuando el coach necesita más detalle para responder a una pregunta concreta o producir un mejor insight — *"¿por qué tuve poco sueño profundo anoche?"*, *"¿qué pasó con mi frecuencia cardíaca en esa serie de intervalos?"* — puede pedir datos adicionales a tu dispositivo bajo demanda: la traza de frecuencia cardíaca de un entrenamiento, las fases de sueño de una noche, un historial más amplio. Sólo se envían los datos necesarios para esa petición concreta, y sólo en el momento en que se necesitan.

El servicio de IA procesa lo que recibe en tiempo real y devuelve una respuesta. **No se guarda nada en servidor más allá de la duración de esa única petición.** Los datos se envían, se usan y se descartan — la única copia persistente se queda en tu iPhone.

## Tratamiento de fotos

Cuando haces una foto para registrar un hábito, la imagen se envía al servicio de IA para análisis — para describir lo que hay en ella y extraer etiquetas relevantes (por ejemplo identificar comidas en una foto). La imagen se procesa de forma transitoria y **no se guarda en remoto**. La foto original sólo se guarda en tu dispositivo.

## Lo que nunca hacemos

- No vendemos, compartimos ni monetizamos tus datos.
- No usamos analíticas de terceros, publicidad ni SDKs de tracking.
- No requerimos cuenta; no hay registro, ni login, ni perfil en la nube.
- No tenemos funciones sociales — ni feed, ni rankings, ni compartir.

## Por qué lo construimos así

Corpus existe para ayudarte a entender tu cuerpo. Esa misión sólo funciona si confías en nosotros con los datos — así que la arquitectura es la respuesta más simple posible a "¿cómo minimizas el riesgo?". La respuesta fue: que tu dispositivo sea el único hogar persistente de los datos, no guardar nada en servidor y enviar sólo lo necesario en el momento en que el coach realmente lo necesita. Lo demás se sigue.
