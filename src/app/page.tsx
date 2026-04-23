import Hero from "@/components/shared/Hero";
import RecentCakes from "@/components/shared/RecentCakes";
import FeaturedCourses from "@/components/shared/FeaturedCourses";
import AlumniPreview from "@/components/shared/AlumniPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AlumniPreview />
      <RecentCakes />
      <FeaturedCourses />
      
      {/* Testimonials or About Brief Section */}
      <section className="py-24 px-6 bg-[#FFF5F8] text-black relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-1 bg-honey mx-auto mb-8" />
          <p className="text-3xl md:text-4xl font-serif italic leading-relaxed text-black">
            "Artistry is not just what we do; it's who we are. Every cake tells a story of celebration, and every course builds a bridge to a professional career."
          </p>
          <div>
            <p className="font-bold uppercase tracking-widest text-[#DB2777]">Executive Chef</p>
            <p className="text-lg text-black font-medium">Honey Bakes Signature</p>
          </div>
        </div>
      </section>
    </>
  );
}
