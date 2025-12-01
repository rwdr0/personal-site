type Env = {
  ASSETS: {
    fetch: typeof fetch;
  };
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/projects" || url.pathname === "/projects/") {
      return Response.redirect("https://github.com/rwdr0", 307);
    }

    if (
      url.pathname === "/projects/sqlite" ||
      url.pathname === "/projects/sqlite/"
    ) {
      return Response.redirect(
        "https://github.com/rwdr0/build-your-own",
        307,
      );
    }

    return env.ASSETS.fetch(request);
  },
};
