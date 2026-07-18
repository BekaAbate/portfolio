import { navLinks, socialLinks } from '@/data/links';

export default function Footer() {
  return (
    <div className="mb-16  px-6 md:px-16">
      <div className="w-full h-px bg-muted-foregroud"></div>
      <div className="grid grid-cols-2 py-10 gap-4">
        <div className="text-center">
          <p className="text-3xl sm:text-5xl font-bold uppercase font-serif">
            Lets Talk.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="uppercase font-serif text-sm mb-3">my socials</p>
            <div className="flex flex-col gap-2 text-sm font-mono text-muted-foregroud">
              {socialLinks.map((social) => (
                <div key={social.label}>
                  <a className="hover:text-foreground" href={social.url}>
                    {social.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="uppercase font-serif text-sm mb-3">short links</p>
            <div className="flex flex-col gap-2 text-sm font-mono text-muted-foregroud">
              {navLinks.map((nav) => (
                <div key={nav.label}>
                  <a className="hover:text-foreground" href={nav.href}>
                    {nav.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
