import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Server, Network, Headset, ShieldCheck, KeyRound, Cpu, Code2, PhoneCall, Cctv,
  Award, Clock, MapPin, UserRound, Sparkles, Zap, Phone, Mail, CalendarClock,
  MessageCircle, Menu, X, ArrowRight, Building2, Factory, GraduationCap, Stethoscope, Calculator, Home,
} from "lucide-react";
import heroImg from "@/assets/hero.webp";
import processImg from "@/assets/process.webp";
import clientsImg from "@/assets/clients.webp";
import s1 from "@/assets/s1.webp";
import s2 from "@/assets/s2.webp";
import s3 from "@/assets/s3.webp";
import s4 from "@/assets/s4.webp";
import s5 from "@/assets/s5.webp";
import s6 from "@/assets/s6.webp";
import s7 from "@/assets/s7.webp";
import s8 from "@/assets/s8.webp";
import s9 from "@/assets/s9.webp";

const TITLE = "Salomon Tech | Soluciones IT, Redes y Soporte Técnico en Argentina";
const DESC =
  "Más de 20 años brindando infraestructura IT, redes, soporte técnico 24/7, ciberseguridad y soluciones tecnológicas para empresas en toda Argentina.";
const LOGO = "https://i.postimg.cc/htbWC4Gc/Designer-(6).png";
const WA = "https://wa.me/5491175557845";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Nosotros", "#nosotros"],
  ["Contacto", "#contacto"],
] as const;

const services = [
  [Server, "Infraestructura IT", "Servidores, cloud, virtualización y backups monitoreados para que tu operación nunca se detenga.", s1],
  [Network, "Redes y Conectividad", "Redes LAN/WAN, Wi-Fi empresarial, VPN y cableado estructurado de alto rendimiento.", s2],
  [Headset, "Soporte Técnico 24/7", "Mesa de ayuda, soporte remoto y presencial, y monitoreo proactivo los 365 días del año.", s3],
  [ShieldCheck, "Ciberseguridad", "Antivirus corporativo, firewalls, respaldos automáticos y recuperación ante desastres.", s4],
  [KeyRound, "Licenciamiento de Software", "Microsoft 365, Windows Server, Google Workspace y todas las licencias que tu empresa necesita.", s5],
  [Cpu, "Venta de Hardware e Insumos", "Equipos, componentes y periféricos de las mejores marcas con asesoramiento personalizado.", s6],
  [Code2, "Desarrollo Web y Software", "Sitios web, aplicaciones a medida, ERP y CRM para digitalizar tu empresa.", s7],
  [PhoneCall, "Telefonía IP / VoIP", "Centrales virtuales, comunicaciones unificadas y telefonía en la nube.", s8],
  [Cctv, "Cámaras de Seguridad / CCTV", "Videovigilancia IP con monitoreo remoto desde el celular, para comercios, industrias y hogares.", s9],
] as const;

const clientTypes = [
  [Building2, "Pymes y comercios"],
  [Factory, "Industrias y fábricas"],
  [GraduationCap, "Colegios e instituciones"],
  [Stethoscope, "Clínicas y consultorios"],
  [Calculator, "Estudios contables"],
  [Home, "Particulares"],
] as const;

const benefits = [
  [Award, "20 años de experiencia", "Dos décadas resolviendo desafíos tecnológicos reales."],
  [Clock, "Soporte 24/7 real", "Personas reales que responden, a cualquier hora."],
  [MapPin, "Cobertura en todo el país", "Atendemos empresas en toda la Argentina."],
  [UserRound, "Atención personalizada", "Un equipo que conoce tu infraestructura por su nombre."],
  [Sparkles, "Tecnología de primer nivel", "Trabajamos con las marcas líderes del mercado."],
  [Zap, "Respuesta rápida", "Tiempos de respuesta cortos y compromisos claros."],
] as const;

