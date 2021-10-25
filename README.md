# Interfaz de adaptadores 

## Índice

* [Descripción](#Interfaz-de-Apadatadores)
* [Prototipos](#prototipos)
* [Interfaz](#interfaz)
* [Historia de Usuario](#historia-de-usuario)
* [Modo de usuario](#modo-de-usuario)
* [Tecnologias](#tecnologias)
* [Link](#link)
 
# Descripción

Es una interfaz creada para usuarios IT, que necesitan poder visualizar y configurar de manera más rápida y agilizar el proceso de recuperación de datos.
 
Utilizando los adaptadores que poseen diferentes parámetros de configuración, accediendo a ellos de manera dinámica y así visualizar ágilmente cada adaptador con su respectiva configuración a modificar, pudiendo agregar o eliminar ítems.
 
Creando una orquestación de procesos Batch   que se pueden exportar de manera local en formato yaml.


<!-- Su funcionamiento consiste en crear  orquestación de procesos Batch tiene distintas etapas o pasos. Cada uno de estos
pasos, ejecuta un objeto conocido como “adaptador”. Al mismo tiempo, este adaptador es
una clase Java que define la lógica de transformación de datos que se desee.
Los adaptadores podrían requerir una cantidad diferente de parámetros. Estos parámetros
ayudan a la configuración de transformación que se requiere y están definidos en formato
YAML. Los parámetros pueden ser: Key-value, List, Map.
El proceso declarado anteriormente entrega como resultado un archivo YAML, el cual
contiene parámetros y configuración definida por el usuario y sera exportada y almacenada en su dispositivo local. -->

# Prototipos

Es un diseño minimalista, está dividido en tres secciones. La columna principal que contiene los Plugin, la columna del medio que contiene la información a configurar y la última que tiene la visualización de los Plugin creados y listos para exportar.
 
Diseñado de esta manera ya que sigue un orden secuencial del proceso y es fácil de identificar los requerimientos del usuario para poder acceder de manera fácil a la información

![Prototipo](./src/assets/Desktop(2).png)
# Interfaz

# Historia de Usuario
 
## 1. Los empleados TI puedan visualizar los Plugins y configurarlos
   
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



## 2. Configurar varios plugin creando una orquestación y poder descargarla en Yaml 

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

# Tecnologias  
- Javascript
- React.JS
- Bootstrap 5
- Libreria js-yaml
- HTML5 
- CSS

## Link



<!-- (ii) Al elegir un adaptador se mostrará el archivo YAML en la UI, mostrando sus pares
llave-valor
(iii) Luego, debemos permitir a la/el usuari@ agregar/modificar sus valores de
configuración y opción de añadir un siguiente adaptador
(i) Crear una nueva “orquestación” que permita agregar uno o más adaptadores.

(iv) Al final, además de mostrar en la UI la orquestación, deberá existir la opción de
descargar un archivo YAML con una lista de adaptadores seleccionados y configurados. -->