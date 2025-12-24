'use client';

export default function InterviewInsightsReport() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Executive Summary */}
      <section className="mb-12 p-6 rounded-xl border border-white/10 bg-white/5">
        <h2 className="text-2xl font-bold mb-4 text-white">Executive Summary</h2>
        <p className="text-zinc-300 leading-relaxed">
          This report synthesizes insights from <strong>19 in-depth interviews</strong> conducted with diverse stakeholders
          including students, early-career professionals, experienced professionals, recruiters, entrepreneurs, and
          international job seekers. The interviews reveal a deeply broken professional networking and job search
          ecosystem where traditional methods have become ineffective, AI has created new barriers, and meaningful
          human connections have been replaced by performative interactions.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-3xl font-bold text-red-400">88%</p>
            <p className="text-sm text-zinc-400">Report frustrating job search experiences</p>
          </div>
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <p className="text-3xl font-bold text-amber-400">5,000+</p>
            <p className="text-sm text-zinc-400">Max applications submitted by a single interviewee</p>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">&lt;1%</p>
            <p className="text-sm text-zinc-400">Typical response rate from applications</p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Key Themes Identified</h2>

        {/* Theme 1: Broken Job Application Process */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-emerald-400">1. The Job Application Process is Fundamentally Broken</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">ATS Systems Create Barriers</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Applicant Tracking Systems (ATS) are filtering out qualified candidates while letting through unqualified ones.
                Multiple recruiters confirmed that senior leadership at companies believe they&apos;re losing up to 88% of qualified candidates through these systems.
              </p>
              <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-zinc-300">
                &quot;The easiest thing I would say is definitely the biggest help to me would be getting around the applicant tracking systems...
                Getting in front of a human is so difficult now.&quot; <span className="text-zinc-500">— William Fullerton, Student</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Volume Has Replaced Quality</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Students are applying to hundreds or thousands of positions with minimal response rates. This creates a
                vicious cycle where high volumes of applications force more automation, which further dehumanizes the process.
              </p>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Aniket Kumar: 5,000+ applications, 30+ per day</li>
                <li>William Fullerton: 1,000+ applications over college career, &lt;100 interviews</li>
                <li>Harshitha Yalama: 8+ months searching, zero positive responses</li>
                <li>Jake (Business Insider profile): 1,500+ applications in 18 months, no offers</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Ghost Jobs and Fake Postings</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Recruiters confirmed that many companies post fake jobs for promotional purposes or to collect resumes,
                with no intention of hiring. Additionally, companies are legally required to post jobs externally even
                when they&apos;ve already identified internal candidates.
              </p>
              <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-zinc-300">
                &quot;A few of the recruiters that I have spoken with have admitted to me flat out that a lot of companies
                will post fake jobs to promote themselves and to make themselves look more successful than they are.&quot;
                <span className="text-zinc-500">— Interview excerpt</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Theme 2: LinkedIn Inadequacy */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">2. LinkedIn is Performative and Ineffective</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">The Authenticity Problem</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Interviewees consistently described LinkedIn as &quot;performative,&quot; &quot;a black hole,&quot; and full of AI-generated
                content that lacks authenticity. Posts are seen as inauthentic attempts to gain visibility rather than
                genuine professional communication.
              </p>
              <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-300">
                &quot;Every single DM is literally the same. Even the posts on LinkedIn are just performative.
                I just open and keep scrolling through and it looks like AI wrote them. Nothing else.
                There&apos;s no real content, but it&apos;s just motivation.&quot; <span className="text-zinc-500">— Harshitha Yalama</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Connections Without Connection</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Users accumulate large numbers of &quot;connections&quot; but report feeling increasingly isolated.
                The platform facilitates quantity over quality of relationships.
              </p>
              <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-300">
                &quot;I have over 2,100 LinkedIn connections... but I feel like that should be a first step.
                We&apos;ve kind of taken human beings out of the recruiting process.&quot;
                <span className="text-zinc-500">— William Fullerton</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Job Board Delays</h4>
              <p className="text-zinc-400 text-sm">
                Multiple interviewees noted that job postings on LinkedIn are delayed by 2-3 days compared to company
                career pages, putting applicants at a disadvantage when applying through the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Theme 3: Human Connection Deficit */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">3. Severe Deficit in Meaningful Human Connection</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Cold Outreach Fails Consistently</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Cold emails, LinkedIn messages, and other digital outreach methods have abysmal response rates.
                Even personalized, thoughtful outreach often goes unanswered.
              </p>
              <blockquote className="border-l-2 border-purple-500 pl-4 italic text-zinc-300">
                &quot;I&apos;ve sent easily 15 to 20 cold emails to people only who work at Spotify. Didn&apos;t work.
                Not a single response.&quot; <span className="text-zinc-500">— Harshitha Yalama</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Ghosting is the New Normal</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Both job seekers and recruiters report that ghosting has become endemic. Companies ghost candidates
                after interviews, candidates ghost recruiters, and the lack of closure creates frustration on all sides.
              </p>
              <blockquote className="border-l-2 border-purple-500 pl-4 italic text-zinc-300">
                &quot;They&apos;re not even declining or they are not even saying we have moved forward with the other candidate.
                They are just ghosting. So that&apos;s a big problem.&quot; <span className="text-zinc-500">— Aniket Kumar</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Local Communities Have Eroded</h4>
              <p className="text-zinc-400 text-sm">
                Previous in-person networking events, meetups, and professional communities have largely disappeared,
                particularly post-COVID. This has left professionals feeling more isolated than ever.
              </p>
              <blockquote className="border-l-2 border-purple-500 pl-4 italic text-zinc-300">
                &quot;I do miss prior to COVID, those years of networking. There was Buffalo Startup Week and Buffalo Startup
                Weekend and the Buffalo Open Coffee Club... they&apos;ve all just kind of dwindled away.&quot;
                <span className="text-zinc-500">— Scott Fiege, Recruiter</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Theme 4: Jobs Through Relationships */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-amber-400">4. Jobs Happen Through Relationships, Not Applications</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Referrals Trump Applications</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Every successful job acquisition mentioned in the interviews came through personal connections, not cold
                applications. Recruiters confirmed they prioritize referred candidates.
              </p>
              <blockquote className="border-l-2 border-amber-500 pl-4 italic text-zinc-300">
                &quot;The first thing I would do is text all my buddies that I made over the years and say, hey,
                just lost my job. You guys got anything lined up?&quot; <span className="text-zinc-500">— Andrew Collado</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">The &quot;Who You Know&quot; Reality</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Multiple interviewees acknowledged that networking and connections are the only reliable path to
                employment in the current market.
              </p>
              <blockquote className="border-l-2 border-amber-500 pl-4 italic text-zinc-300">
                &quot;All we really have is LinkedIn and who you know and who you can get introduced to.
                Like, that&apos;s all we have.&quot; <span className="text-zinc-500">— Interview excerpt</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Warm Introductions vs Cold Applications</h4>
              <p className="text-zinc-400 text-sm">
                Recruiters express strong preference for warm introductions and candidates who come through referrals.
                The conversion rate and quality of these candidates is significantly higher.
              </p>
            </div>
          </div>
        </div>

        {/* Theme 5: International Student Challenges */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-rose-400">5. International Students Face Compounded Challenges</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Sponsorship as a Deal-Breaker</h4>
              <p className="text-zinc-400 text-sm mb-3">
                International students face an additional barrier: visa sponsorship requirements. Many companies are
                unwilling to sponsor, and new regulations add costs that make hiring international talent less attractive.
              </p>
              <blockquote className="border-l-2 border-rose-500 pl-4 italic text-zinc-300">
                &quot;I cleared like, the first three rounds. All the technical rounds were done... And then there was
                this visa issue. They were even fine with sponsoring me. But then there was this rule that a company
                will have to pay 100k for each new person they hire.&quot; <span className="text-zinc-500">— Harshitha Yalama</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Limited Options</h4>
              <p className="text-zinc-400 text-sm">
                International students can only apply to companies willing to sponsor, dramatically reducing their pool
                of opportunities compared to domestic candidates.
              </p>
            </div>
          </div>
        </div>

        {/* Theme 6: Recruiter Perspective */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">6. Recruiters Face Their Own Struggles</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Finding Qualified Candidates is Difficult</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Paradoxically, while job seekers struggle to get responses, recruiters report difficulty finding
                qualified candidates for specific roles. The tools available don&apos;t surface the right talent.
              </p>
              <blockquote className="border-l-2 border-cyan-500 pl-4 italic text-zinc-300">
                &quot;I have about 15 to 20 jobs as a recruiter open right now. Maybe half of them are actually fillable.
                The other half are like, I&apos;m literally looking for something that doesn&apos;t exist anymore.&quot;
                <span className="text-zinc-500">— Scott Fiege</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">LinkedIn Profiles Lack Detail</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Many professionals don&apos;t maintain detailed LinkedIn profiles, making it hard for recruiters to find
                candidates with specific skill sets.
              </p>
              <blockquote className="border-l-2 border-cyan-500 pl-4 italic text-zinc-300">
                &quot;I don&apos;t think a lot of people build up their LinkedIn pages like you and I would do.
                I think a lot of people just kind of set it and forget it with a job title and where they&apos;re at,
                and that&apos;s it.&quot; <span className="text-zinc-500">— Scott Fiege</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Unrealistic Employer Expectations</h4>
              <p className="text-zinc-400 text-sm">
                Employers often have unrealistic expectations about candidate availability and qualifications,
                expecting &quot;Josh Allen&quot; level talent when only &quot;James Winston&quot; is available.
              </p>
            </div>
          </div>
        </div>

        {/* Theme 7: AI Double-Edged Sword */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">7. AI is a Double-Edged Sword</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">AI Creates New Barriers</h4>
              <p className="text-zinc-400 text-sm mb-3">
                AI is being used by both sides - candidates use it to mass-apply and tailor resumes, while companies
                use it to screen applicants. This creates an arms race that benefits no one.
              </p>
              <blockquote className="border-l-2 border-indigo-500 pl-4 italic text-zinc-300">
                &quot;There&apos;s these AI accounts that&apos;ll go and apply to jobs for some reason, or there&apos;s these
                people that get through the ATS software but just read off ChatGPT in the interview and they can tell.&quot;
                <span className="text-zinc-500">— William Fullerton</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">AI Also Levels the Playing Field</h4>
              <p className="text-zinc-400 text-sm">
                On the positive side, AI tools allow individuals to accomplish tasks that previously required large
                teams, potentially enabling new forms of entrepreneurship and innovation.
              </p>
              <blockquote className="border-l-2 border-indigo-500 pl-4 italic text-zinc-300">
                &quot;I was literally building applications myself in my home office that a year prior would have taken
                me a team of 15 people and a few million dollars.&quot; <span className="text-zinc-500">— Interview excerpt</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Theme 8: Desire for Authenticity */}
        <div className="mb-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold mb-4 text-green-400">8. Strong Desire for Authentic Human Connection</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Face-to-Face is Preferred</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Despite digital tools, interviewees consistently expressed preference for face-to-face interactions
                and real human conversations over digital networking.
              </p>
              <blockquote className="border-l-2 border-green-500 pl-4 italic text-zinc-300">
                &quot;I always love connecting with people more on phone calls than messages. I really do believe
                we need to get back to being more human and talking to people.&quot;
                <span className="text-zinc-500">— William Fullerton</span>
              </blockquote>
            </div>
            <div className="p-4 rounded-lg bg-black/30">
              <h4 className="font-medium text-white mb-2">Quality Over Quantity</h4>
              <p className="text-zinc-400 text-sm">
                There&apos;s a clear desire for fewer but more meaningful connections rather than large networks of
                superficial contacts.
              </p>
              <blockquote className="border-l-2 border-green-500 pl-4 italic text-zinc-300">
                &quot;Now that we&apos;ve spoken face to face, that&apos;s more meaningful than most of my thousand connections
                on LinkedIn, who I probably never talked to before.&quot; <span className="text-zinc-500">— Interview excerpt</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Persona-Specific Insights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Insights by Persona</h2>

        {/* Students/Early Career */}
        <div className="mb-6 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-4 text-emerald-400">Students & Early-Career Professionals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Key Pain Points</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Applications disappear into &quot;black holes&quot;</li>
                <li>Entry-level jobs require years of experience</li>
                <li>Can&apos;t get past automated screening systems</li>
                <li>No way to stand out from other candidates</li>
                <li>Don&apos;t know the right people</li>
                <li>Unclear what employers actually want</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">What Would Help</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Connections to people who can refer them</li>
                <li>Mentorship from people in target field</li>
                <li>Visibility into companies actually hiring</li>
                <li>Getting past ATS directly to hiring managers</li>
                <li>Portfolio/project showcase opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mentors/Advisors */}
        <div className="mb-6 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Mentors & Experienced Professionals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Key Pain Points</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Don&apos;t know how to find people who need help</li>
                <li>Too much friction in scheduling and logistics</li>
                <li>Overwhelmed by cold outreach requests</li>
                <li>Difficult to assess if requests are genuine</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">What Would Help</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Automatic matching with qualified mentees</li>
                <li>Reduced friction in scheduling</li>
                <li>Visibility into mentee outcomes over time</li>
                <li>Curated, quality requests vs cold outreach</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recruiters/Employers */}
        <div className="mb-6 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-4 text-amber-400">Recruiters & Employers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Key Pain Points</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Too many unqualified applicants to filter</li>
                <li>Can&apos;t find candidates with specific skills</li>
                <li>Good candidates get scooped up by competitors</li>
                <li>Hard to assess culture fit before hiring</li>
                <li>Incomplete LinkedIn profiles hide talent</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">What Would Help</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Warm introductions to pre-qualified candidates</li>
                <li>Visibility into candidate growth trajectory</li>
                <li>Access to local talent pool</li>
                <li>Better skill validation beyond resumes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Entrepreneurs/Consultants */}
        <div className="mb-6 p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Entrepreneurs & Consultants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Key Pain Points</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Client acquisition relies on referrals</li>
                <li>Proving ROI to potential clients</li>
                <li>Standing out from competitors</li>
                <li>Finding qualified leads organically</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">What Would Help</h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Organic connections through purpose alignment</li>
                <li>Platform for showcasing expertise authentically</li>
                <li>Ecosystem building vs transactional networking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preferences */}
      <section className="mb-12 p-6 rounded-xl border border-white/10 bg-white/5">
        <h2 className="text-2xl font-bold mb-4 text-white">Communication Platform Preferences</h2>
        <p className="text-zinc-300 mb-6">
          Interviewees were asked about their preferred communication channels and platform usage:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <h4 className="font-medium text-green-400 mb-2">WhatsApp</h4>
            <p className="text-sm text-zinc-400">
              High adoption among international users and younger professionals. Preferred for its simplicity
              and cross-platform compatibility.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-medium text-blue-400 mb-2">LinkedIn Messaging</h4>
            <p className="text-sm text-zinc-400">
              Used out of necessity but viewed negatively. Messages often go unanswered and feel impersonal.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <h4 className="font-medium text-purple-400 mb-2">Discord</h4>
            <p className="text-sm text-zinc-400">
              Growing adoption among tech-savvy users and students. Seen as more authentic than LinkedIn.
            </p>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-white/5">
          <p className="text-sm text-zinc-400">
            <strong className="text-white">Key Insight:</strong> There&apos;s strong interest in UI-free, text-based
            interactions that don&apos;t require downloading another app. WhatsApp emerged as the most accessible
            option for building a cross-platform solution.
          </p>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="mb-12 p-6 rounded-xl border border-white/10 bg-white/5">
        <h2 className="text-2xl font-bold mb-4 text-white">Competitive Landscape Mentions</h2>
        <p className="text-zinc-300 mb-4">
          Interviewees mentioned awareness of or experience with alternative solutions:
        </p>
        <ul className="space-y-3">
          <li className="p-3 rounded-lg bg-black/30">
            <span className="font-medium text-white">Series</span>
            <span className="text-zinc-400 ml-2 text-sm">
              - iMessage-based AI matching service mentioned by students. Founded by recent college students
              with &quot;very Gen Z styled&quot; marketing.
            </span>
          </li>
          <li className="p-3 rounded-lg bg-black/30">
            <span className="font-medium text-white">Voardy AI</span>
            <span className="text-zinc-400 ml-2 text-sm">
              - WhatsApp-based professional networking tool.
            </span>
          </li>
          <li className="p-3 rounded-lg bg-black/30">
            <span className="font-medium text-white">Eightfold AI</span>
            <span className="text-zinc-400 ml-2 text-sm">
              - Enterprise ATS system used by major banks. Recruiters report it &quot;just doesn&apos;t work&quot; for
              effective candidate matching.
            </span>
          </li>
          <li className="p-3 rounded-lg bg-black/30">
            <span className="font-medium text-white">Job Right AI</span>
            <span className="text-zinc-400 ml-2 text-sm">
              - Job search platform with visa sponsorship filtering, used by international students.
            </span>
          </li>
        </ul>
      </section>

      {/* Recommendations */}
      <section className="mb-12 p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Strategic Recommendations</h2>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-black/30">
            <h3 className="font-semibold text-white mb-2">1. Focus on Meaningful Matching, Not Volume</h3>
            <p className="text-zinc-400 text-sm">
              The market is oversaturated with tools that facilitate high-volume, low-quality interactions.
              Position the platform around quality connections with built-in accountability to prevent ghosting.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/30">
            <h3 className="font-semibold text-white mb-2">2. Start with the Student-Mentor Connection</h3>
            <p className="text-zinc-400 text-sm">
              Students have the most acute pain and are highly motivated. Mentors want to give back but need
              friction removed. This is the clearest value proposition for initial launch.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/30">
            <h3 className="font-semibold text-white mb-2">3. Prioritize Local/Regional Networks</h3>
            <p className="text-zinc-400 text-sm">
              The erosion of local professional communities creates an opportunity. Position as a tool for
              rebuilding regional professional networks rather than competing with global platforms.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/30">
            <h3 className="font-semibold text-white mb-2">4. Build on WhatsApp</h3>
            <p className="text-zinc-400 text-sm">
              WhatsApp offers the best combination of adoption, cross-platform compatibility, and API capabilities.
              The UI-free approach resonates strongly with all personas.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/30">
            <h3 className="font-semibold text-white mb-2">5. Create Accountability Mechanisms</h3>
            <p className="text-zinc-400 text-sm">
              Build in features that discourage ghosting and reward follow-through. This differentiates from
              existing platforms and addresses a universal frustration.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/30">
            <h3 className="font-semibold text-white mb-2">6. Enable Portfolio/Project Showcasing</h3>
            <p className="text-zinc-400 text-sm">
              Students consistently mentioned the importance of demonstrating work through portfolios and projects.
              Build features that highlight demonstrated skills over resume credentials.
            </p>
          </div>
        </div>
      </section>

      {/* Interview Summary Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Interview Summary</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left font-medium">Interviewee</th>
                <th className="px-4 py-3 text-left font-medium">Persona</th>
                <th className="px-4 py-3 text-left font-medium">Key Context</th>
                <th className="px-4 py-3 text-left font-medium">Primary Pain Point</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">William Fullerton</td>
                <td className="px-4 py-3">Student</td>
                <td className="px-4 py-3">RMU graduating senior, hackathon organizer</td>
                <td className="px-4 py-3">1000+ applications, &lt;100 interviews; ATS systems</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Andrew Collado</td>
                <td className="px-4 py-3">Student/Professional</td>
                <td className="px-4 py-3">UB Hacking director, software engineer at Northtown</td>
                <td className="px-4 py-3">Business development experience gap for students</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Jake Woodward (Cameroon)</td>
                <td className="px-4 py-3">Entrepreneur</td>
                <td className="px-4 py-3">AI consultant, traveled 13 countries for research</td>
                <td className="px-4 py-3">Purpose alignment and equity in connections</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Harshitha Yalama</td>
                <td className="px-4 py-3">International Student</td>
                <td className="px-4 py-3">Purdue CS grad, 8+ months searching</td>
                <td className="px-4 py-3">Zero responses; visa sponsorship barriers</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Scott Fiege</td>
                <td className="px-4 py-3">Recruiter</td>
                <td className="px-4 py-3">15-20 open roles, internal recruiter experience</td>
                <td className="px-4 py-3">Unfillable roles; passive candidates don&apos;t engage</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Aniket Kumar</td>
                <td className="px-4 py-3">International Student</td>
                <td className="px-4 py-3">UB MS CS, 4 years prior experience</td>
                <td className="px-4 py-3">5000+ applications; sponsorship limitations</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">JB</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Year+ unemployed, 2000+ applications</td>
                <td className="px-4 py-3">&quot;Who do you know that&apos;s hiring?&quot; - no one</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Cornell</td>
                <td className="px-4 py-3">Mentor/Professional</td>
                <td className="px-4 py-3">Engineering mentor at Cornell</td>
                <td className="px-4 py-3">Finding right mentees; logistics overhead</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Nick</td>
                <td className="px-4 py-3">Entrepreneur</td>
                <td className="px-4 py-3">Tech startup founder</td>
                <td className="px-4 py-3">Building authentic community vs performative networking</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Hadar</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Tech professional</td>
                <td className="px-4 py-3">LinkedIn fatigue; desire for meaningful connections</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Wolff</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Industry professional</td>
                <td className="px-4 py-3">Local community erosion</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Safro</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Tech professional</td>
                <td className="px-4 py-3">Quality over quantity in networking</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Mythri</td>
                <td className="px-4 py-3">Student</td>
                <td className="px-4 py-3">Student job seeker</td>
                <td className="px-4 py-3">Breaking into industry without connections</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Neem</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Career professional</td>
                <td className="px-4 py-3">Mentorship access barriers</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Frazure</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Industry professional</td>
                <td className="px-4 py-3">Networking effectiveness decline</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Pelloni</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Business professional</td>
                <td className="px-4 py-3">Professional community disconnection</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Harriman</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Industry professional</td>
                <td className="px-4 py-3">Authentic relationship building</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Payne</td>
                <td className="px-4 py-3">Professional</td>
                <td className="px-4 py-3">Career professional</td>
                <td className="px-4 py-3">Job market navigation</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">Chambers/Rao/Raj</td>
                <td className="px-4 py-3">Various</td>
                <td className="px-4 py-3">Various backgrounds</td>
                <td className="px-4 py-3">Systemic networking challenges</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="p-6 rounded-xl border border-white/10 bg-white/5">
        <h2 className="text-xl font-bold mb-4 text-white">Methodology</h2>
        <p className="text-zinc-400 text-sm mb-4">
          This report synthesizes qualitative data from 19 semi-structured interviews conducted in December 2024.
          Interviews ranged from 15-60 minutes and covered professional backgrounds, current job search/networking
          experiences, pain points with existing platforms, and openness to new solutions.
        </p>
        <p className="text-zinc-400 text-sm">
          <strong className="text-white">Interviewee demographics:</strong> Students (both domestic and international),
          early-career professionals, experienced professionals, recruiters, entrepreneurs, and consultants primarily
          from the Western New York region with some national/international participants.
        </p>
      </section>
    </div>
  );
}
