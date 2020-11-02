-- This is the App.js file for the Week 11 assignment for Prime Digital Academy, created by 
-- Adam Boerhave, 10/30/2020 - 11/1/2020
-- It contains lines to create a table and add an initial feedback entry
-- for the database

-- Database should be prime_feedback
-- CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (10, 9, 9, 'Doing Great!');
