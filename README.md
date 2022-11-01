# Getting started

## Installation

```
git clone https://github.com/mfloresss/2022_Proyecto_Integrador_Equipo_2_Front-end.git # using https
or
git clone git@github.com:mfloresss/2022_Proyecto_Integrador_Equipo_2_Front-end.git # using ssh

cd 2022_Proyecto_Integrador_Equipo_2_Front-end
npm i # install dependencies
```

## Run the app

Open http://localhost:3000 in your browser to see the app.

```
npm start
```

## Environment Variables

By default, env files have been removed from the repo to securize our process. To work, you need to generate the env files.

Ensure the `.env` file has required environment variables:

```
REACT_APP_API_URL=http://localhost:4000/api-alidar
```

## Deploy to Production

1 - Join to server
```
ssh -p 2387 <USER_NAME>@10.1.0.12
```
2 - Pull project
```
cd /project

cd /2022_Proyecto_Integrador_Equipo_2_Front-end
git pull origin main
```
3 - Generate build
```
cd /project

cd /2022_Proyecto_Integrador_Equipo_2_Front-end
npm run build
```

4 - Run project

To run both project we used a [PM2](https://pm2.keymetrics.io/)
```
cd /project

cd /2022_Proyecto_Integrador_Equipo_2_Front-end
pm2 start "serve -s build -p <OPTIONAL_PORT>" --name "react-app"
```

