import { useState } from 'react'
import { EDUCATIONS } from '../data/Educations'

type EducationKey = keyof typeof EDUCATIONS

export default function ContentEducation() {
  const [activeTopic, setActiveTopic] = useState<EducationKey>('accessibility')
  const education = EDUCATIONS[activeTopic]

  const handleTabClick = (topicKey: EducationKey) => setActiveTopic(topicKey)

  return (
    <section className="section flex flex-col items-center">
      <div className="container flex flex-col gap-8">
        <nav className="my-4 p-0 flex gap-2">
          {Object.entries(EDUCATIONS).map(([key, edu]) => (
            <button
              key={key}
              onClick={() => handleTabClick(key as EducationKey)}
              className={`px-4 py-2 rounded-lg border-0 font-['Roboto_Condensed',sans-serif] text-base cursor-pointer transition-all duration-200
              ${activeTopic === key ? 'bg-[var(--yellow)] text-black' : 'bg-[var(--dark-blue)] text-[var(--white)] hover:bg-[var(--dark-yellow)] hover:text-[var(--black)]'}`}
              aria-pressed={activeTopic === key}
            >
              {edu.title}
            </button>
          ))}
        </nav>

        {education && (
          <div id="tab-content" className="p-8 rounded-lg bg-[var(--dark-blue)] grid w-full grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between relative">
              <div>
                <h3 className="flex items-center gap-2 mb-4 text-lg font-bold flex">{education.title}</h3>
                <div
                  className="flex flex-col gap-4 text-[var(--white)]"
                  dangerouslySetInnerHTML={{
                    __html: education.description
                  }}
                />
              </div>

              {'link' in education && education.link ? (
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--white)] w-fit no-underline pb-1 border-b border-[var(--yellow)] mt-4 transition-colors hover:text-[var(--yellow)]"
                >
                  View {education.title}
                </a>
              ) : null}
            </div>

            {education.image && <img src={education.image} alt={`${education.title} Timo Smit`} className="w-full h-auto object-cover" />}
          </div>
        )}
      </div>
    </section>
  )
}
