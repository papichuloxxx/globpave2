import Link from 'next/link';

export default function BuildingConstructionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0B0D10] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-[#0877D9] hover:text-[#0B75CF] transition-colors inline-flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Building & Construction
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Complete building construction services from new builds to renovations and extensions for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">What We Provide</h2>
                <p className="text-[#667085] leading-relaxed">
                  Globpave Construction delivers comprehensive building and construction services, from new home construction and house extensions to complete renovations and remodelling. Our experienced team handles all aspects of building construction including brickwork, concrete works, and plastering, ensuring quality results for residential and commercial projects.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Our Services</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>New House Construction:</strong> Complete new home construction from foundation to finishing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>House Extensions:</strong> Expand your existing home with professional extension construction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Renovations & Remodelling:</strong> Transform your property with comprehensive renovation services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Brickwork:</strong> Professional bricklaying and masonry services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Concrete Works:</strong> Foundations, slabs, and structural concrete construction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Plastering:</strong> Interior and exterior plastering services.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Typical Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">New Home Construction</h3>
                    <p className="text-sm text-[#667085]">Complete new builds from foundation to handover.</p>
                  </div>
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Home Additions</h3>
                    <p className="text-sm text-[#667085]">Extensions and additions to existing properties.</p>
                  </div>
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Commercial Buildings</h3>
                    <p className="text-sm text-[#667085]">Office buildings, retail spaces, and commercial construction.</p>
                  </div>
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Property Renovations</h3>
                    <p className="text-sm text-[#667085]">Complete renovation and remodelling services.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/civil-infrastructure" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Civil & Infrastructure
                  </Link>
                  <Link href="/services/roofing-interiors" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Roofing & Interiors
                  </Link>
                  <Link href="/services/plumbing-water-solutions" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Plumbing & Water Solutions
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#F4F6F8] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0B0D10] mb-4">Request a Quote</h3>
                <p className="text-[#667085] mb-4 text-sm">
                  Get a detailed quotation for your building construction project.
                </p>
                <Link
                  href="/quote"
                  className="block w-full bg-[#0877D9] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0B75CF] transition-colors text-center"
                >
                  Get Quote
                </Link>
              </div>

              <div className="bg-[#F4F6F8] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0B0D10] mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm">
                  <a href="tel:+263772900562" className="text-[#0877D9] hover:text-[#0B75CF] transition-colors block">
                    +263 772 900 562
                  </a>
                  <a href="mailto:info@globpaveconstruction.co.zw" className="text-[#0877D9] hover:text-[#0B75CF] transition-colors block">
                    info@globpaveconstruction.co.zw
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#0877D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Building Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and quotation for your building construction project.
          </p>
          <Link
            href="/quote"
            className="bg-white text-[#0877D9] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}