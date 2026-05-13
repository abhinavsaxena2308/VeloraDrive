import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cars, carCategories } from '../data/cars';
import CarCard from '../components/ui/CarCard';
import SectionHeader from '../components/shared/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'rating';

const Cars: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    let result = activeCategory === 'All' ? [...cars] : cars.filter(c => c.type === activeCategory);
    
    // Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q));
    }

    // Price Filter
    result = result.filter(c => c.price >= priceRange[0] && c.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [activeCategory, searchQuery, sortBy, priceRange]);

  const maxPrice = Math.max(...cars.map(c => c.price));

  return (
    <div className="page-container">
      <Helmet>
        <title>The Fleet | Velora Drive Discovery</title>
        <meta name="description" content="Discover our curated collection of supercars, luxury SUVs, and executive sedans. Real-time availability and transparent pricing." />
      </Helmet>
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16 relative pt-12">
          {/* Decorative Dots inspired by reference */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-3 h-3 rounded-full bg-primary/40 -mt-1" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary italic mb-4 relative inline-block">
            Our Fleets
            <div className="absolute -top-2 -right-4 flex gap-1">
              <div className="w-2 h-2 rounded-full bg-cta" />
              <div className="w-4 h-4 rounded-full bg-primary/10" />
            </div>
          </h1>
          <p className="text-text-muted/60 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Choose from <span className="text-primary font-bold">Wide Range</span> of our Self-Drive Cars
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-8 p-4 bg-white rounded-2xl border border-border shadow-sm">
          <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted">
            {filteredCars.length} Cars Available
          </span>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          {/* Left Sidebar - Filters */}
          <aside className={`w-full lg:w-72 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-32 space-y-8">
              {/* Search Block */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-text-muted/60 font-bold mb-4">Search</h4>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/40" size={16} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Brand or model..."
                    className="w-full bg-white border border-border rounded-xl pl-11 pr-4 py-3.5 text-xs focus:outline-none focus:border-cta/50 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Categories Block */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-text-muted/60 font-bold mb-4">Categories</h4>
                <div className="flex flex-col gap-2">
                  {carCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-cta border-cta text-white shadow-glow'
                          : 'bg-white border-border text-text-muted hover:border-cta/30 hover:text-primary'
                      }`}
                    >
                      <span>{cat}</span>
                      {activeCategory === cat && <motion.div layoutId="activeCat" className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Block */}
              <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-text-muted/60 font-bold mb-6">Price Range</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-bold text-primary italic">Daily Rate</span>
                    <span className="text-[12px] font-bold text-cta">₹{priceRange[1].toLocaleString()}</span>
                  </div>
                  <div className="relative h-1.5 bg-slate-100 rounded-full">
                    <div 
                      className="absolute top-0 left-0 h-full bg-cta rounded-full" 
                      style={{ width: `${(priceRange[1] / maxPrice) * 100}%` }}
                    />
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer accent-cta"
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-text-muted/60 font-medium">
                    <span>₹0</span>
                    <span>₹{maxPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              {(activeCategory !== 'All' || searchQuery || priceRange[1] < maxPrice) && (
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                    setPriceRange([0, maxPrice]);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-dashed border-cta/30 text-cta text-[10px] font-bold uppercase tracking-widest hover:bg-cta/5 transition-colors cursor-pointer"
                >
                  <X size={14} />
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Toolbar: Results + Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm">
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-text-muted font-bold">
                Showing <span className="text-cta">{filteredCars.length}</span> Masterpieces
              </span>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-[10px] uppercase tracking-wider text-text-muted/40 font-bold whitespace-nowrap">Sort By</span>
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full bg-white border border-border rounded-xl py-2.5 pl-4 pr-10 text-[11px] font-bold text-primary appearance-none cursor-pointer focus:outline-none focus:border-cta/30 transition-all min-w-[160px]"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/40 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Cars Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                <AnimatePresence mode="popLayout">
                  {filteredCars.map((car, i) => (
                    <CarCard key={car.id} car={car} index={i} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 bg-white rounded-3xl border border-dashed border-border mb-20"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-text-muted/20" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3 italic">No matches in our fleet</h3>
                <p className="text-text-muted text-sm font-light max-w-xs mx-auto">Try adjusting your filters or search terms to find your perfect drive.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPriceRange([0, maxPrice]); }} 
                  className="btn-outline mt-10 px-10 py-4 cursor-pointer"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Cars;


