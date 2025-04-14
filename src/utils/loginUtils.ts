import type { AstroCookies } from "astro";

const url = "https://gourmet.cours.quimerch.com/me";

// returns the username of the user for further use
export async function getUsername(cookies: AstroCookies): Promise<string | null> {
  if (!cookies.has("token")) {
    return null;
  }

  const cookie = cookies.get("token")?.value;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Cookie: `jwt_token=${cookie}`,
    },
  });

  if (response.status == 200) {
    const data = await response.json();

    return data["username"];
  }

  // if we try to log in and our cookie is invalid we delete it
  cookies.delete("token")
  return null;
}

export async function isLoggedIn(cookies: AstroCookies): Promise<boolean> {
  if (await getUsername(cookies) == null) {
    return false;
  }

  return true;
}

export function logout(cookies: AstroCookies): void {
  cookies.delete("token");
}
