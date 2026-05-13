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
    <div className="page-container bg-slate-50/30">
      <Helmet>
        <title>The Fleet | Velora Drive Discovery</title>
        <meta name="description" content="Discover our curated collection of supercars, luxury SUVs, and executive sedans. Real-time availability and transparent pricing." />
      </Helmet>
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader 
          eyebrow="Our Fleet" 
          title="BROWSE" 
          highlight="COLLECTION" 
          description="Meticulously curated selection of the world's most exclusive vehicles — from track-ready monsters to executive suites on wheels." 
        />

        {/* Filter Bar */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between bg-white p-4 md:p-6 rounded-2xl border border-border shadow-sm">
            {/* Category chips */}
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              {carCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 border whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-cta border-cta text-white shadow-glow'
                      : 'bg-slate-50 border-border text-text-muted hover:border-primary/20 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search + Sort + Advanced Toggle */}
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/50" size={15} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search brand or model..."
                  className="input-field pl-10 py-3 text-xs w-full"
                />
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="input-field py-3 pl-4 pr-10 text-xs appearance-none cursor-pointer min-w-[160px] bg-white border border-border rounded-xl"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/50 pointer-events-none" />
              </div>

              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                  showFilters ? 'bg-primary text-white border-primary' : 'bg-white border-border text-primary hover:bg-slate-50'
                }`}
              >
                <SlidersHorizontal size={15} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Filters</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters (Price Slider etc.) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden bg-white rounded-2xl border border-border shadow-sm"
              >
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Price Range */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Price Range (Daily)</span>
                      <span className="text-[11px] font-bold text-cta">₹{priceRange[0]} - ₹{priceRange[1]}</span>
                    </div>
                    <div className="px-2">
                      <input
                        type="range"
                        min="0"
                        max={maxPrice}
                        step="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cta"
                      />
                      <div className="flex justify-between mt-2 text-[9px] text-text-muted font-medium">
                        <span>₹0</span>
                        <span>₹{maxPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Filters Summary */}
                  <div className="flex flex-wrap items-end gap-2 lg:col-span-2">
                    {(activeCategory !== 'All' || searchQuery || priceRange[1] < maxPrice) && (
                      <button 
                        onClick={() => {
                          setActiveCategory('All');
                          setSearchQuery('');
                          setPriceRange([0, maxPrice]);
                        }}
                        className="text-[10px] font-bold text-cta flex items-center gap-1.5 hover:underline cursor-pointer mb-2"
                      >
                        <X size={12} />
                        Clear All Filters
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results count */}
        <div className="mb-8 flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold">
            Showing {filteredCars.length} exclusive vehicle{filteredCars.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {filteredCars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-border mb-20">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={24} className="text-text-muted/30" />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-2 italic">No matches found</h3>
            <p className="text-text-muted text-sm font-light max-w-xs mx-auto">Try adjusting your filters or search terms to find your perfect drive.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPriceRange([0, maxPrice]); }} 
              className="btn-outline mt-8 px-8 py-3 cursor-pointer"
            >
              Reset All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
