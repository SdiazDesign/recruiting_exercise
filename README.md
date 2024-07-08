## Descripción
Esta es una SPA creada con Ext.js 4.2 que muestra una grilla de Purchase Orders y permite ver y editar detalles.

## Requisitos
- [Sencha CMD 4.0.4.84](https://cdn.sencha.com/cmd/4.0.4.84/SenchaCmd-4.0.4.84-windows.exe)
- [Ext.js 4.2](https://cdn.sencha.com/ext/gpl/4.2.1/)
- [XAMPP](https://www.apachefriends.org/index.html) o cualquier servidor web local

## Instrucciones de Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/SdiazDesign/recruiting_exercise.git
    cd recruiting_exercise
    ```

2. Configura Sencha CMD:
    ```sh
    sencha generate workspace .
    sencha generate app MyApp app
    ```

3. Compila la aplicación:
    ```sh
    sencha app build production
    ```

4. Copia los archivos compilados a tu servidor web local (por ejemplo, XAMPP).

5. Abre tu navegador web y navega a `http://localhost/recruiting_exercise`.

## Información Adicional
- La aplicación utiliza archivos JSON locales para simular el backend.
