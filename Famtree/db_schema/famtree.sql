-- Database: famtree

-- DROP DATABASE famtree;

CREATE DATABASE famtree
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Russian_Russia.1251'
       LC_CTYPE = 'Russian_Russia.1251'
       CONNECTION LIMIT = -1;


-- Schema: public

-- DROP SCHEMA public;

CREATE SCHEMA public
  AUTHORIZATION postgres;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';

-- Table: public."Persons"

-- DROP TABLE public."Persons";

CREATE TABLE public."Persons"
(
  "PersonId" integer NOT NULL,
  "LastName" character varying(20),
  "FirstName" character varying(20),
  "MiddleName" character varying(20),
  CONSTRAINT pk_person_id PRIMARY KEY ("PersonId")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."Persons"
  OWNER TO famtree;
GRANT ALL ON TABLE public."Persons" TO famtree;
GRANT SELECT ON TABLE public."Persons" TO public;