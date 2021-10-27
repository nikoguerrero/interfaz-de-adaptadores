# Interfaz de adaptadores 

## Índice

* [Descripción](#descripción)
* [Prototipo](#prototipo)
* [Interfaz](#interfaz)
* [Historia de Usuario](#historia-de-usuario)
* [Modo de usuario](#modo-de-usuario)
* [Tecnologías](#tecnologías)
* [Dependencias](#dependencias)
* [Enlace](#enlace)
 
# Descripción

Este proyecto es nuestra propuesta de solución al reto de Equifax durante el Talent Fest Chile 2021. Está creado pensando en usuarios IT que necesiten poder visualizar, configurar y agilizar el proceso de recuperación de datos en la creación de orquestaciones.
En primer lugar, permite agregar y configurar adaptadores/plugins a las orquestaciones que se desee crear, por lo que la interfaz es capaz de reconocer las distintas estructuras de estos plugins, originalmente en formato Yaml, adaptándose y mostrando lo que se necesite visualizar.
Una vez la orquestación está lista, el usuario puede exportar y guardar en su disco local la información creada.

## Mejoras y optimizaciones
1. Barra buscadora de adaptadores.
2. Panel de orquestación que visualiza los adaptadores agregados a la orquestación.
3. Guardado de datos local. Esto permite que el usuario pueda recuperar su orquesta en caso de cierre de navegador, por ejemplo.
4. Menú dropdown que permite reconocer los adaptadores agregados a la orquestación y asignar dependencias.
5. Validación de ID único.

# Prototipo

El prototipo de alta fidelidad se realizó en Figma y se diseñó pensando en una interfaz simple e intuitiva, en la que respondiéramos a las necesidades del cliente y mejoráramos aquello que nos parecía necesario para el trabajo del público objetivo.

![Desktop(2)](https://user-images.githubusercontent.com/83680798/139112610-b11139d2-83e0-4099-a53f-c80fc6a1eaa7.png)

# Interfaz

# Historia de Usuario
 
###  1. Como usuario TI puedo visualizar los plugins y configurarlos
   
    CRITERIOS DE ACEPTACIÓN

    - El usuario podrá acceder al los plugins a través de un boton inicial.
    - Tener un filtro de búsqueda para los plugins.
    - Permitir que la estructura de los plugins se visualice en la interfaz.
    - Agregar y eliminar ítems de la configuracion.
    - Guardar la configuración.

    DEFINICIÓN DE TERMINADO

    - Se consume la data de archivos yaml y se transforma a un objeto javascript.
    - Seccionar la interfaz en tres columnas.
    - El botón de agregar nuevos plugins nuestra una lista con scroll y una barra de búsqueda.
    - El formulario se adapta a la estructura de los distintos plugins.
    - Se pueden agregar y borrar ítems de la configuración.
    - El botón cancelar limpia la configuración actual.
    - La data se guarda y se envía a la cadena de orquestación con el botón save.



###  2. Puedo agregar distintos plugins a mi orquesta y configurar la data correspondiente

     CRITERIOS DE ACEPTACIÓN

    - Almacenar de manera local la configuración de los plugin añadidos a la orquesta.
    - Si existe, cargar la data local para que el usuario pueda acceder a ella y continuar trabajando en esta orquestación si lo desea.
    - Poder seleccionar la dependecia de cada nuevo plugin.
    - Exportar la data en formato yaml al disco local.

    DEFINICIÓN DE TERMINADO

    - Se puede seleccionar la dependecia de cada plugin en el dropdown "dependencies".
    - Si hay data guardada, se visualiza en el panel de orquestación.
    - Es posible explotar la data de la orquestación en formato YAML al disco local.
    - Se puede seleccionar la carpeta de almacenamiento en Chrome, Opera y Edge. En los otros se descarga automáticamente.
    - El botón delete elimina la orquesta y limpia el contenido local y visual.


# Modo de Usuario 

### Para crear una nueva configuración: 

- El botón "+New" mostrará los adaptadores disponibles. 
- La barra de búsqueda permitirá identificar si necesitas un adaptador en particular. 
- Al elegir un adaptador podrás ver en la columna central su configuración con sus campos predeterminados y los que puedes modificar fácilmente en cada input. 
- En caso de que quieras eliminar alguno, sólo debes clickear el trash can correspondiente. 
- Recuerda que cada ID debe ser único.

### Para guardar una configuración: 

- Utiliza el botón "save" al pie de la columna central.
- Si no guardas y se cierra accidentalmente la configuración, perderás el trabajo realizado. 

### Para borrar una configuración: 

- Utiliza el botón "Cancel" al pie de la columna central. 

### Para borrar una orquestación completa

- Utiliza el botón rojo "Delete" al pie de la  columna derecha. 
- Recuerda que si borras la orquestación completa usando el botón "Delete", ya no podrás recuperarla aunque hayas guardado una configuración con "Save". 

### Para descargar mi orquestación en formato yaml: 

- Utiliza el botón "Export" al pie de la columna derecha. 
- Si te arrepientes durante el proceso, puedes cancelar la exportación y tu contenido seguirá intacto.
- Recuerda que las opciones de guardado presentan diferentes opciones según el navegador que utilices. 


## Tecnologías  
- Javascript
- React.JS
- Bootstrap 5
- HTML5 
- CSS

## Dependencias
- js-yaml
- react-select

## Enlace

[The Rat Pack Solution 🐀](https://equifaxinterfacechallenge.netlify.app/)