const steps = [
  ["Diagnóstico", "Escuchamos tus necesidades y evaluamos tu infraestructura."],
  ["Propuesta", "Te presentamos una solución clara, con alcance y costos."],
  ["Implementación", "Ejecutamos el proyecto con técnicos especializados."],
  ["Soporte continuo", "Monitoreamos y evolucionamos tu infraestructura."],
] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) || "");
    const body = `Nombre: ${g("nombre")}\nEmail: ${g("email")}\nTeléfono: ${g("telefono")}\nEmpresa: ${g("empresa")}\nServicio: ${g("servicio")}\n\n${g("mensaje")}`;
    window.location.href = `mailto:contacto@salomontech.com.ar?subject=${encodeURIComponent("Consulta desde la web - " + g("nombre"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "w-full rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-4 py-3 text-ink-foreground placeholder:text-ink-foreground/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40";

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/80 text-ink-foreground backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={LOGO} alt="Salomon Tech" className="h-10 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-ink-foreground/80 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="transition hover:text-ink-foreground">{l}</a>
            ))}
          </nav>
          <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110 md:inline-block">
            Solicitar Presupuesto
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="flex flex-col gap-4 border-t border-ink-foreground/10 px-5 py-5 md:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-lg">{l}</a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-3 text-center font-medium text-primary-foreground">
              Solicitar Presupuesto
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden px-5 pb-20 pt-36 md:pt-48">
        <img src={heroImg} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-primary">Salomon Tech</p>
          <h1 className="animate-fade-up mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl" style={{ animationDelay: "100ms" }}>
            Tecnología que impulsa tu empresa
          </h1>
          <p className="animate-fade-up mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "200ms" }}>
            Más de 20 años brindando soluciones IT integrales en toda Argentina. Infraestructura, redes, soporte técnico 24/7 y ciberseguridad para pymes, industrias, comercios y colegios.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row" style={{ animationDelay: "300ms" }}>
            <a href="#servicios" className="rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110">
              Conocer Servicios
            </a>
            <a href="#contacto" className="group inline-flex items-center gap-1 font-medium text-primary">
              Contactanos <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="animate-fade-up relative mx-auto mt-20 max-w-5xl rounded-full bg-surface px-6 py-4 text-center text-sm font-medium text-muted-foreground" style={{ animationDelay: "450ms" }}>
          +20 años de experiencia · Soporte 24/7 · Cobertura nacional · Atención personalizada
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Servicios</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Todo lo que tu empresa necesita, en un solo lugar</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Desde la infraestructura hasta el soporte diario. Nos ocupamos de la tecnología para que vos te ocupes de tu negocio.</p>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, t, d, img], i) => (
              <Reveal key={t} delay={(i % 3) * 80}>
                <div className="group h-full rounded-3xl bg-surface p-4 pb-8 transition duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-2xl hover:shadow-foreground/5">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                    <img src={img} alt={t} loading="lazy" width={944} height={704} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="px-4">
                  <div className="-mt-6 relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="nosotros" className="bg-surface px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">¿Por qué elegir Salomon Tech?</h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([Icon, t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80}>
                <div className="h-full rounded-3xl bg-background p-8">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <img src={processImg} alt="Equipo de Salomon Tech planificando un proyecto" loading="lazy" width={912} height={1104} className="aspect-[4/5] w-full rounded-3xl object-cover" />
            </Reveal>
            <div>
              <Reveal>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Nuestro proceso, simple y transparente</h2>
              </Reveal>
              <div className="mt-12 space-y-8">
                {steps.map(([t, d], i) => (
                  <Reveal key={t} delay={i * 100}>
                    <div className="flex gap-6 border-t border-border pt-6">
                      <span className="text-4xl font-extrabold text-primary">0{i + 1}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{t}</h3>
                        <p className="mt-1 text-muted-foreground">{d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="relative overflow-hidden px-5 py-24 text-ink-foreground md:py-32">
        <img src={clientsImg} alt="" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Trabajamos con todo tipo de organizaciones</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-foreground/75">
              Desde pymes y comercios hasta industrias, colegios, estudios profesionales y particulares.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {clientTypes.map(([Icon, t], i) => (
              <Reveal key={t} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-ink-foreground/15 bg-ink-foreground/10 p-6 backdrop-blur-md">
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="font-medium">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <blockquote className="mt-20 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              “Más de <span className="text-primary">500 clientes</span> en todo el país confían en nosotros.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-ink px-5 py-24 text-ink-foreground md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">¿Listo para transformar tu infraestructura IT?</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            <Reveal className="space-y-7 lg:col-span-2">
              {[
                [Phone, "WhatsApp / Teléfono", "+54 9 11 7555-7845", WA],
                [Mail, "Email", "contacto@salomontech.com.ar", "mailto:contacto@salomontech.com.ar"],
                [MapPin, "Dirección", "Calle 23 Nro 3414, Berazategui, Buenos Aires", ""],
                [CalendarClock, "Horario", "Lunes a Viernes 9-18hs · Soporte 24/7", ""],
              ].map(([Icon, l, v, h]) => {
                const I = Icon as typeof Phone;
                return (
                  <div key={l as string} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <I className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-ink-foreground/50">{l as string}</p>
                      {h ? (
                        <a href={h as string} target={(h as string).startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-lg hover:text-primary">{v as string}</a>
                      ) : (
                        <p className="text-lg">{v as string}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </Reveal>
            <Reveal className="lg:col-span-3" delay={100}>
              <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-6 backdrop-blur-xl sm:grid-cols-2 md:p-8">
                <input required name="nombre" placeholder="Nombre" className={input} />
                <input required type="email" name="email" placeholder="Email" className={input} />
                <input name="telefono" placeholder="Teléfono" className={input} />
                <input name="empresa" placeholder="Empresa" className={input} />
                <select name="servicio" defaultValue="" className={`${input} sm:col-span-2`}>
                  <option value="" disabled>Servicio de interés</option>
                  {services.map(([, t]) => (
                    <option key={t} value={t} className="text-foreground">{t}</option>
                  ))}
                </select>
                <textarea required name="mensaje" rows={5} placeholder="Mensaje" className={`${input} sm:col-span-2`} />
                <button className="rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:brightness-110 sm:col-span-2 sm:justify-self-start">
                  Enviar consulta
                </button>
                {sent && <p className="text-sm text-ink-foreground/70 sm:col-span-2">¡Gracias! Se abrió tu correo para completar el envío.</p>}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-foreground/10 bg-ink px-5 pb-10 pt-16 text-ink-foreground/70">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={LOGO} alt="Salomon Tech" className="h-12 w-auto" />
            <p className="mt-4 text-sm">Soluciones IT integrales para empresas de toda Argentina desde hace más de 20 años.</p>
          </div>
          <div>
            <p className="mb-4 font-semibold text-ink-foreground">Secciones</p>
            <ul className="space-y-2 text-sm">
              {nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-ink-foreground">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-ink-foreground">Servicios</p>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map(([, t]) => <li key={t}><a href="#servicios" className="hover:text-ink-foreground">{t}</a></li>)}
            </ul>
          </div>
          <div className="space-y-2 text-sm">
            <p className="mb-4 font-semibold text-ink-foreground">Contacto</p>
            <p><a href={WA} target="_blank" rel="noreferrer" className="hover:text-ink-foreground">+54 9 11 7555-7845</a></p>
            <p><a href="mailto:contacto@salomontech.com.ar" className="hover:text-ink-foreground">contacto@salomontech.com.ar</a></p>
            <p>Calle 23 Nro 3414, Berazategui, Buenos Aires</p>
            <p>Lun a Vie 9-18hs · Soporte 24/7</p>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-6xl border-t border-ink-foreground/10 pt-6 text-center text-xs">
          © 2026 Salomon Tech. Todos los derechos reservados.
        </p>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="animate-wa-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
