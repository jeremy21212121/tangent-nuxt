# tangent-nuxt

Client site for a local restaurant. This is a reimplementation of a legacy vue site, which was actually my very first paying vue project ~ early 2016. It was fun going back over code written while I was still learning vue.js. I was actually fairly impressed at how not-terrible it is. I came up with a decent schema for representing menu data, and built a good responsive menu layout. The biggest issue was that I built the whole menu as one giant template, as I wasn't using components yet back then. In fact, there was no build step involved at all, vue was included in a `<script>` tag.

It is now a lot more maintainable, better indexable by search engines, loads faster, etc. The menus are broken up in to composable components so they can be assembled to support different menu schemas.

This is pre-rendered using `nuxt generate`. The latest business hours are fetched by the client on the `mounted` hook.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

Served in production by nginx.
