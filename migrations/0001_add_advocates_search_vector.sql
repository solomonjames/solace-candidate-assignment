CREATE INDEX "idx_advocates_computed_fts" ON "advocates" USING gin (
          to_tsvector('english', 
            "first_name" || ' ' || 
            "last_name" || ' ' || 
            "city" || ' ' || 
            "degree" || ' ' ||
            COALESCE("specialties"::text, '') || ' ' ||
            COALESCE("years_of_experience"::text, '')
          )
        );