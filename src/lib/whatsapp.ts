import { WHATSAPP_NUMBER } from "./constants";

type WhatsAppParams = {
  source: string;
  medium: string;
  message?: string;
};

export function buildWhatsAppUrl({
  source,
  medium,
  message,
}: WhatsAppParams): string {
  const defaultMessage =
    "Hi, I'm interested in Disflay digital signage for my business.";
  const body = message || defaultMessage;
  const tracked = `${body}\n\n[Source: ${source}, Medium: ${medium}]`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tracked)}`;
}
