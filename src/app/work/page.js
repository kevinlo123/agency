import SubPageHero from '../components/SubPageHero'

export default function Work() {
  const heroContent = {
    label: 'Our Work',
    title: 'Please take a look at our previous work'
  }
  return (
    <main>
      <SubPageHero content={heroContent} borderBtm={true}/>
      <div class="max-w-7xl mx-auto mt-10 px-6 lg:px-8 space-y-20 sm:space-y-24 lg:space-y-32">
        <div style={{'opacity': '1', 'transform': 'none'}}>
            <article>
              <div class="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative">
                  <div class="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div class="sm:flex sm:items-center sm:gap-x-6 lg:block">
                        <img alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" class="h-16 w-16 flex-none" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" style={{'color': 'transparent'}} />
                        <h3 class="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">FamilyFund</h3>
                    </div>
                    <div class="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                        <p class="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">Web development, CMS</p>
                        <p class="text-sm text-neutral-950 lg:mt-2"><time dateTime="2023-01">January 2023</time></p>
                    </div>
                  </div>
                  <div class="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p class="font-display text-4xl font-medium text-neutral-950"><a href="/work/family-fund">Skip the bank, borrow from those you trust</a></p>
                    <div class="mt-6 space-y-6 text-base text-neutral-600">
                        <p>FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.</p>
                        <p>We developed a custom CMS to power their blog with and optimised their site to rank higher for the keywords “Gary Vee” and “Tony Robbins”.</p>
                    </div>
                    <div class="mt-8 flex"><a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" aria-label="Read case study: FamilyFund" href="/work/family-fund"><span class="relative top-px">Read case study</span></a></div>
                    <div class="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <figure class="text-sm">
                          <blockquote class="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                              <p>Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.</p>
                          </blockquote>
                          <figcaption class="mt-6 font-semibold text-neutral-950">Debra Fiscal, CEO of FamilyFund</figcaption>
                        </figure>
                    </div>
                  </div>
              </div>
            </article>
        </div>
        <div style={{'opacity': '1', 'transform': 'none'}}>
            <article>
              <div class="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div class="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div class="sm:flex sm:items-center sm:gap-x-6 lg:block">
                        <img alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" class="h-16 w-16 flex-none" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" style={{'color': 'transparent'}} />
                        <h3 class="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">Unseal</h3>
                    </div>
                    <div class="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                        <p class="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">Blockchain development</p>
                        <p class="text-sm text-neutral-950 lg:mt-2"><time dateTime="2022-10">October 2022</time></p>
                    </div>
                  </div>
                  <div class="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p class="font-display text-4xl font-medium text-neutral-950"><a href="/work/unseal">Get a hodl of your health</a></p>
                    <div class="mt-6 space-y-6 text-base text-neutral-600">
                        <p>Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.</p>
                        <p>We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.</p>
                    </div>
                    <div class="mt-8 flex"><a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" aria-label="Read case study: Unseal" href="/work/unseal"><span class="relative top-px">Read case study</span></a></div>
                    <div class="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <figure class="text-sm">
                          <blockquote class="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                              <p>Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project.</p>
                          </blockquote>
                          <figcaption class="mt-6 font-semibold text-neutral-950">Emily Selman, Head of Engineering at Unseal</figcaption>
                        </figure>
                    </div>
                  </div>
              </div>
            </article>
        </div>
        <div style={{'opacity': '1', 'transform': 'none'}}>
            <article>
              <div class="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div class="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div class="sm:flex sm:items-center sm:gap-x-6 lg:block">
                        <img alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" class="h-16 w-16 flex-none" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" style={{'color': 'transparent'}} />
                        <h3 class="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">Phobia</h3>
                    </div>
                    <div class="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                        <p class="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">App development</p>
                        <p class="text-sm text-neutral-950 lg:mt-2"><time dateTime="2022-06">June 2022</time></p>
                    </div>
                  </div>
                  <div class="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p class="font-display text-4xl font-medium text-neutral-950"><a href="/work/phobia">Overcome your fears, find your match</a></p>
                    <div class="mt-6 space-y-6 text-base text-neutral-600">
                        <p>Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.</p>
                        <p>We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm.</p>
                    </div>
                    <div class="mt-8 flex"><a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" aria-label="Read case study: Phobia" href="/work/phobia"><span class="relative top-px">Read case study</span></a></div>
                    <div class="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <figure class="text-sm">
                          <blockquote class="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                              <p>The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.</p>
                          </blockquote>
                          <figcaption class="mt-6 font-semibold text-neutral-950">Jenny Wilson, CPO of Phobia</figcaption>
                        </figure>
                    </div>
                  </div>
              </div>
            </article>
        </div>
        <div style={{'opacity': '1', 'transform': 'none'}}>
            <article>
              <div class="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <div class="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div class="sm:flex sm:items-center sm:gap-x-6 lg:block">
                        <img alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" class="h-16 w-16 flex-none" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" style={{'color': 'transparent'}} />
                        <h3 class="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">Phobia</h3>
                    </div>
                    <div class="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                        <p class="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">App development</p>
                        <p class="text-sm text-neutral-950 lg:mt-2"><time dateTime="2022-06">June 2022</time></p>
                    </div>
                  </div>
                  <div class="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p class="font-display text-4xl font-medium text-neutral-950"><a href="/work/phobia">Overcome your fears, find your match</a></p>
                    <div class="mt-6 space-y-6 text-base text-neutral-600">
                        <p>Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.</p>
                        <p>We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm.</p>
                    </div>
                    <div class="mt-8 flex"><a class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" aria-label="Read case study: Phobia" href="/work/phobia"><span class="relative top-px">Read case study</span></a></div>
                    <div class="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <figure class="text-sm">
                          <blockquote class="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                              <p>The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.</p>
                          </blockquote>
                          <figcaption class="mt-6 font-semibold text-neutral-950">Jenny Wilson, CPO of Phobia</figcaption>
                        </figure>
                    </div>
                  </div>
              </div>
            </article>
        </div>
      </div>
    </main>
  )
}
