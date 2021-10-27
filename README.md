# Interfaz de adaptadores 

## Índice

* [Descripción](#Interfaz-de-Apadatadores)
* [Prototipos](#prototipos)
* [Interfaz](#interfaz)
* [Historia de Usuario](#historia-de-usuario)
* [Modo de usuario](#modo-de-usuario)
* [Tecnologias](#tecnologias)
* [Dependencias](#dependencias)
* [Enlace](#enlace)
 
# Descripción

Esta interfaz consiste en nuestra propuesta de solución al reto de Equifax durante el Talent Fest Chile 2021. Está creada pensando en usuarios IT que necesiten poder visualizar, configurar y agilizar el proceso de recuperación de datos en la creación de orquestaciones.

Cada orquestación se realiza utilizando adaptadores que poseen diferentes parámetros de configuración, accediendo a ellos de manera dinámica y así es posible visualizar ágilmente cada adaptador con su respectiva configuración a modificar, pudiendo agregar o eliminar ítems.
 
Finalmente, la orquestación de procesos Batch se puede exportar de manera local en formato yaml, con lo que la configuración se borra de la interfaz para que puedas comenzar una nueva. 

# Prototipo

Es un diseño minimalista dividido en tres secciones. La columna principal contiene los Plugin, que se mostrarán al interactuar con el botón "new", junto a una barra buscadora que filtra. Al elegir el primer adaptador, se despliega columna de en medio, la cual contiene los criterios a configurar. A través de los trash icons podemos eliminar criterios. En ésta columna tenemos dos botones: el de save, que permite guardar la configuración en caso de un cierre inesperado del navegador, y el botón de cancel, que borra la configuración actual para comenzar nuevamente.  Por último, la columna a la derecha contiene la visualización de los Plugin creados, guardados y listos para exportar, junto a un botón de exit que borra la orquestación completa. 
El diseño de la interfaz está hecho de manera que siga un orden secuencial del proceso y sea fácil de identificar los requerimientos del usuario para poder acceder a la información.

![Prototipo](./src/assets/Desktop(2).png)

# Interfaz

En éste apartado es posible ver la interfaz en movimiento.

<img src= "image.gif" ></img>

# Historia de Usuario
 
## 1. Como usuario TI puedo visualizar los Plugins y configurarlos
   
    CRITERIOS DE ACEPTACIÓN

    -El usuario podra acceder al los Plugins a traves de un boton inicial
    -Tener un filtro de busqueda para los plugins 
    -Permitir que cada Plugin se visualice su propia configuracion y interactue de forma dinamica
    -Agregar y eliminar items de la configuracion referente del plugins
    -Guardar la configuracion

    DEFINICIÓN DE TERMINADO

    -Transaformar la data de  yaml a un objeto
    -Seccionar la interfaz en tres columnas
    -En la primera sección se visualiza una barra buscadora y  el boton que despliega los plugins.
    -En la segunda seccion se encuentra la configuración del plugin en formato de formulario, dependiendo del que haya sido seleccionado
    -Se borran y agregar items a la sección de configuración con el parametro correpondiente.
    - Se vacia la configuración con un boton de cancelar
    - Se envia la configuracion a la siguiente sección orchestration 



## 2. Puedo configurar varios plugin creando una orquestación y descargarla en Yaml 

     CRITERIOS DE ACEPTACIÓN

    -Almacenar de manera temporal las configuracion de los plugin creados y visualizarlos en la interfaz
    -Poder seleccionar la dependecia de cada nuevo plugin 
    -Exportar en fomarto YAML en el dispositivo local

    DEFINICIÓN DE TERMINADO

    -Se puede seleccionar la dependecia de cada plugin en el select dependencies.
    - Se visualiza de manera temporal los adaptadores creado en la tercera sección
    -Se exporta la orquestacion en formato YAML al dispositivo local y se puede seleccionar la carpeta de almacenamiento en Navegadores(Opera, Edge y Chrome).
    -Se puede cancelar toda la orquestacion a atraves de un boton de salir. 

# Modo de Usuario 


### Para crear una nueva configuración: 

- El botón "+New" te mostrará los adaptadores disponibles. 

- La barra de búsqueda te permitirá identificar si necesitas un adaptador en particular. 

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

- Recuerda que las opciones de guardado presentan diferentes opciones según el navegador que utilices. 



## Tecnologias  
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

