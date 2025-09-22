import { onRequestPost as __api_contact_ts_onRequestPost } from "/Users/camilleh/Desktop/my-brand-site/functions/api/contact.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_ts_onRequestPost],
    },
  ]