import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import "dayjs/locale/es";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ")
}

export function sortArrayString(arr: string[]) {
  return arr.sort((a, b) => a.localeCompare(b))
}

export function formatPrice(price: number | string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(Number(price))
}

export function formatDate(date: Date | string | undefined) {
  if (!date) return "NaN"
  return dayjs(date).locale("es").format("D MMMM, YYYY HH:mm:ss")
}

export const IVA = 1.21

export function includeStringIntoOtherString(str1: string, str2: string) {
  const normalize = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);
  return normalizedStr1.includes(normalizedStr2);
}