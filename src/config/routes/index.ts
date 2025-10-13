export const publicRoutes = {
  HOME: "/",
  GET_STARTED: "/auth/get-started",
  SIGN_IN: "/auth/sign-in",
};

export const privateRoutes = {
  ONBOARDING: "/private/onboarding",
  OVERVIEW: "/private/t/:account/overview",
  WORKSPACES: "/private/t/:account/ws/",
};

export type PublicRoute = keyof typeof publicRoutes;
export type PrivateRoute = keyof typeof privateRoutes;

export const getPublicRoute = (route: PublicRoute): string => publicRoutes[route];
export const getPrivateRoute = ({ route, segment }: { route: PrivateRoute; segment?: string }): string => {
  const routePath = privateRoutes[route];
  if (segment) return routePath.replace(":account", segment);
  return routePath;
};
