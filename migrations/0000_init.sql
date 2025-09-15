CREATE TABLE IF NOT EXISTS "advocates" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"city" varchar NOT NULL,
	"degree" varchar(100) NOT NULL,
	"specialties" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"years_of_experience" smallint NOT NULL,
	"phone_number" varchar NOT NULL,
	"created_at" timestamp DEFAULT now()
);
