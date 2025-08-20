import Image from "next/image";

export function ServicesSection() {
  const services = [
    {
      title: "Care you can always trust",
      description:
        "We use an extensive screening process to choose reliable, professional caregivers who are highly qualified and competent. Every caregiver must complete annual training to build knowledge and skills.",
      image: "/images/health-care1.jpg",
    },
    {
      title: "Multi-Lingual Caregiver",
      description:
        "We make client language and culture a priority. We provide skilled nursing services to meet diverse needs with staff members and caregivers fluent in multiple languages and sensitive to religious and cultural differences.",
      image: "/images/health-care2.jpg",
    },
    {
      title: "Home Health care",
      description:
        "Our caregivers give your loved one their undivided attention. We implement a strict no-phone policy so they aren't distracted by technology while caring for your loved one.",
      image: "/images/health-care3.jpg",
    },
  ];

  return (
    <section className="py-16 -mt-16 bg-[#E9EEF5] rounded-t-3xl md:rounded-t-[52px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-[#0D290A] text-center md:text-left mb-12 flex flex-col md:flex-row gap-5 md:gap-10">
          <h2 className="leading-wider w-full md:w-[40%] text-3xl lg:text-4xl font-semibold text-foreground">
            We provide at home health care services
          </h2>
          <p className="w-full md:w-[60%] text-lg md:text-2xl mx-auto">
            Our agency provide health care services to health care patients in
            the comfort of their homes for healthy living. We also provide
            medical professionals to hospitals, group homes and government
            health care institutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-[500px] md:h-[520px]"
            >
              {/* Default view (split layout) */}
              <div className="group-hover:opacity-0 transition-opacity duration-500 h-full flex flex-col">
                {/* Text top half */}
                <div className="bg-white p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                {/* Image bottom half */}
                <div className="relative w-full flex-1">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Hover / Expanded view */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-6">
                  {/* Text now at top, no border, no background */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
