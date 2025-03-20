# Discoveries API

This API provides endpoints for managing health-related discoveries, including vital signs, lab results, medications, and more.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, to run the API in development mode:

```bash
nx start:dev api
```

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3000/api
```

## Important Note

The API uses a JSON file for data storage (`src/data/discoveries.json`). Changes to the data **will not persist** after server restart. This is intentional as this API is designed for testing purposes only.

## Project Structure

```
apps/api/
├── src/
│   ├── discovery/
│   │   ├── dto/            
│   │   ├── entities/       
│   │   ├── enums/          
│   │   ├── discovery.controller.ts
│   │   └── discovery.service.ts
│   ├── data/
│   │   └── discoveries.json 
│   └── main.ts
```
