# Reference

https://www.youtube.com/watch?v=aQFPetOyzUE&ab_channel=Rocketseat

# SSR

Server-side rendering (SSR) is an application’s ability to convert HTML files on the server into a fully rendered HTML page for the client. 

The web browser submits a request for information from the server, which instantly responds by sending a fully rendered page to the client. 

Search engines can crawl and index content prior to delivery, which is beneficial for Search Engine Optimization purposes.

# Benefits

- A server-side rendered application enables pages to load faster, improving the user experience.

- When rendering server-side, search engines can easily index and crawl content because the content can be rendered before the page is loaded, which is ideal for SEO. 

- Webpages are correctly indexed because web browsers prioritize web pages with faster load times.

- Rendering server-side helps efficiently load webpages for users with slow internet connection or outdated devices.

# Risks

- Rendering server-side can be costly and resource-intensive as it is not the default for JavaScript websites, and the server takes on the full burden of rendering content for users and bots.

- While rendering static HTML server-side is efficient, rendering bigger, more complex applications server-side can increase load times due to the bottleneck.

- Server-side rendering may not be compatible with third-party JavaScript code. 

- Rendering server-side may be ideal for static site generation, but frequent server requests and full page reloads can result in overall slower page rendering in more complex applications. 

# SSR vs SPA

- In client-server rendering, rather than receiving all of the content from the HTML document, content is rendered in the browser using the client-side JavaScript library. 

- The browser does not make a new request to the server when a new page is loaded. 

- Search engine rankings may be negatively impacted as the content is not rendered until the page is loaded on the browser, however, website rendering tends to be faster in client-side rendered app. 

- In considering server side vs client side rendering, the developer will assess factors such as the scale of the project, the complexity of the application, the number of users, and user experience priorities.

# SSR vs SSG

- The difference between SSG and SSR is when the page’s HTML is generated.

- When using SSG, the HTML is generated in build time.
    - SSG pre-rendering makes it easy to cache and fast to deliver.

- On the other hand, SSR generates the page’s HTML on each request.
    - It is much more flexible than SSG because you can change the HTML without building the application every time.

# ISR

- Next.js v9.5 introduces a new strategy called Incremental Static Regeneration (ISR), a hybrid version of the two (SSG + SSR)

- Incremental Static Regeneration (ISR) is a newly released feature that allows the regeneration of static pages during runtime.

- It’s a hybrid solution of SSG and SSR.

- The page is generated on the first request. Unlike in SSR, where the visitor has to wait for the data fetching, **a fallback page is served immediately.**
    - During the fallback stage, we can present placeholders and a skeleton page until everything is resolved.
    - *Skeleton pages are a common pattern that you can see almost everywhere.*
    - Once the data is resolved, the final page is cached, and consequent visitors will receive the cached version immediately, just like with SSG.

- Even when revalidating, the visitor first receives the cached version and only then the updated version.

    This caching strategy is commonly known as “stale-while-revalidate.”

# SSG vs SSR vs ISR

- When using ISR, the first paint and the blocking time might not be affected due to the fallback stage. 

- Next.js immediately sends an HTML back even before fetching the server-side data. 

- Depending on the design of your page, the server-side data fetching might delay the first meaningful paint.


# ISR How

- same as SSG, but now, with `revalidate`

```jsx
export async function getStaticProps() {
  const res = await fetch('https://...');
  const data = await res.json();

  return { props: { data }, revalidate: 60 };
}
```

- detecting a fallback page: `isFallback` is a boolean that automatically updates when the fallback mode changes.

```jsx
const { isFallback } = useRouter();
```

