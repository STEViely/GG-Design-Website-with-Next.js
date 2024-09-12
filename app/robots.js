export default function robots() {
  return {
    rules: {
      useAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
  };
}
