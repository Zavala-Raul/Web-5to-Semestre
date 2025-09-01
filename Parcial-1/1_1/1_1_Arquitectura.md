# *1_1_Arquitectura*

## *Concepto*
La arquitectura web es, en esencia, el esqueleto de cualquier sitio o aplicación en línea. Se trata de cómo se organizan y se comunican todas sus partes, desde el servidor y la base de datos que trabajan tras bambalinas, hasta la interfaz con la que interactúa el usuario. Una arquitectura bien pensada es clave para que un proyecto digital pueda crecer, mantenerse y adaptarse a futuro con facilidad.

## **Tipos**

### Punto a punto

![Imagen Punto a Punto](https://upload.wikimedia.org/wikipedia/commons/a/a8/Red_punto_a_punto.png)

Existen diferentes maneras de estructurar una aplicación web, cada una con sus propias fortalezas y debilidades.

Conexión Directa: Arquitectura Punto a Punto (Peer-to-Peer)
Este modelo permite que dos dispositivos se comuniquen directamente entre sí, sin necesidad de un intermediario o servidor central. Cada dispositivo actúa como un "par" que puede tanto enviar como recibir información de otros. En pocas palabras, dos computadoras en la misma red pueden intercambiar datos de forma directa.

#### Puntos a favor:

- Eficiencia: La transferencia de datos es más rápida al no tener que pasar por un servidor.

- Robustez: La red se fortalece con más participantes. Si un dispositivo se desconecta, los demás pueden seguir comunicándose sin problemas.

- Autonomía: Los usuarios tienen libertad para configurar la red según sus propias necesidades.

- Ahorro: Al eliminar la necesidad de un servidor central, los costos se reducen, siendo ideal para operaciones pequeñas.

#### Puntos en contra:

- Gestión compleja: A medida que se añaden más dispositivos, la administración de la red se complica.

- Seguridad: Al no haber un punto central de control, la protección de los datos depende de cada nodo individual.

- Vulnerabilidad: Sin defensas centralizadas, la red puede ser más susceptible a ataques.

### Cliente Servidor

![Imagen Cliente Servidor](https://upload.wikimedia.org/wikipedia/commons/1/1c/Cliente-Servidor.png)

Es una de las estructuras más utilizadas. Aquí, los roles están claramente definidos: el cliente (como tu navegador) solicita información o servicios, y el servidor es la máquina central que responde a esas peticiones. Toda la comunicación entre ambos ocurre a través de una red, como Internet.

#### Puntos a favor:

- Mantenimiento centralizado: Las actualizaciones y correcciones se aplican en el servidor, y todos los clientes se benefician de ellas al instante.

- Escalabilidad: Es fácil añadir nuevos clientes a la red sin afectar el rendimiento general.

- Control de acceso: Los administradores pueden gestionar de forma centralizada quién accede a qué recursos, ya que todo pasa por el servidor.

#### Puntos en contra:

- Dependencia del servidor: Si el servidor falla, toda la red se cae y nadie puede acceder a los servicios.

- Costos de infraestructura: Mantener un servidor potente y fiable requiere una inversión considerable en hardware y mantenimiento.

- Excesivo para usos simples: Para proyectos pequeños con pocos usuarios, la complejidad de este modelo puede ser innecesaria.

### Monolito

![Imagen monolito](https://www.javiergarzas.com/wp-content/uploads/2015/06/monolithic.png)

Este es el enfoque tradicional, donde la aplicación se construye como una única unidad. La interfaz de usuario, la lógica de negocio y la gestión de datos están fuertemente acopladas y se ejecutan como un solo programa.

#### Puntos a favor:

-Simplicidad inicial: Es más fácil de desarrollar, probar y desplegar para aplicaciones pequeñas.

-Rendimiento: La comunicación interna entre sus componentes es muy rápida, ya que no depende de una red.

-Pruebas sencillas: Es más fácil realizar pruebas de integración porque todo está en el mismo lugar.

#### Puntos en contra:

-Escalabilidad limitada: Es difícil escalar solo una parte de la aplicación; normalmente hay que escalar todo el conjunto.

-Mantenimiento complejo: A medida que la aplicación crece, se vuelve un "monstruo" difícil de modificar y actualizar.

-Alto riesgo: Un fallo en una pequeña parte puede hacer que toda la aplicación deje de funcionar.

### Capas

![Imagen Capas](https://rjcodeadvance.com/wp-content/uploads/2019/07/Arquitecura-tradicional-en-capas-estilos-de-arquitectura-y-patrones-de-software-1.png)

Este diseño estructura el sistema en niveles o "capas" horizontales, cada una con una responsabilidad específica (por ejemplo, presentación, lógica de negocio, acceso a datos). Cada capa solo se comunica con las capas adyacentes, creando un flujo de trabajo ordenado.

#### Puntos a favor:

- Modularidad: Se pueden modificar o reemplazar capas individuales sin afectar al resto del sistema, agilizando el desarrollo.

- Mantenimiento simplificado: Es más fácil encontrar y solucionar problemas al estar aislados en una capa específica.

- Escalabilidad selectiva: Si una capa tiene mucha carga (por ejemplo, la de datos), se puede escalar de forma independiente.

#### Puntos en contra:

- Mayor complejidad: Requiere un diseño cuidadoso de las interfaces entre capas.

- Desarrollo más lento: Diseñar, construir y probar cada capa por separado puede llevar más tiempo.

- Consumo de recursos: La comunicación entre capas puede añadir una sobrecarga de procesamiento y memoria.

### Microservicios
![Imagen Microservicios](https://whitestack.com/wp-content/uploads/2023/03/micro3.webp)

Este enfoque moderno descompone una gran aplicación en una colección de pequeños servicios independientes. Cada servicio se enfoca en una única tarea de negocio (como gestión de usuarios o procesamiento de pagos) y se comunica con los demás a través de APIs.

#### Puntos a favor:

- Máxima flexibilidad: Cada servicio se puede escalar, actualizar o incluso reescribir con una tecnología diferente sin afectar a los demás.

- Mantenimiento aislado: Los cambios o fallos en un servicio no detienen toda la aplicación.

- Equipos autónomos: Permite que diferentes equipos trabajen en diferentes servicios de forma paralela.

#### Puntos en contra:

- Gestión compleja: Coordinar y monitorear docenas de servicios puede ser un gran desafío operativo.

- Rendimiento de red: La comunicación constante entre servicios puede introducir latencia y afectar la velocidad.

- Pruebas difíciles: Asegurarse de que todos los servicios interactúan correctamente entre sí es más complicado.

### Serverless

![Imagen Serverless](https://dc722jrlp2zu8.cloudfront.net/media/uploads/2021/09/17/1.jpg)

En este modelo, la aplicación se divide en funciones que solo se ejecutan cuando son necesarias. En lugar de tener un servidor funcionando 24/7, el código "despierta" en respuesta a un evento (como un clic de usuario), realiza su tarea y se vuelve a "dormir".

#### Puntos a favor:

- Escalabilidad automática: La plataforma se encarga de ajustar los recursos necesarios en tiempo real según la demanda.

- Costo eficiente: El modelo de "pago por uso" significa que solo se paga por el tiempo exacto en que el código se está ejecutando.

- Desarrollo ágil: Los desarrolladores se centran en escribir la función, y la plataforma (como AWS Lambda o Firebase) se encarga de la infraestructura.

#### Puntos en contra:

- Costoso para tareas largas: Procesos que tardan mucho en completarse pueden ser más caros que en un servidor tradicional.

- Arranque en frío: Si una función no se ha usado en un tiempo, puede tardar un poco en iniciarse la primera vez, lo que podría afectar la experiencia del usuario.