# webkit  v1.0.0 - STABLE

Framework de desarrollo del Centro de excelencia Front de Everis SLU.

## INSTALL

1. Copia el fichero *.zip y pégalo en la carpeta donde vayas a desarrollar.
Podeis encontrarlo en nuestro SVN /template/WeFront-v2
---
2. Descomprimimos el zip en la carpeta y tendremos la siguiente estructura.  

	```
	assets/
	config/
	gulp/
	src/
	.bowerrc
	.editorconfig
	.gitignore
	bower.json
	gulpfile.babel.js
	package.json
	readme.md
	```
---
3. Abrimos una consola y ejecutamos lo siguiente:

+ Instalamos todas paquetes de NPM: 
	```
	$ npm install
	```
	> Creará una carpeta en la raiz llamada *node_modules* donde se guardarán todas las dependencias de desarrollo para el proyecto. 


+ Instalamos las dependencias de BOWER
	```
	$ bower install
	```
	> Creará una carpeta en la raiz llamada *bower_components* donde se guardarán todas las dependencias de desarrollo para el proyecto. 

4. CONFIGURACIÓN PREVIA DEL PROYECTO. 
	
	Tenemos que configurar el proyecto antes de comenzar a desarrollar. Ficheros que tienen que modificarse __OBLIGATORIAMENTE__.

		* bower.json ("name", "version", "author", "description")
		* package.json ("name", "version", "author")
	
	Tenemos que comprobar también que las carpetas de los recursos (assets) no hay resquicios de otros proyectos. ES IMPORTANTE QUE NO ARRASTREMOS COSAS DE OTROS PROYECTOS. 

5. CONFIGURACION ITCSS & TEMPLATES

	**_config__project.scss**  
	**config.jade**

	Comprobemos que las configuraciones de estos archivos son correctas. Tenemos que ser concienzudos en esta tarea, puesto que conllevará a un mejor desarrollo del proyecto. 
	
---

## GULP

### Tareas disponibles:

#### gulp deafult
````
$ gulp or $ gulp default
````
TASK GROUP:  
__no files__


TASK DEPENDENCIES:
1. __[help]__ 


Minifica los archivos CSS en la misma carpeta en la que se encuentran. ./build/css/


#### bowerfiles
````
$ gulp bowerfiles
````
TASK FILES:  
__./gulp/task/bowerfiles.js__


CONFIG VAR:
1. __overrides__: Delcaración de los archivos js, css, font, resources, que vamos a copiar del bower_components 
2. __bowerfiles__: Activación de opciones de la tarea, así como la declaración de los nombres de los archivos que vamos a exportar con la tarea. 


Copia las dependencias de **bower.json** a nuestra carpeta **build** distribuyendo los archivos de la siguiente forma:

1. Archivos *.js
	+ Copiar todo los archivos *.js que le indiquemos en el objeto _overrides_ en la ruta build/js/libs. 
	+ Podemos configurar la tarea para que concatene y nos devuelva un único archivo con el nombre que le indiquemos. 

2. Archivos *.css
	+ Copiar todo los archivos *.css que le indiquemos en el objeto _overrides_ en la ruta build/css/libs
	+ Si la librería nos proporciona los archivos .scss, tendremos que importarlos en un compomente para trabajar con ello antes de copiar con bowerfiles. 
	
3. Archivos de Fuentes: 
	+ Si no se declara el objeto _overrides_ en la configuracion 

4. Media
	+ Copia los recursos de imagen (*.jpg, *.png, *.gif). 
	** Si veis que algún recuros no lo copia es porque no están definida las extensiones en la tarea.**




#### cacheTemplates
````
$ gulp cacheTemplates
````
TASK FILES:  
__./gulp/task/cachetemplates.js__


CONFIG VAR:
1. __common__ 


Crea una cache de todos los archivos *.jade




#### clean:all
````
$ gulp clean:all 
````
TASK GROUP:  
__no file__


DEPENDENCIES:
1. __[clean:css]__
2. __[clean:fonts]__
3. __[clean:scripts]__
4. __[clean:templates]__

Ejecuta todas las tareas de tipo clean




#### clean:css
````
$ gulp clean:css 
````
TASK FILES:  
__./gulp/task/clean-css.js__


CONFIG VAR:
1. __NO VAR__ 

Borra los archivos *.CSS que se encuentre en la carpeta ./build/css




#### clean:fonts
````
$ gulp clean:fonts 
````
TASK FILES:  
__./gulp/task/clean-fonts.js__


CONFIG VAR:
1. __NO VAR__ 

Borra los archivos de fuentes que se encuentre en la carpeta ./build/css




#### clean:script
````
$ gulp clean:css 
````
TASK FILES:  
__./gulp/task/clean-css.js__


CONFIG VAR:
1. __NO VAR__ 

Borra los archivos *.CSS que se encuentre en la carpeta ./build/css/fonts




#### clean:templates
````
$ gulp clean:templates 
````
TASK FILES:  
__./gulp/task/clean-templates.js__


CONFIG VAR:
1. __NO VAR__ 

Borra los archivos *.HTML que se encuentre en la carpeta ./build/





#### console:GLP
````
$ gulp console:GLP 
````
TASK FILES:  
__./gulp/task/console-glp.js__


CONFIG VAR:
1. __NO VAR__ 

Muestra por consola el contenido del objeto





#### copy:assets
````
$ gulp copy:assets 
````
TASK FILES:  
__./gulp/task/copy-assets.js__


CONFIG VAR:
1. __NO VAR__ 

Copia la carpeta de ./assets dentro de la carpeta ./build. 

**Importante**

