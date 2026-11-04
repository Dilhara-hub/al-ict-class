import { site } from './data/website'
export const waUrl = (msg = site.whatsappMessage) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`

