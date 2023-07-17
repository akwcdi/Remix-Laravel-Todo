import { BACKEND_URL } from "frontend/app/util/config";

export const apiUrl = (path: string) => {
  return new URL(`${BACKEND_URL}${path}`);
};