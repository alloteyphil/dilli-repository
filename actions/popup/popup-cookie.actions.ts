"use server";

import { cookies } from "next/headers";

export const setPopupCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set("popupClosed", new Date().getTime().toString());
};

export const getPopupCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("popupClosed");
};
