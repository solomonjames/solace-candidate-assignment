# Discussion

My approach for this project was to try to build out a better foundation at first, then build on top of that.
This started with fixing basic issues and problems, generally leaving the project still as-is. Then begin to implement
improvements to the code and UI.

## PRs

_NOTE: I made the assumption it would be OK to create pull requests and merge them_

See them all in order: [Sorted Closed PRs](https://github.com/solomonjames/solace-candidate-assignment/pulls?q=is%3Apr+is%3Aclosed+sort%3Acreated-asc)

Linking the PRs in the order they were created and merged here for easy finding:

1. [[bugs]: Addressing initial bugs and issues](https://github.com/solomonjames/solace-candidate-assignment/pull/1)
2. [[migrations]: Adding migrations and using drizzle to run them](https://github.com/solomonjames/solace-candidate-assignment/pull/2)
3. [[seeding]: Utilize drizzle seed and upgrade drizzle](https://github.com/solomonjames/solace-candidate-assignment/pull/3)
4. [[database]: Start using Repositories instead of direct queries](https://github.com/solomonjames/solace-candidate-assignment/pull/4)
5. [[api]: Creating API SDK for the client to use when talking to backend](https://github.com/solomonjames/solace-candidate-assignment/pull/5)
6. [[deps]: Updating/Upgrading dependencies](https://github.com/solomonjames/solace-candidate-assignment/pull/6)
7. [[ui]: Breaking things out, and switching to Chakra UI](https://github.com/solomonjames/solace-candidate-assignment/pull/7)
8. [[ui]: Adding pagination and real, db, filtering](https://github.com/solomonjames/solace-candidate-assignment/pull/8)
9. [[linting]: Forcing use of single quotes](https://github.com/solomonjames/solace-candidate-assignment/pull/9)
10. [[actions]: Adding in github actions for PRs](https://github.com/solomonjames/solace-candidate-assignment/pull/10)
11. [[actions]: Fixing issues and change to tsc check](https://github.com/solomonjames/solace-candidate-assignment/pull/11)
12. [[fts]: Utilizing an optimized index for fts](https://github.com/solomonjames/solace-candidate-assignment/pull/12)

## With More Time

Here I will discuss some things I would want to implement with more time.

1. More advanced searching capabilities.
   * Example 1: All PhD's with more than 10 years experience
   * Example 2: All Pediatrics within 20 miles of my location
2. Utilize the `drizzle-zod` and `zod` packages to implement type guards on api client
   * Using type guards provide more runtime safety compared to type assertions
   * Using these packages should make this really easy and maintainable
   * You could have a guards file that exports a guard for each type, and then pass those the guard to the api client
3. Implement an Advocate page
   * Allow a user to click on an advocate they like, which also allows for linking directly to an advocate
   * Here we could show more details about the advocate, possibly things like reviews, embedded map of their location,
   more qualification details, ability to book them, etc.
4. Linkable searches
   * Update the home page with query strings that represent the current search, making it linkable
   * This should include current page of the pagination too
5. Page Size persisted
   * Users often change the page size of a table for a reason, and it would be great if that preference can persist
across page refreshes.
   * Store this data in local storage
6. Table Sorting
   * Not all columns need to be sortable, but some, like years of experience, would make a lot of sense to be sortable
7. Testing
   * Right now there is no testing, making every change somewhat risky
   * Testing should not come at the expense of developer speed and velocity
   * Tests should not be fragile by design, preferring black-box testing
   * Easy to maintain and understand, Resistant to refactoring, Focus on Feature tests over Unit tests
8. Proper Config System
   * Utilize something like Zod to let us define a config that can be validated at build time all in one location
   * This would let us abstract away references to `process.env.*` throughout the code.
