# Base de Datos

:::info Nota
Para este tutorial utilizaremos [PostgreSQL](https://www.postgresql.org/) como motor de base de datos. Siéntase libre de elegir otro como [MySQL](https://www.mysql.com/).
:::

## Entrar en el ambiente de PostgreSQL

Para comenzar a crear nuestra base de datos en PostgreSQL ejecute:

```sh
sudo apt install postgresql
```

Luego:

```sh
sudo systemctl is-enabled postgresql
sudo systemctl status postgresql
```

Estos comandos indica que el servicio postgresql se está ejecutando, está habilitado, y que se iniciará automáticamente al arrancar el sistema.

## Configurando Postgres

Ejecuta el siguiente comando psql para acceder a la shell de PostgreSQL.

```sh
sudo -u postgres psql
```

Y luego, ejecutamos este comando para cambiar la contraseña por defecto de postgres.

```sh
ALTER USER postgres WITH PASSWORD 'Contraseña';
```

## Crear usuario y base de datos

Para comenzar a crear UN NUEVO suario con su contraseña para la base de datos, debemos ejecutar los siguentes comandos:
```sh
CREATE USER Samuel with CREATEDB CREATEROLE;
ALTER USER alice with PASSWORD '654321';
```
Y si todo está funcionando, al escribir "/du" en la terminal, debería aparecer el usuario ya creado.



:::info Nota
Siéntase libre de elegir otro nombre de base de datos mientras sea concistente a lo largo del tutorial.
:::

Ya fue creada la base de datos para este tutorial,  avancemos con el backend...
