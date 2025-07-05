import HeroBanner from "@/components/HeroBanner";

export default function UpdatesPage() {
  return (
    <>
      <HeroBanner
        title="Latest Updates"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Latest Updates" }]}
        image="/services/adult-coaching.png"
      />
      <section className="w-full py-24 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tennis-green-800 mb-4">Exciting News!</h2>
          <p className="text-xl text-gray-700 mb-6">
            We are thrilled to announce our brand new <span className="font-semibold text-tennis-green-600">Adult Training Program</span> is now available! Whether you are a beginner or looking to take your game to the next level, our expert coaches are here to help you succeed.
          </p>
          <p className="text-lg text-gray-600">Contact us today to learn more and reserve your spot!</p>
        </div>
      </section>
    </>
  );
} 