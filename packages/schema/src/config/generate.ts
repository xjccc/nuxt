import { defineResolvers } from '../utils/definition'

export default defineResolvers({
  generate: {
    /**
     * The routes to generate.
     *
     * If you are using the crawler, this will be only the starting point for route generation.
     * This is often necessary when using dynamic routes.
     *
     * It is preferred to use `nitro.prerender.routes`.
     * @example
     * ```js
     * routes: ['/users/1', '/users/2', '/users/3']
     * ```
     */
    routes: [],

    /**
     * This option is no longer used. Instead, use `nitro.prerender.ignore`.
     * @deprecated
     */
    exclude: [],
  },
})
