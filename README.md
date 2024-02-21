## Init Project

* To create the package JSON file run:

```bash
pnpm init
```

* To initialize the project run:

```bash
pnpm init
```

## MongoDB

### .env File

When you use an `.env` file, you need to delete `&w=majority` part at the end and it will be solved.

- Before:
```bash
mongodb+srv://{user}:{password}@cluster0.ealmscv.mongodb.net/APIRestaurant?retryWrites=true&w=majority
```

- After:
```bash
mongodb+srv://{user}:{password}@cluster0.ealmscv.mongodb.net/APIRestaurant?retryWrites=true
```