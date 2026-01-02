import type { Metadata } from 'next'
import Image from 'next/image'
import ProfilPhoto from '~/assets/profile-photo.png'
import { Badge } from '~/components/badge'
import { Button } from '~/components/button'
import { ProjectCard } from '~/components/project-card'
import { allProjects } from '~/content'
import { experiences } from '~/data'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Next Portfolio Starter',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="-mt-30 flex min-h-[528px] items-center justify-center border-white/8 border-b bg-neutral-850 py-20"
      >
        <div className="container mt-20 flex flex-col items-center gap-8 text-center">
          <h1 className="font-medium text-5xl text-neutral-500">
            Hans-Peter Grahsl
            <br />
            <span className="font-normal text-white">
              Developer Advocate
            </span>
          </h1>
          <p className="max-w-lg font-medium text-lg text-neutral-250">
            A passionate advocate for developer experience, I specialize in
            creating seamless workflows and tools that empower developers to
            excel in their craft.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={cn(
          'container relative z-10 mt-20 mb-10 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-12 rounded-b-2xl bg-linear-to-tl from-white/8 to-20% p-8 md:grid-cols-12',
        )}
      >
        <div className="col-span-1 space-y-3 md:col-span-8">
          <Badge>About me</Badge>
          <p className="font-medium text-neutral-250 text-xl">
            Hans-Peter Grahsl is a Developer Advocate and open-source community enthusiast with a particular passion for event-driven architectures, distributed stream processing systems and data engineering. Until recently, he was with Decodable (acquired by Redis) and had previously worked at Red Hat in a similar role. For his code contributions, conference talks and blog post writing at the intersection of the Apache Kafka and MongoDB communities, Hans-Peter received multiple community awards and became one of the founding members of the MongoDB Champions Program in late 2020. He is a regular speaker at international developer and tech conferences for several years.
          </p>
        </div>
        <Image
          className="col-span-1 rounded-2xl md:col-span-4"
          src={ProfilPhoto}
          alt=""
        />
      </section>
    </>
  )
}

// /* Halo */

// box-sizing: border-box;

// position: absolute;
// width: 308px;
// height: 311px;
// left: 932px;
// top: 80px;

// background: linear-gradient(317.25deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 48.18%);
// backdrop-filter: blur(7.48998px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 32px;
