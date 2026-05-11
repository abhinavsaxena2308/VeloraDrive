import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Star, Shield, Zap, Clock, Smartphone, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ThreeScene from '../components/three/ThreeScene';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content reveal
      gsap.from('.hero-content > *', {
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Horizontal scroll for fleet
      if (horizontalRef.current) {
        const sections = gsap.utils.toArray('.horizontal-section');
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + horizontalRef.current?.offsetWidth,
          }
        });
      }

      // Bento grid items reveal
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cars = [
    { id: 1, name: 'Porsche 911 GT3', type: 'Sports', price: 450, image: 'P911' },
    { id: 2, name: 'Mercedes S-Class', type: 'Luxury', price: 500, image: 'MS' },
    { id: 3, name: 'Range Rover SV', type: 'SUV', price: 550, image: 'RRSV' },
    { id: 4, name: 'Lamborghini Huracán', type: 'Exotic', price: 950, image: 'LH' },
  ];

  return (
    <div ref={containerRef} className="flex flex-col bg-deep-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <ThreeScene />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl hero-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cta/10 border border-cta/20 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse shadow-[0_0_10px_#DC2626]"></span>
              <span className="text-cta text-[10px] font-bold uppercase tracking-[0.3em]">Redefining Automotive Luxury</span>
            </motion.div>
            <h1 className="text-7xl md:text-[120px] mb-8 leading-[0.9] font-heading font-extrabold tracking-tighter text-white">
              ELITE <br />
              <span className="text-gradient">EXPERIENCE.</span>
            </h1>
            <p className="text-secondary text-lg md:text-2xl max-w-2xl mb-14 leading-relaxed font-light">
              Beyond transportation. We provide the keys to the world's most 
              exclusive driving machines, delivered with white-glove service.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link to="/cars" className="btn-primary min-w-[200px]">
                Explore Fleet <ArrowRight size={18} />
              </Link>
              <button className="flex items-center gap-4 text-white font-bold group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="uppercase tracking-widest text-[10px]">Watch Film</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <div className="w-px h-20 bg-gradient-to-b from-cta to-transparent"></div>
        </div>
      </section>

      {/* Bento Grid Features Showcase */}
      <section className="section-padding bg-matte-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 italic text-white">THE VELORA <span className="text-cta">STANDARD</span></h2>
            <p className="text-secondary max-w-xl text-lg font-light">Excellence is not an option, it's our baseline. Discover the details that make every journey extraordinary.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 bento-grid h-[800px] md:h-[600px]">
            {/* Main Feature */}
            <div className="md:col-span-2 md:row-span-2 glass-card p-12 flex flex-col justify-end bento-item group overflow-hidden relative">
              <div className="absolute top-12 left-12 w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center text-cta">
                <Shield size={32} />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Total Peace of Mind</h3>
                <p className="text-secondary text-sm leading-relaxed max-w-sm">Comprehensive insurance and 24/7 roadside assistance included in every rental package.</p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cta/5 rounded-full blur-3xl group-hover:bg-cta/10 transition-all duration-700"></div>
            </div>

            {/* Sub Feature 1 */}
            <div className="md:col-span-2 glass-card p-8 flex items-center justify-between bento-item group hover:border-cta/20">
              <div>
                <h3 className="text-2xl font-bold mb-2">Concierge Delivery</h3>
                <p className="text-secondary text-xs">We bring the luxury to your doorstep, wherever you are.</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-cta transition-colors">
                <ChevronRight />
              </div>
            </div>

            {/* Sub Feature 2 */}
            <div className="glass-card p-8 bento-item text-center flex flex-col items-center justify-center group">
              <Zap className="text-cta mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Instant Pro</h4>
              <span className="text-[10px] text-secondary">Ready in 15min</span>
            </div>

            {/* Sub Feature 3 */}
            <div className="glass-card p-8 bento-item text-center flex flex-col items-center justify-center group">
              <Smartphone className="text-cta mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Smart Access</h4>
              <span className="text-[10px] text-secondary">Digital Keys</span>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Selection Carousel */}
      <section className="py-24 bg-deep-black overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold italic uppercase tracking-tighter">ELITE <span className="text-cta">SELECTION</span></h2>
            <p className="text-secondary mt-4 font-light">Swipe through our most requested masterpieces.</p>
          </div>
          <div className="flex gap-4">
            <button className="swiper-prev w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-cta hover:text-cta transition-all cursor-pointer">
              <ChevronRight className="rotate-180" size={20} />
            </button>
            <button className="swiper-next w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-cta hover:text-cta transition-all cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="px-6 lg:px-24">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {cars.map((car) => (
              <SwiperSlide key={car.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass-card overflow-hidden group h-full"
                >
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute inset-0 bg-matte-black group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 text-white/10 italic text-4xl font-heading">
                      {car.image}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-heading font-bold italic">{car.name}</h3>
                      <span className="text-cta font-bold">${car.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-secondary uppercase tracking-widest font-bold mb-6">
                      <span className="flex items-center gap-1"><Zap size={12} className="text-cta" /> {car.type}</span>
                      <span className="flex items-center gap-1"><Star size={12} className="text-cta" /> 4.9</span>
                    </div>
                    <Link to={`/cars/${car.id}`} className="btn-primary w-full py-3 text-[10px]">
                      View Details
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Horizontal Scroll Fleet Showcase */}
      <section ref={horizontalRef} className="h-screen bg-deep-black flex overflow-hidden">
        {cars.map((car, i) => (
          <div key={car.id} className="horizontal-section min-w-full h-full flex items-center justify-center px-6 md:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full max-w-7xl">
              <div className="relative group">
                <div className="aspect-[16/9] glass-card overflow-hidden flex items-center justify-center italic text-white/5 text-8xl">
                  {car.image}
                </div>
                <div className="absolute -top-10 -left-10 text-[200px] font-heading font-black text-white/[0.02] pointer-events-none select-none">
                  0{i + 1}
                </div>
              </div>
              <div>
                <span className="text-cta font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Featured Vehicle</span>
                <h3 className="text-5xl md:text-7xl font-heading font-bold mb-8 italic">{car.name}</h3>
                <div className="flex gap-12 mb-10 pb-10 border-b border-white/5">
                  <div>
                    <span className="block text-secondary text-[10px] uppercase tracking-widest mb-2">Daily Rate</span>
                    <span className="text-3xl font-bold text-white">${car.price}</span>
                  </div>
                  <div>
                    <span className="block text-secondary text-[10px] uppercase tracking-widest mb-2">Category</span>
                    <span className="text-3xl font-bold text-white">{car.type}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Link to={`/cars/${car.id}`} className="btn-primary flex-1">
                    Book Now
                  </Link>
                  <button className="w-16 h-16 glass-card flex items-center justify-center hover:text-cta transition-colors">
                    <Star size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats / Proof Section */}
      <section className="section-padding bg-matte-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Successful Rentals", val: "2.4k+" },
              { label: "Average Rating", val: "4.9/5" },
              { label: "Locations Across India", val: "12+" },
              { label: "Luxury Models", val: "50+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <span className="block text-4xl md:text-6xl font-heading font-bold text-white italic">{stat.val}</span>
                <span className="block text-secondary text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-deep-black">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-24 text-center overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#DC2626_0%,_transparent_70%)] opacity-5"></div>
             <h2 className="text-4xl md:text-8xl font-heading font-bold mb-10 italic leading-[0.9] relative z-10">THE ROAD IS YOURS. <br /> <span className="text-gradient">TAKE COMMAND.</span></h2>
             <div className="flex justify-center gap-8 relative z-10">
               <Link to="/signup" className="btn-primary min-w-[200px]">Get Started</Link>
               <Link to="/contact" className="btn-outline min-w-[200px]">Contact Concierge</Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
