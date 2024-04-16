# DragonComentario

## Descripción

La clase `DragonComentario` que representa a un dragón. La clase tiene atributos como edad, nombre, color y capacidad de vuelo, así como métodos para establecer y obtener estos atributos, describir al dragón y determinar qué puede escupir según su color.

## Funcionalidades

- **Inicialización:** La clase `DragonComentario` se puede inicializar con valores predeterminados para la edad y la capacidad de vuelo, o se pueden proporcionar valores personalizados.
- **Establecimiento y obtención de atributos:** Se proporcionan métodos para establecer y obtener la edad, nombre, color y capacidad de vuelo del dragón.
- **Descripción del dragón:** Se puede obtener una descripción del dragón, que incluye su edad, nombre, color y si puede volar.
- **Escupir:** El dragón puede escupir diferentes cosas según su color.

## Uso

Para utilizar la clase `DragonComentario` en tu propio proyecto, simplemente copia el código fuente de `DragonComentario.java` en tu proyecto Java. Luego, puedes crear instancias de la clase y usar sus métodos según sea necesario.

```java
// Ejemplo de uso
DragonComentario dragon = new DragonComentario(100, "Draco", "rojo", true);
System.out.println(dragon.toString());
System.out.println("El dragón escupe: " + dragon.escupir());
