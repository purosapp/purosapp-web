import { LINKS } from "@/lib/links";
import { ArrowRightIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

const POINTS = [
  {
    title: "The engine stays the engine",
    body: "Providers bring a catalog and audio files. Puros keeps the library, queue, decoding, DSP and output, so everything above applies to them too.",
  },
  {
    title: "Isolated and explicit",
    body: "Each provider runs in its own process. Before installing, you see what it can access: services, stored secrets and helper programs.",
  },
  {
    title: "Signed packages",
    body: "Packages are reproducible ZIPs, optionally signed by their publisher. Puros pins the key on first install and warns if it ever changes.",
  },
];

export function ExtensibilitySection() {
  return (
    <section id="extensibility" className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading eyebrow="Extensibility" title="Open where it makes sense.">
            Puros is closed source, but its integration layer is not. New sources plug in as providers: separate
            packages built against a public, MIT-licensed SDK and installed from Settings.
          </SectionHeading>

          <div className="reveal mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
            <a href={LINKS.sdk} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-text">
              Provider SDK
              <ArrowRightIcon className="size-3.5 text-accent transition group-hover:translate-x-0.5" />
            </a>
            <a href={LINKS.providers} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-text">
              Community providers
              <ArrowRightIcon className="size-3.5 text-accent transition group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="reveal mt-4 max-w-md text-sm leading-relaxed text-faint">
            Community providers are third-party software, published by their authors. They are not part of Puros.
          </p>
        </div>

        <div className="reveal space-y-10">
          <pre className="glass overflow-x-auto rounded-2xl p-6 font-mono text-[0.8rem] leading-7 text-muted">
            <code>
              <span className="text-faint"># build a provider</span>
              {"\n"}npm install --save-dev <span className="text-text">puros-provider-sdk</span>
              {"\n"}npx puros-provider validate
              {"\n"}npx puros-provider pack
              {"\n"}
              <span className="text-signal">release/puros-provider-&lt;id&gt;-&lt;version&gt;.zip</span>
            </code>
          </pre>
          <dl className="space-y-8">
            {POINTS.map((point) => (
              <div key={point.title}>
                <dt className="font-medium tracking-tight text-text">{point.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{point.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
