import { cache } from "react";
import { auth } from "@/lib/auth";

export const getAuthSession = cache(async () => await auth());
