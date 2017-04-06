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

-- Table: public.persons

-- DROP TABLE public.persons;

CREATE TABLE public.persons
(
  personid integer NOT NULL DEFAULT nextval('persons_personid_seq'::regclass),
  lastname character varying(20),
  firstname character varying(20),
  middlename character varying(20),
  CONSTRAINT pk_person_id PRIMARY KEY (personid)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.persons
  OWNER TO famtree;