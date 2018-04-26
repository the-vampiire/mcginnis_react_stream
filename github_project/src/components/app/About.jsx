import React from 'react';

const About = () => (
  <article>
    <h1>React Practice Application</h1>
    <h2>From the Tyler McGinnis React Fundamentals Course</h2>
    <section>
      <section>
        <h2>
          Popular Repos
        </h2>
        <ul>
          <li>
            View popular repos sorted by number of stars and language
          </li>
          <li>
            Add a language as a dynamic route parameter: <code>/popular/language</code>
          </li>
        </ul>
      </section>
      <section>
        <h2>
          Battle
        </h2>
        <ul>
          <li>
            Compare the followers of two GitHub users
          </li>
          <li>
            Add users as dynamic route parameters: <code>/battle/user1/user2</code>
          </li>
        </ul>
      </section>
    </section>
  </article>
);

export default About;
