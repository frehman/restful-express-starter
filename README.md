# restful-express-starter

Starter project for RESTful api with Express

## Local setup

After cloning the repo, run `npm install`.
Then run everything locally using `gulp dev`

- To use the project as is, in your local setup, you must have a postgres server with a table with a definition similar to:

```sql
-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    first_name text COLLATE pg_catalog."default" NOT NULL,
    last_name text COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone DEFAULT timezone('utc'::text, now()),
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;
```

- Insert at least one row in the db.
- Create a `.env` file in the root of the project with an entry similar to

```
DATABASE_URL=postgres://postgres:myPassword@localhost/dbName
```

## To run the tests

- In a separate terminal window run `npm test`
