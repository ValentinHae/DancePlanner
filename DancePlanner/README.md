## The svelte(/snel) based Webpage

Development of the web application using the svelte framework and its functionalities. The front-end of the application is build by dividing it into fragments and use them in one file.

#### File strucutre

- App.svelte is build as the “hub”, to combine all combined fractions of the website. In it, every other needed svelte-component is imported and used.
- Navbar.svelte is the svelte-component for the Navigation Bar on the top of the website. Inside of it, the logo and possible links to different websites/subpages can and will be stored.
- Banner.svelte serves the purpose of styling the Banner of the website.
- Searcharea.svelte combines all Text-inputs and the slider, in order to receive the users desired search inputs. The Text-inputs themselves are other svelte components. A self-written (and published) component with an input field and an additional type-ahead functionality is imported for the dancestyle-input (Typeaheaddance.svelte) and the city-input (Typeaheadcity.svelte)
    - Typeaheaddance.svelte and Typeaheadcity.svelte use the Suggestions.svelte file, to dynamically create all suggestions while typing in the input-field
- Cards.svelte iterates over a json, and uses the Cardscreate.svelte, to create a card for each event that should be displayed depending on the json received by the back-end
- Maps.svelte displays a big map on the bottom of the page, which can be used in future developing, it is also used as a component to be used on the back of the cards to display the geolocation of the event
- Footer.svelte is the component for the Footer down below

#### What I’ve done:

- MockUp made in AdobeXd to assist the development of the front-end
- Studying Svelte and parts of deno to start coding with full knowledge of the functionality
- Coding the entire front-end: all svelte files to be combined into the web-page
- Making it ready to be compatible with a json received from the back-end
- Used publishable and reusable code to publish it on deno.land (Typeahead component: https://deno.land/x/svelte_typeahead@v0.1.0 & Map component: https://deno.land/x/svelte_map@v0.1.0)
- Using Stack Overflow as tool for questions and also as an "archive" (while answering my own question) Question: https://stackoverflow.com/questions/71023128/importing-npm-node-js-packages-to-snel/71023225#71023225

#### Challenges

- Understand the “edge cases” of svelte
- Understand the differences of svelte to usual practices
- Implementation of external packages
- Connection with the backend
    - Imports (in connection with deno)
- Limited experience in front-end development (typescript especially)
- Implementation of google maps (leaflet map turned out to be better for the usecase and easier to implement)
 
#### Learnings

- Learned about Svelte as a framework and the features that come with it (and how to use them to improve coding)
- Improved typescript(/javascript) skills
- Use a AdobeXd based mockup to assist the front-end coding
- Gain of experience in front-end development overall (HTML/CSS)
- How to used external packages in your own application (leaflet in this case)
- Working with Deno and using it combined with Svelte (by using Snel)

#### Material used to get to know svelte:

- [https://www.youtube.com/watch?v=3TVy6GdtNuQ&](https://www.youtube.com/watch?v=3TVy6GdtNuQ&)
- [https://www.youtube.com/watch?v=UU7MgYIbtAk](https://www.youtube.com/watch?v=UU7MgYIbtAk)
- [https://www.youtube.com/watch?v=ws97Etvs-Qs](https://www.youtube.com/watch?v=ws97Etvs-Qs)
- [https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)
- [https://svelte.dev/tutorial/](https://svelte.dev/tutorial/)
