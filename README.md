# Ya Lo Haré

![Logo YLH](https://user-images.githubusercontent.com/92319190/154747519-a407cccd-7a26-42ae-98ad-7d4af44c1a24.png)


### Descripición ###

**_Ya lo haré_** es una aplicación web en la que podrás organizar de manera muy intuitiva y útil los eventos venideros que quieras recordar, además de poder saber cúando fue la última vez que pasó un suceso registrado.

---
### Motivación ###

Siempre he sido una persona que, para poder organizarme y no olvidarme de nada, he tirado mucho de los típicos _Post-it_ pegados en la pared. Sin embargo, he decidido intentar trasladar este espíritu al terreno tecnológico.

---
 
 En mis investigaciones sobre el tema me he topado con ciertas aplicaciones que me han ayudado a enfocar mejor mis ideas. Estas apps son [Countdown+ Calendar](https://apps.apple.com/us/app/countdown-calendar-lite/id566237798) y [DAY DAY](https://play.google.com/store/apps/details?id=princ.lifestyle.DDay&hl=es&gl=US).


### ¿Qué podremos encontrar en esta página web?
 ![Formulario](https://i.ibb.co/R2g3K5g/Captura-de-pantalla-2022-03-11-a-las-16-18-34.png)

 ![Tarjetas](https://i.ibb.co/PYP7tJK/Captura-de-pantalla-2022-03-11-a-las-16-22-29.png)

 Estos son dos ejemplos de la interfaz que nos encontraremos tanto para añadir un evento como la tarjeta en la que tendremos todos los datos del mismo.

### Estructura del proyecto ###


```

    ├── proyecto
    │
    ├── packages
    │    ├── front
    │    │    ├── ...
    │    │    └── package.json
    │    │
    │    └── api
    │         ├── ...
    │         └── package.json
    │
    ├── .gitignore
    ├── package.json
    └── README.md
```

---

### Tecnologías ###

El proyecto esta desarrollado principalmente con TypeScript, además de con React y Next.js. Otras tecnologías usadas durante el proceso son las siguientes: 

| API      | FRONT        |
|----------|--------------|
| Fastify  | Auth0        |
| Mongoose | Babel        |
| Dotenv   | Axios        |
| NodeJS   | Chakra UI    |
| Auth0    | JSONWebToken |
|Yarn      | Yarn
### Ahora es tu turno ###

Estas son las isntrucciones para que tú mism@ puedas obtener el código y trastear con el todo lo que quieras:

Clona el proyecto

````
 git clone https://github.com/SalvadorSG/YaLoHare.git
````

Accede al repositorio clonado

````
cd YaLoHare
`````
Instala las dependecias (es necesario hacerlo en las dos partes, tanto en el front como en la api)

`````
yarn install
`````
Ejecuta el comando dev en ambos proyectos para arrancarlos y poder ver su funcionamiento

```
yarn run dev
`````

