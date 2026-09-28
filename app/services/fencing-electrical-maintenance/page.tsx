import Link from 'next/link';

export default function FencingElectricalMaintenancePage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#0B0D10] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-[#0877D9] hover:text-[#0B75CF] transition-colors inline-flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Fencing, Electrical & Maintenance
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Comprehensive fencing, electrical installations, and ongoing property maintenance services.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">What We Provide</h2>
                <p className="text-[#667085] leading-relaxed">
                  Globpave Construction delivers comprehensive fencing, electrical, and maintenance services, from security fencing and electrical installations to ongoing building maintenance. Our team ensures your property remains secure, functional, and well-maintained with professional services for residential and commercial properties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Our Services</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Palisade Fencing:</strong> Professional palisade fence installation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Razor Wire Fencing:</strong> High-security razor wire fencing solutions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Diamond Mesh Fencing:</strong> Diamond mesh fence installation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Electrical Installations:</strong> Professional electrical installation services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>General Building Maintenance:</strong> Comprehensive property maintenance services.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/paving-external-works" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Paving & External Works
                  </Link>
                  <Link href="/services/building-construction" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Building & Construction
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F4F6F8] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0B0D10] mb-4">Request a Quote</h3>
                <Link href="/quote" className="block w-full bg-[#0877D9] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0B75CF] transition-colors text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#0877D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Fencing, Electrical or Maintenance Project?
          </h2>
          <Link href="/quote" className="bg-white text-[#0877D9] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}