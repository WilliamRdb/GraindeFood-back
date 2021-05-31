BEGIN;

DROP TABLE IF EXISTS "user",
"promo",
"order";

 CREATE TABLE "user" (
    "id" serial PRIMARY KEY,
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "first_name" varchar NOT NULL,
    "delivery_address" varchar NOT NULL,
    "invoice_address" varchar NOT NULL,
    "delivery_postcode" integer NOT NULL,
    "invoice_postcode" integer NOT NULL,
    "delivery_city" varchar NOT NULL,
    "invoice_city" varchar NOT NULL,

    "status" boolean,
    "points" integer,
    "role" varchar NOT NULL,
    "vegan" boolean
);

CREATE TABLE "promo" (
    "id" serial PRIMARY KEY,
    "code" varchar NOT NULL,
    "start_date" date NOT NULL,
    "end_date" date NOT NULL,
    "pourcent" integer NOT NULL
);

CREATE TABLE "order" (
    "id" serial PRIMARY KEY,
    "start_subscribe" date NOT NULL,
    "end_subscribe" date NOT NULL,
    "amount" integer NOT NULL,
    "points" integer NOT NULL,
    "user_id" integer NOT NULL REFERENCES "user" ("id"),
    "promo_id" integer REFERENCES "promo" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

COMMIT;