import Link from 'next/link';
import Image from 'next/image';

export default function CivilInfrastructurePage() {
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
            Civil & Infrastructure
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Comprehensive civil engineering and infrastructure solutions for residential, commercial, and industrial projects across Zimbabwe.
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
                  Globpave Construction delivers comprehensive civil and infrastructure services, from initial site preparation and earthworks to road construction, drainage systems, and complete infrastructure development. Our team has the expertise and equipment to handle projects of all scales, from residential developments to large commercial and industrial infrastructure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Our Services</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Civils:</strong> Complete civil engineering works including site preparation, earthworks, and ground preparation for construction projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Road Construction:</strong> New road construction for residential estates, commercial complexes, and industrial facilities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Road Rehabilitation:</strong> Repair and upgrade of existing roads, including pothole repair, resurfacing, and structural improvements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0877D9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#667085]"><strong>Drainage Systems:</strong> Design and installation of stormwater drainage, culverts, and water management systems.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Typical Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Residential Developments</h3>
                    <p className="text-sm text-[#667085]">Site preparation, access roads, and drainage for housing estates.</p>
                  </div>
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Commercial Complexes</h3>
                    <p className="text-sm text-[#667085]">Parking areas, access roads, and stormwater management.</p>
                  </div>
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Industrial Facilities</h3>
                    <p className="text-sm text-[#667085]">Heavy-duty paving, loading areas, and industrial drainage.</p>
                  </div>
                  <div className="bg-[#F4F6F8] p-4 rounded-md">
                    <h3 className="font-semibold text-[#0B0D10] mb-2">Public Infrastructure</h3>
                    <p className="text-sm text-[#667085]">Roads, pathways, and community drainage systems.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0D10] mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/building-construction" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Building & Construction
                  </Link>
                  <Link href="/services/paving-external-works" className="bg-[#F4F6F8] text-[#0B0D10] px-4 py-2 rounded-md hover:bg-[#0877D9] hover:text-white transition-colors text-sm">
                    Paving & External Works
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
                  Get a detailed quotation for your civil and infrastructure project.
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

      {/* Project Gallery */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B0D10] mb-8">Civil & Infrastructure Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src={`/images/projects/project-${project}.jpeg`}
                    alt={`Civil project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#0B0D10] mb-2">Civil Project {project}</h3>
                  <p className="text-sm text-[#667085]">Infrastructure development in Harare</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="text-[#0877D9] font-semibold hover:text-[#0B75CF] transition-colors inline-flex items-center gap-2">
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B0D10] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#0B0D10] mb-2">What types of civil works do you handle?</h3>
              <p className="text-[#667085] text-sm">We handle all types of civil works including site preparation, earthworks, road construction, road rehabilitation, and drainage systems for residential, commercial, and industrial projects.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#0B0D10] mb-2">Do you provide site assessments?</h3>
              <p className="text-[#667085] text-sm">Yes, we provide comprehensive site assessments to evaluate project requirements, soil conditions, and infrastructure needs before construction begins.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#0B0D10] mb-2">What is your service area?</h3>
              <p className="text-[#667085] text-sm">We serve clients across Zimbabwe, with particular focus on Harare and surrounding areas. Contact us to discuss your specific location requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#0877D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Civil Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and quotation for your civil and infrastructure project.
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