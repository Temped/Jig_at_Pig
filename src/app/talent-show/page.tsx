import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Talent Show — Jig at the Pig",
  description:
    "Pig's Nose Kids Talent Show — application form. Saturday 6th June, 3–5 PM at The Pig's Nose.",
};

const actTypes = ["Singing", "Dancing", "Comedy", "Magic"];

export default function KidsPage() {
  return (
    <div className="page-shell">
      <main className="relative mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="text-center">
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
            Saturday 6th June · 3 PM &ndash; 5 PM · The Pig&apos;s Nose
          </div>
          <h1 className="page-heading mt-4 text-4xl sm:text-6xl">
            Pig&apos;s Nose Kids Talent Show
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-90">
            Sign your child up to perform. Max act length 4 minutes. Places are
            first come, first served.
          </p>
        </div>

        {/* TODO @edward: wire up form submission (server action / API route) — currently mailto placeholder */}
        <form
          className="mt-12 space-y-10"
          action="mailto:jigatpig@gmail.com?subject=Kids%20Talent%20Show%20Application"
          method="post"
          encType="text/plain"
        >
          <FormSection title="Child Details" emoji="👤">
            <Field label="Full name" name="child_name" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Age"
                name="child_age"
                type="number"
                min={0}
                max={18}
                required
              />
              <Field
                label="Date of birth"
                name="child_dob"
                type="date"
                required
              />
            </div>
          </FormSection>

          <FormSection title="Parent / Guardian Details" emoji="👨‍👩‍👧">
            <Field label="Full name" name="guardian_name" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Contact number"
                name="guardian_phone"
                type="tel"
                required
              />
              <Field
                label="Email address"
                name="guardian_email"
                type="email"
                required
              />
            </div>
          </FormSection>

          <FormSection title="Act Details" emoji="🎭">
            <Field label="Name of act (if applicable)" name="act_name" />

            <fieldset>
              <legend className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Type of act
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {actTypes.map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-2 text-sm sm:text-base"
                  >
                    <input
                      type="checkbox"
                      name="act_type"
                      value={t}
                      className="h-4 w-4 accent-[var(--accent-pink)]"
                    />
                    {t}
                  </label>
                ))}
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="checkbox"
                    name="act_type"
                    value="Other"
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  Other
                </label>
                <input
                  type="text"
                  name="act_type_other"
                  placeholder="If other, specify…"
                  className="rounded-md border border-[var(--foreground)]/60 bg-black/40 px-3 py-2 text-sm focus:border-[var(--accent-pink)] focus:outline-none"
                />
              </div>
            </fieldset>

            <fieldset>
              <legend className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Solo or group
              </legend>
              <div className="mt-2 flex gap-6">
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="group_type"
                    value="Solo"
                    required
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  Solo
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="group_type"
                    value="Group"
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  Group
                </label>
              </div>
            </fieldset>

            <Field
              label="If a group, list all performers (names &amp; ages)"
              name="group_members"
              textarea
              rows={3}
            />

            <Field
              label="Short description of the act (what will you be doing?)"
              name="act_description"
              textarea
              rows={4}
              required
            />
          </FormSection>

          <FormSection title="Performance Details" emoji="⏱️">
            <Field
              label="Estimated length in minutes (max 4)"
              name="length_minutes"
              type="number"
              min={1}
              max={4}
              required
            />
          </FormSection>

          <FormSection title="Music &amp; Tech Requirements" emoji="🎵">
            <fieldset>
              <legend className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Will you be using music?
              </legend>
              <div className="mt-2 flex gap-6">
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="using_music"
                    value="Yes"
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="using_music"
                    value="No"
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  No
                </label>
              </div>
            </fieldset>

            <Field
              label="If yes, track name &amp; artist"
              name="music_track"
            />

            <fieldset>
              <legend className="block text-xs tracking-[0.2em] uppercase opacity-70">
                Do you need microphones?
              </legend>
              <div className="mt-2 flex gap-6">
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="need_mics"
                    value="Yes"
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="need_mics"
                    value="No"
                    className="h-4 w-4 accent-[var(--accent-pink)]"
                  />
                  No
                </label>
              </div>
            </fieldset>

            <Field
              label="If yes, how many microphones?"
              name="mic_count"
              type="number"
              min={0}
              max={10}
            />

            <Field
              label="Any other technical or stage requirements? (props, space, setup help)"
              name="other_tech"
              textarea
              rows={3}
            />
          </FormSection>

          <div className="info-card border-[var(--accent-yellow)]">
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent-yellow)]">
              ⚠️ Important
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm sm:text-base space-y-1 opacity-90">
              <li>Maximum performance time is 4 minutes</li>
              <li>Places are first come, first served</li>
            </ul>
          </div>

          <FormSection title="Consent" emoji="✅">
            <label className="flex items-start gap-3 text-sm sm:text-base">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 accent-[var(--accent-pink)]"
              />
              <span>
                I confirm that I am the parent/guardian of the above
                child/children and give permission for them to take part in the
                event.
              </span>
            </label>
            <Field label="Name" name="consent_name" required />
            <Field
              label="Signature (type your full name)"
              name="consent_signature"
              required
            />
          </FormSection>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-[var(--accent-pink)] px-8 py-3 font-[family-name:var(--font-display)] text-base uppercase tracking-[0.15em] text-black hover:brightness-110"
            >
              Submit Application
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

function FormSection({
  title,
  emoji,
  children,
}: {
  title: string;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <section className="form-card space-y-5">
      <h2 className="section-title text-lg sm:text-xl">
        <span className="mr-2" aria-hidden>
          {emoji}
        </span>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </h2>
      {children}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  rows,
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  min?: number;
  max?: number;
}) {
  const inputClass =
    "mt-1 w-full rounded-md border border-[var(--foreground)]/60 bg-black/40 px-3 py-2 text-sm focus:border-[var(--accent-pink)] focus:outline-none";
  return (
    <label className="block">
      <span
        className="block text-xs tracking-[0.2em] uppercase opacity-70"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      {textarea ? (
        <textarea
          name={name}
          rows={rows ?? 3}
          required={required}
          className={inputClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          min={min}
          max={max}
          className={inputClass}
        />
      )}
    </label>
  );
}
