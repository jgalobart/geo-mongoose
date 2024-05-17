# GEO information for MongoDB

This project installs this information in a MongoDB database:

- continents
- countries
- regions (only for spain)
- cities (only for spain)

All geocoords are prepared for mongoose-geojson-schema package

## How to install

Create a .env file
```
DB_USER="YOUR_USER"
DB_PASSWORD="YOUR_PASSWORD"
DB_NAME="YOUR_DATABASE_NAME"
DB_SERVER="YOUR_CLUSTER_NAME.YOUR_ID.mongodb.net"
```

Run seeder

```
node seed
```
