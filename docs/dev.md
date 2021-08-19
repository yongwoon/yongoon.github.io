# set dev

- Build docker image

```bash
docker-compose build --no-cache
```

- Install packages

```bash
docker-compose exec app bash -c 'npm install'
# or
docker-compose run --rm app npm install
```

- Run docker

```bash
docker-compose up
```
