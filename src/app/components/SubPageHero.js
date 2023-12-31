export default function SubPageHero ({content, borderBtm}) {
    return (
      <div className="bg-white py-24 sm:py-32" style={{ borderBottom : borderBtm ? '1px solid #e5e7eb': 'none'}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-indigo-600">{content.label}</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{content.title}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    )
  }
  