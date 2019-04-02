const sequelize = require('./db');
const Sequelize = require('sequelize');

/**
 * I've opted to have an already built, seeded db.
 * @example
 * ```sql
 * -- Table: public.users
 * -- DROP TABLE public.users;
 *
 * CREATE TABLE public.users
 * (
 *    id bigserial,
 *     first_name text COLLATE pg_catalog."default" NOT NULL,
 *     last_name text COLLATE pg_catalog."default" NOT NULL,
 *     "createdAt" timestamp with time zone,
 *     "updatedAt" timestamp with time zone DEFAULT timezone('utc'::text, now()),
 *     CONSTRAINT users_pkey PRIMARY KEY (id)
 * )
 * WITH (
 *     OIDS = FALSE
 * )
 * TABLESPACE pg_default;
 *
 * ALTER TABLE public.users
 *     OWNER to postgres;
 * ```
 */

class user extends Sequelize.Model {}
user.init(
  {
    /**  These are the attributes/columns of the db */
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    }
  },
  {
    sequelize
    // options
  }
);

module.exports = user;
