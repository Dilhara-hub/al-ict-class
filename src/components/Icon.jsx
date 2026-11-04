import { BookOpenCheck, ListOrdered, MonitorPlay, Database, FileQuestion, ClipboardCheck, TrendingUp, UserRound, Cpu, GraduationCap, Globe, Network, Briefcase, Wrench, Circle } from 'lucide-react'
const map = { BookOpenCheck, ListOrdered, MonitorPlay, Database, FileQuestion, ClipboardCheck, TrendingUp, UserRound, Cpu, GraduationCap, Globe, Network, Briefcase, Wrench }
export default function Icon({ name, ...p }) { const C = map[name] || Circle; return <C aria-hidden="true" {...p} /> }
