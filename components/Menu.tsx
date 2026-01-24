
import React, { useState } from 'react';
import { Utensils, Wine, Clock, Beef, Beer, Coffee, IceCream } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  gf?: boolean;
  v?: boolean;
  notes?: string;
}

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dinner' | 'daytime' | 'drinks'>('dinner');
  const [activeCategory, setActiveCategory] = useState<string>('starters');

  const dinnerMenu = {
    starters: [
      { name: "Mixed Platter for Two", price: "19", desc: "Assorted platter of tiger prawns, beef skewers, chicken skewers, BBQ spare ribs, grilled halloumi cheese and vegetable croquettes." },
      { name: "Smoked Salmon", price: "9", desc: "Oak wood chips - fired, fresh smoked salmon, served with onion, capers, lettuce, creamy horseradish and garlic toast.", gf: true },
      { name: "Pan Fried Sea Scallops", price: "12", desc: "Sea scallops, grilled asparagus, lime butter." },
      { name: "Grilled Calamari", price: "8.50", desc: "Rosemary marinated grilled calamari, cherry tomato salsa, garlic toast.", gf: true },
      { name: "Teriyaki Beef Skewers", price: "8", desc: "Japanese style marinated strips of beef." },
      { name: "Pan Fried Jumbo Tiger Prawns", price: "13", desc: "Garlic and chilli jumbo tiger prawns served with peppery lettuce.", gf: true },
      { name: "Steak Tartar", price: "8.50", desc: "Seared fillet steak, capers, shallots, parsley, Worcestershire sauce, crushed mustard seeds, young rocket, truffle oil.", gf: true },
      { name: "Veggie Cakes", price: "6.50", desc: "Mix vegetable cakes with jalapeño, mozzarella, coriander-chipotle sauce.", v: true },
      { name: "BBQ Spare Ribs", price: "8.00", desc: "Served with mixed greens." },
      { name: "Spicy Fusion Chicken", price: "8.50", desc: "Fresh spring onion, coriander and chilli infused chicken mince balls." },
      { name: "Tomato Mozzarella Salad", price: "6.50", desc: "With aged balsamic dressing.", gf: true },
      { name: "Soup of the Day", price: "4.50", desc: "Served with bread and butter." },
      { name: "Ciabatta Garlic Breads", price: "3.25", v: true },
      { name: "Mediterranean Olives", price: "4.50", v: true },
      { name: "Assorted Bread Basket", price: "3.25", v: true },
    ],
    steaks: [
      { name: "Charred Tenderloin (Fillet) 10oz", price: "42", desc: "Lean, tender and elegant cut." },
      { name: "Char-Grilled Sirloin 12oz", price: "38", desc: "Well-marbled and full of flavour." },
      { name: "Char-Grilled Sirloin 16oz", price: "42" },
      { name: "Char-Grilled Rib Eye 12oz", price: "38", desc: "Rich, juicy and exceptionally tender." },
      { name: "Char-Grilled Rib Eye 16oz", price: "42" },
      { name: "Char-Grilled Rump 16oz", price: "28", desc: "Firm texture and deep beef flavour." },
      { name: "Char-Grilled T-Bone 18oz", price: "39", desc: "Fillet and Sirloin separated by the bone." },
      { name: "Char-Grilled Prime Rib 20oz", price: "45", desc: "On the bone, juicy and extremely flavourful." },
      { name: "32oz Porterhouse (For Two)", price: "72", desc: "Traditional cut of two muscles: top loin and buttery soft tenderloin.", notes: "Allow 30 minutes cooking time." },
      { name: "Wagyu 14oz Rib Eye", price: "75", desc: "Freedown Hills UK Olive Fed Wagyu. Amazing umami experience.", notes: "Limited availability." },
    ],
    sides: [
      { name: "Baked Broccoli & Cheddar", price: "5.90", v: true },
      { name: "Baked Potato & Sour Cream", price: "2.50", v: true, gf: true },
      { name: "Garlic Sautéed Mushroom", price: "4.50", v: true, gf: true },
      { name: "Grilled Asparagus, Truffle Oil", price: "4.75", v: true, gf: true },
      { name: "Roasted Vegetables", price: "4.50", v: true, gf: true },
      { name: "Fresh Green Beans", price: "3.75", v: true, gf: true },
      { name: "Mixed Green Salad", price: "3.25", v: true, gf: true },
      { name: "Red Onion & Tomato Salad", price: "3.25", v: true, gf: true },
      { name: "Mash Potato", price: "2.50", v: true, gf: true },
    ],
    desserts: [
      { name: "Baileys Cheesecake", price: "6.9" },
      { name: "Chocolate Brownie", price: "6.9", desc: "Served with Vanilla Ice Cream." },
      { name: "Apple & Raspberry Crumble", price: "6.9", desc: "Served with Vanilla Ice Cream." },
      { name: "Sticky Toffee Pudding", price: "6.9", desc: "Served with Vanilla Ice Cream." },
      { name: "Ice Cream or Sorbet", price: "5.3", desc: "Mint Chocolate, Pistachio, Caramelita, Blackcurrant, Lemon." },
      { name: "Cheese Selection", price: "8.3" },
    ]
  };

  const daytimeMenu = {
    mains: [
      { name: "8oz Rib Eye Steak", price: "20", desc: "Served with a selection of vegetables and chips." },
      { name: "8oz Rump Steak", price: "15", desc: "Served with a selection of vegetables and chips." },
      { name: "8oz Sirloin Steak", price: "20", desc: "Served with a selection of vegetables and chips." },
      { name: "8oz Grilled Gammon Steak", price: "9.50", desc: "Served with vegetables, chips and grilled pineapple or fried egg." },
      { name: "8oz Porterhouse Burger", price: "11", desc: "Topped with crispy bacon, served with a salad and chips." },
      { name: "Grilled Breast of Chicken", price: "14.50", desc: "White wine and mushroom sauce, vegetables and chips." },
      { name: "Porterhouse Sandwich", price: "11", desc: "Sliced tender beef, baguette with horseradish, salad and chips." },
      { name: "Penne Arrabiata", price: "11", desc: "Penne pasta made in a rich spicy tomato sauce.", v: true },
      { name: "Pan Fried Sea Bass", price: "16", desc: "Sea Bass Fillet, Baby Spinach, Lime Butter Sauce.", gf: true },
    ]
  };

  const drinksMenu = {
    malbec: [
      { name: "La Vuelta Malbec", price: "30", notes: "Mendoza Argentina" },
      { name: "San Felipe Malbec Roble", price: "34", notes: "Mendoza Argentina | 175ml: £8.1" },
      { name: "Los Haroldos Chacabuco", price: "36", notes: "Mendoza Argentina" },
      { name: "Cruz Alta Grand Reserve", price: "44", notes: "Mendoza Argentina" },
      { name: "Rutini Altamira Single", price: "85", notes: "Mendoza Argentina" },
    ],
    european: [
      { name: "Lacrimus 5 Tempranillo", price: "34", notes: "Rioja Spain | 175ml: £8.1" },
      { name: "Domaine Sarrelon Rhone", price: "39", notes: "Rhone France | 175ml: £9.5" },
      { name: "Altitude de Duorum", price: "36", notes: "Douro Portugal" },
      { name: "Valpolicella Ripasso", price: "37", notes: "Veneto Italy" },
      { name: "Tenuta Cappallotto", price: "48", notes: "Piedmont Italy" },
      { name: "Saint Julien 2016", price: "95", notes: "Bordeaux France" },
    ],
    digestifs: [
      { name: "Hennessy XO Cognac", price: "16.5", notes: "France" },
      { name: "VSOP Armagnac 10yr", price: "7.5", notes: "France" },
      { name: "Knob Creek Bourbon", price: "5.5", notes: "USA" },
      { name: "Limoncetta di Sorrento", price: "4", notes: "Italy" },
      { name: "Cotswold Single Malt", price: "5.5", notes: "England" },
    ],
    coffee: [
      { name: "Liqueur Coffee", price: "7.5", desc: "Irish, Royal, Calypso or Baileys" },
      { name: "Cappuccino / Latte", price: "3.5" },
      { name: "Espresso / Coffee", price: "2.8" },
      { name: "Tea & Infusions", price: "2.8" },
    ]
  };

  const SectionHeader = ({ title, icon }: { title: string, icon?: React.ReactNode }) => (
    <div className="flex items-center space-x-3 mb-10 border-b border-zinc-800 pb-4">
      {icon && <div className="text-red-700">{icon}</div>}
      <h3 className="text-3xl serif text-white tracking-wide">{title}</h3>
    </div>
  );

  const MenuGrid = ({ items }: { items: MenuItem[] }) => (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map((item, idx) => (
        <div key={idx} className="group relative flex flex-col">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-zinc-100 font-bold tracking-wide group-hover:text-red-700 transition-colors uppercase text-sm">
              {item.name}
              <span className="ml-2 inline-flex gap-1">
                {item.gf && <span className="text-[9px] border border-zinc-700 px-1 text-zinc-500 font-normal">GF</span>}
                {item.v && <span className="text-[9px] border border-green-900/50 px-1 text-green-700 font-normal">V</span>}
              </span>
            </h4>
            <div className="flex-1 mx-4 border-b border-dotted border-zinc-800 self-center"></div>
            <span className="serif text-white font-bold text-lg">£{item.price}</span>
          </div>
          {item.desc && <p className="text-xs text-zinc-500 leading-relaxed italic">{item.desc}</p>}
          {item.notes && <p className="text-[10px] text-red-900/80 uppercase tracking-widest mt-1 font-bold">{item.notes}</p>}
        </div>
      ))}
    </div>
  );

  const categoryIcons: Record<string, React.ReactNode> = {
    starters: <Utensils size={24} />,
    steaks: <Beef size={24} />,
    sides: <Beer size={24} />,
    desserts: <IceCream size={24} />,
    mains: <Beef size={24} />,
    drinks: <Wine size={24} />,
    coffee: <Coffee size={24} />
  };

  return (
    <section id="menu" className="relative py-32 bg-[#080808] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none">
        <h2 className="text-[200px] serif text-white rotate-90 select-none">PORTERHOUSE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-red-700 uppercase tracking-[0.5em] text-[10px] font-black mb-4">Established Excellence</p>
          <h2 className="text-6xl md:text-8xl serif text-white mb-6">Our Menu</h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm font-light uppercase tracking-widest">
            100% Grass-Fed, Naturally Reared Beef. We do one thing better than anyone else: Beef.
          </p>
        </div>

        {/* Primary Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'dinner', label: 'Dinner Menu', icon: <Utensils size={14} /> },
            { id: 'daytime', label: 'Day Time', icon: <Clock size={14} /> },
            { id: 'drinks', label: 'Beverages', icon: <Wine size={14} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                if (tab.id === 'dinner') setActiveCategory('starters');
                if (tab.id === 'daytime') setActiveCategory('mains');
                if (tab.id === 'drinks') setActiveCategory('malbec');
              }}
              className={`group flex items-center space-x-3 px-10 py-4 transition-all duration-500 ${
                activeTab === tab.id 
                ? 'bg-red-900 text-white shadow-[0_0_30px_rgba(127,29,29,0.3)]' 
                : 'bg-zinc-900/50 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              <span className={`transition-transform duration-500 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Secondary Navigation (Categories) */}
        <div className="flex justify-center flex-wrap gap-8 mb-16 border-b border-zinc-900 pb-8">
          {activeTab === 'dinner' && ['starters', 'steaks', 'sides', 'desserts'].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${
                activeCategory === cat ? 'text-red-700 scale-110' : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
          {activeTab === 'drinks' && ['malbec', 'european', 'digestifs', 'coffee'].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${
                activeCategory === cat ? 'text-red-700 scale-110' : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'dinner' && (
            <div className="animate-fadeIn space-y-20">
              {activeCategory === 'starters' && (
                <div>
                  <SectionHeader title="To Begin" icon={categoryIcons.starters} />
                  <MenuGrid items={dinnerMenu.starters} />
                </div>
              )}
              {activeCategory === 'steaks' && (
                <div>
                  <SectionHeader title="The Cuts" icon={categoryIcons.steaks} />
                  <div className="bg-red-950/5 border border-red-900/20 p-6 mb-12 text-center">
                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.4em]">All steaks are served with chips and house sauces of the day</p>
                  </div>
                  <MenuGrid items={dinnerMenu.steaks} />
                </div>
              )}
              {activeCategory === 'sides' && (
                <div>
                  <SectionHeader title="Accompaniments" icon={categoryIcons.sides} />
                  <MenuGrid items={dinnerMenu.sides} />
                </div>
              )}
              {activeCategory === 'desserts' && (
                <div>
                  <SectionHeader title="Sweet Endings" icon={categoryIcons.desserts} />
                  <MenuGrid items={dinnerMenu.desserts} />
                </div>
              )}
            </div>
          )}

          {activeTab === 'daytime' && (
            <div className="animate-fadeIn">
              <div className="flex flex-col items-center mb-16 space-y-4">
                <div className="px-6 py-2 bg-red-950/20 border border-red-900/30 text-red-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Available 12:00 noon till 4:00 pm
                </div>
              </div>
              <SectionHeader title="Lunch Selection" icon={categoryIcons.mains} />
              <MenuGrid items={daytimeMenu.mains} />
            </div>
          )}

          {activeTab === 'drinks' && (
            <div className="animate-fadeIn">
              {activeCategory === 'malbec' && (
                <div>
                  <SectionHeader title="Argentinian Malbec" icon={categoryIcons.drinks} />
                  <MenuGrid items={drinksMenu.malbec} />
                </div>
              )}
              {activeCategory === 'european' && (
                <div>
                  <SectionHeader title="European Selection" icon={categoryIcons.drinks} />
                  <MenuGrid items={drinksMenu.european} />
                </div>
              )}
              {activeCategory === 'digestifs' && (
                <div>
                  <SectionHeader title="Digestifs & Liqueurs" icon={categoryIcons.drinks} />
                  <MenuGrid items={drinksMenu.digestifs} />
                </div>
              )}
              {activeCategory === 'coffee' && (
                <div>
                  <SectionHeader title="Coffee & Tea" icon={categoryIcons.coffee} />
                  <MenuGrid items={drinksMenu.coffee} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t border-zinc-900 flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-8 text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
            <span className="flex items-center"><span className="w-2 h-2 border border-zinc-700 mr-2"></span> GLUTEN FREE AVAILABLE</span>
            <span className="flex items-center"><span className="w-2 h-2 border border-green-900/50 mr-2"></span> VEGETARIAN FRIENDLY</span>
          </div>
          <p className="max-w-2xl text-center text-[10px] text-zinc-500 italic leading-relaxed">
            Please inform your server of any dietary requirements or allergies. 
            We take every precaution but cannot guarantee a transition-free environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

