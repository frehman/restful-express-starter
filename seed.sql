-- setup table
-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id bigserial,
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

-- add data
INSERT INTO public.users(first_name, last_name) VALUES('Mya','Colslav');