> Todos los recursos tenemos que guardarlos en la carpeta ./assets/ ya que todo lo que hay en la carpeta ./build/ es generado y se borra y genera de nuevo cada vez que levantamos el proyecto. 





#### copy:favicon
````
$ gulp copy:favicon 
````
TASK FILES:  
__./gulp/task/copy-favicon.js__


CONFIG VAR:
1. __NO VAR__ 


Tenemos que ubicar el favicon.ico dentro de la carpeta ./assets/ para que cuando se genere la carpeta ./build/ lo pegue en raiz. 



#### copy:fonts
````
$ gulp copy:fonts 
````
TASK FILES:  
__./gulp/task/copy-fonts.js__


CONFIG VAR:
1. __NO VAR__ 


Copia los arhivos de fuentes de nuestra carpeta de assets/fonts a la carperta build/css/fonts. Cuando se genere una fuente nueva la ruta a la que tenemos que apuntar será siempre la ubicada en css/fonts. 


#### css:min
````
$ gulp css:min
````
TASK FILES:  
__./gulp/task/css-min.js__


CONFIG VAR:
1. __cssmin__ 


Minifica los archivos CSS en la misma carpeta en la que se encuentran. ./build/css/





#### develop
````
$ gulp develop
````
TASK GROUP:  
__no files__


DEPENDENCIES:
1. __['clean:all']__
2. __['bowerfiles']__
3. __['copy:assets']__ 
4. __['copy:favicon']__
5. __['templates']__
6. __['scss']__
7. __['js']__
8. __['cacheTemplates']__
9. __['serve']__
10. __['watch']__


* Cada vez que se ejecuta, vacia la carpeta build y la vuelve a generar. 
* Levanta el serve
* Ejecuta los watch




#### dist
````
$ gulp dist
````
TASK GROUP:  
__no files__


DEPENDENCIES:
1. __['clean:all']__
2. __['bowerfiles']__
3. __['copy:assets']__ 
4. __['copy:favicon']__
5. __['templates']__
6. __['scss']__
7. __['js']__
8. __['cacheTemplates']__
9. __[dist:normal']__
10. __['dist:min']__
11. __['js:min']__
12. __['css:min']__

* Vacia la carpeta build
* Vuelve a generar la carpeta build con todo los recursos
* Genera una carpeta en ./dist/[fecha del dia en el que se genera]/normal y version minificada ./dist/[fecha del dia en el que se genera]/min




#### dist:min
````
$ gulp css:min
````
TASK FILES:  
__./gulp/task/dist-min.js__


CONFIG VAR:
1. __no var__ 


Genera una version minificada de distribución para la entrega a proyecto. Usar a través de "gulp dist"




#### dist:normal
````
$ gulp css:normal
````
TASK FILES:  
__./gulp/task/dist-normal.js__


CONFIG VAR:
1. __no var__ 


Genera una version minificada de distribución para la entrega a proyecto. Usar a través de "gulp dist"




#### js
````
$ gulp js
````
TASK FILES:  
__./gulp/task/js.js__


CONFIG VAR:
1. __js__
2. __common__


Compila archivos Js. Genera: build\js\front-script.js




#### js:min
````
$ gulp js:min
````
TASK FILES:  
__./gulp/task/js-min.js__


CONFIG VAR:
1. __no var__ 


Compila archivos Js. Genera: build\js\front-script.js




#### postcss:pixtorem
````
$ gulp postcss:pixtorem
````
TASK FILES:  
__./gulp/task/postcss-pixtorem.js__


CONFIG VAR:
1. __no var__ 


Cambia todos los rem a pixeles de nuestros css para hacerlos compatibles con navegadores antiguos.




#### report:eslint
````
$ gulp report:eslint
````
TASK FILES:  
__./gulp/task/report__eslint.js__


CONFIG VAR:
1. __common__ 


Genera un report con los Errors / Warnings de nuestro desarrollo. El report se genera en esta ruta: reports\lint\report-result.html




#### scss
````
$ gulp scss
````
TASK FILES:  
__./gulp/task/scss.js__


CONFIG VAR:
1. __scss__ 


Compila nuestro archivos SCSS. Output  en: build\css\





#### serve
````
$ gulp serve
````
TASK FILES:  
__./gulp/task/serve.js__


CONFIG VAR:
1. __server__ 


Levanta un server con la configuración que inquemos en la configuracion





#### templates
````
$ gulp templates
````
TASK FILES:  
__./gulp/task/templates.js__


CONFIG VAR:
1. __templates__ 


Compila archivos .jade




#### w3c:css
````
$ gulp w3c:css
````
TASK FILES:  
__./gulp/task/w3c__css.js__


CONFIG VAR:
1. __common__ 


Comprueba nuestro código CSS basado en las especificaciones de la W3C.





#### w3c:html
````
$ gulp w3c:html
````
TASK FILES:  
__./gulp/task/w3c__html.js__


CONFIG VAR:
1. __common__ 

Comprueba nuestro código HTML basado en las especificaciones de la W3C. Genera Report. Para que funcione corractemente tiene que estar levantado el serve.




#### watch
````
$ gulp watch
````
TASK FILES:  
__./gulp/task/watch.js__


CONFIG VAR:
1. __no var__



Lanza el WATCH de: [templates, scss, js]





#### wcag
````
$ gulp wcag
````
TASK FILES:  
__./gulp/task/wcag.js__


CONFIG VAR:
1. __no var__



Comprueba la accesibilidad de nuestros desarrollos en base a la WCAG. Genera Report. Para que funcione corractemente tiene que estar levantado el serve.
----


## ITCSS
## TEMPLATES
## JS
## REPORTS
