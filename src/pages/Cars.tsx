import React, { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { cars, carCategories } from '../data/cars';
import CarCard from '../components/ui/CarCard';
import SectionHeader from '../components/shared/SectionHeader';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'rating';

const Cars: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  const filteredCars = useMemo(() => {
    let result = activeCategory === 'All' ? [...cars] : cars.filter(c => c.type === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="page-container">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader eyebrow="Our Fleet" title="BROWSE" highlight="COLLECTION" description="Meticulously curated selection of the world's most exclusive vehicles — from track-ready monsters to executive suites on wheels." />

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-5 mb-14 items-stretch lg:items-center justify-between bg-white p-5 rounded-2xl border border-border shadow-sm">
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

          {/* Search + Sort */}
          <div className="flex gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/50" size={15} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cars..."
                className="input-field pl-10 py-3 text-xs"
              />
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="input-field py-3 pr-8 text-xs appearance-none cursor-pointer min-w-[140px]"
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted/50 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold">
            {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''} found
          </span>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <p className="text-text-muted text-lg font-light">No cars found matching your criteria.</p>
            <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="btn-outline mt-6 cursor-pointer">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
