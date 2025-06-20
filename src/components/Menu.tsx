import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = {
    breakfast: {
      title: 'Breakfast',
      subtitle: '“Best breakfast by Yosemite, Mouthwateringly great" — San Francisco Chronicle',
      items: [
        { name: 'Steak & Eggs', description: '10 oz rib-eye steak & 2 eggs. Served with choice of fruit, hash browns or country potatoes and toast', price: '24.99' },
        { name: 'Priest Skillet', description: 'Sausage, bacon, egg, bell pepper, onion and country potato scramble. Served with sour cream, salsa & biscuit', price: '10.49' },
        { name: 'Veggie Skillet', description: 'Crimini mushrooms, spinach, egg, bell pepper, tomato, cheese, onion and country potato scramble. Served with sour cream, salsa & biscuit', price: '10.49' },
        { name: 'Country Skillet', description: 'Sausage, bacon, egg, bell pepper, onion and country potato scramble. Topped with country gravy. Served with a biscuit', price: '10.99' },
        { name: 'Priest Poachie', description: '2 poached eggs on a dry English muffin with sautéed spinach, grilled tomato and bacon. Topped with a dollop of Sriracha sauce. Served with fruit', price: '10.49' },
        { name: 'Biscuits & Gravy', description: 'Homemade biscuits and gravy and the best sausage links ever', price: '8.99' },
        { name: 'Mom\'s Pancakes', description: '3 pancakes served with butter, syrup & fruit or sausage or bacon', price: '8.49' },
        { name: 'Breakfast Quiche', description: 'Bacon, garlic, spinach, onion, mushrooms & cheese. Served with a fruit', price: '12.49' },
        { name: '2 Egg Breakfast', description: 'Served with toast and a choice of fruit, hash browns or country potatoes. With meat: 10.49, without meat: 8.99', price: '' },
        { name: 'French Toast', description: 'Served with butter, syrup & fruit or sausage or bacon', price: '8.99' },
        { name: 'Breakfast Burrito', description: 'Eggs, hash browns, onions and bell peppers in a flour tortilla. Choice of bacon or sausage or spinach or mushrooms. Served with sour cream and salsa', price: '8.99' },
        { name: '2 + 2 + 2', description: '2 eggs, 2 pancakes, 2 slices bacon or sausage', price: '9.99' },
        { name: 'Priest Chilaquiles', description: 'Egg, tortilla, onions, bell peppers, bacon, & cheese scramble. Served with salsa, sour cream and a biscuit', price: '9.99' },
        { name: 'Egg Sandwich', description: '2 eggs with a choice of bacon or ham & cheese on choice of bread. Served with choice of fruit, hash browns or country potatoes', price: '8.99' },
      ]
    },
    omelets: {
      title: 'Omelets',
      subtitle: 'Served with sour toast and a choice of fruit, hash browns or country potatoes',
      items: [
        { name: 'Priest Ranch', description: 'Sausage, bell peppers, onions, jack and cheddar cheese', price: '10.99' },
        { name: 'Gold Rush', description: 'Ground beef, spinach, tomatoes, onions, jack and cheddar cheese', price: '11.99' },
        { name: 'Meat Lovers', description: 'German sausage, links, bacon, ham, onions, bell peppers and cheese', price: '12.99' },
        { name: 'Spinach, Bacon & Parmesan', description: 'Spinach, bacon and parmesan', price: '10.99' },
        { name: 'Denver', description: 'Ham, bell peppers, onions and cheese', price: '10.99' },
        { name: 'Veggie Delight', description: 'Crimini mushrooms, spinach, onions, tomatoes, bell peppers. Add feta cheese $1', price: '10.49' },
        { name: 'Spinach & Feta', description: 'Spinach & Feta', price: '10.49' },
        { name: 'Hot & Spicy', description: 'Salsa, bacon & pepper jack cheese', price: '10.49' },
      ]
    },
    desserts: {
      title: 'Desserts',
      subtitle: 'Sweet treats to end your meal',
      items: [
        { name: 'Hugo\'s Torte', description: 'Double layer raspberry butter cream cake', price: '5.99' },
        { name: 'German Cheesecake', description: 'Gluten free', price: '5.99' },
        { name: 'Chocolate Torte', description: 'Double layer German style cake', price: '5.99' },
        { name: 'Apple Crisp a la Mode', description: 'Served hot with ice cream', price: '5.99' },
      ]
    },
    beverages: {
      title: 'Beverages',
      subtitle: 'Beer, Wine, Coffee, and more',
      items: [
        { name: 'Mimosa', description: 'Orange juice and Champagne', price: '6.99' },
        { name: 'Sodas & Iced Drinks', description: 'Pepsi, Diet Pepsi, Dr. Pepper, Sierra Mist, Root Beer, fresh brewed iced tea, iced coffee (refills included)', price: '2.69' },
        { name: 'Fresh Squeezed Lemonade', description: '20 oz favorite from fresh squeezed lemons', price: '3.39' },
        { name: 'Milk Shakes & Floats', description: 'Chocolate, Vanilla or Raspberry Shake 5.99, Root Beer Float 4.59', price: '' },
        { name: 'Juices', description: 'Apple or Orange. Small 1.99 / Large 3.49', price: '' },
        { name: 'Hot Drinks', description: 'Coffee, tea, cider, chocolate', price: '2.69' },
        { name: 'Beer', description: 'Draft (Pint): Sierra Nevada Pale Ale, Stella Artois (5.99). Bottles: Firestone 805, Hops of Wrath IPA, Corona, Munich Spaten, Snowshoe Grizzly Ale (4.59), Budweiser, Bud light, Coors light (3.59)', price: '' },
        { name: 'Wines & Cider', description: 'Selection of local vineyards by the glass. Sauvignon Blanc, Chardonnay, Pinot Grigio, Cabernet Sauvignon, Merlot. House Red or White (5.99). Indigeny Hard Cider (4.99)', price: '' },
      ]
    }
  };

  const categories = Object.keys(menuCategories);

  return (
    <section id="menu" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
            Comfort food with a Sierra flair, crafted from locally sourced ingredients 
            and time-tested family recipes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-redwood-500 text-cream-50 shadow-lg'
                  : 'bg-white text-redwood-600 hover:bg-redwood-50 shadow-md'
              }`}
            >
              {menuCategories[category].title}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold text-redwood-800 mb-2">
              {menuCategories[activeCategory].title}
            </h3>
            <p className="text-redwood-600 italic">
              {menuCategories[activeCategory].subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {menuCategories[activeCategory].items.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-playfair text-xl font-semibold text-redwood-800">
                      {item.name}
                    </h4>
                    {item.price && (
                      <span className="font-bold text-redwood-500 text-lg ml-4">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p className="text-redwood-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-redwood-600 italic">
            Parties of six or more may be charged 18% gratuity
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;