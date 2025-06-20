import React, { useState, forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

const Menu = forwardRef<HTMLElement>((props, ref) => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = {
    breakfast: {
      title: 'Breakfast & Omelets',
      subtitle: '"Mouthwateringly Great." — San Francisco Chronicle',
      items: [
        { name: 'Steak and Eggs', description: '10 oz NY Strip Steak with eggs, hash browns or country potatoes or fruit (Add $2), and choice of toast.', price: '29' },
        { name: '2 Egg Breakfast', description: 'Eggs with bacon or sausage. Hash browns, country potatoes or fruit (Add $2) and choice of toast.', price: '17' },
        { name: 'Priest Skillet', description: 'Sausage, bacon, bell pepper, and onions scrambled with eggs, cheddar cheese and country potatoes. Served with side of salsa, sour cream, & biscuit.', price: '18' },
        { name: 'Country Skillet', description: 'Sausage, bacon, bell pepper, onions scrambled with eggs and country potatoes. Topped with country gravy. Served with a biscuit.', price: '19' },
        { name: 'Chicken Skillet', description: 'Shredded chicken, bell pepper, onions scrambled with eggs, cheddar cheese, and country potatoes. Served with salsa, sour cream, & biscuit.', price: '18' },
        { name: 'Veggie Skillet', description: 'Crimini mushrooms, sautéed spinach, egg, bell peppers, tomato, shredded cheddar cheese, onion and country potato scramble. Served with side of salsa, sour cream, & biscuit.', price: '17' },
        { name: 'Mom\'s Pancakes', description: '3 fluffy pancakes served with butter, syrup & fruit or sausage or bacon.', price: '15' },
        { name: 'French Toast', description: 'Served with butter, syrup & fruit or sausage or bacon.', price: '15' },
        { name: '2 + 2 + 2', description: '2 eggs, 2 pancakes, 2 slices bacon or sausage.', price: '16' },
        { name: 'Vegan Stir Fry', description: 'Sautéed crimini mushrooms, spinach, onions, bell peppers. Topped with avocado.', price: '17' },
        { name: 'Priest Poachie', description: '2 poached eggs on an English muffin with sautéed spinach, grilled tomato and bacon. Topped with a splash of Sriracha sauce. Served with fruit.', price: '18' },
        { name: 'House Smoked Brisket Hash', description: 'Hash browns topped with 2 eggs your way and your choice of toast.', price: '20' },
        { name: 'Chilaquiles', description: 'Flour tortilla chips, chicken, red sauce & cheese scrambled. Eggs to liking. Served with salsa & sour cream.', price: '17' },
        { name: 'Biscuits & Gravy with Eggs & Sausage', description: 'Homemade biscuits and gravy, sausage links, & scrambled eggs.', price: '18' },
        { name: 'Breakfast Burrito', description: 'Eggs, hash browns, onions, bell peppers and cheddar cheese in a flour tortilla. One choice of bacon or sausage or spinach or mushrooms (addt\'l fillings $1 each). Served with sour cream and salsa.', price: '16' },
        { name: 'Egg Sandwich', description: 'Bacon & cheese on choice of toast. Served with fruit.', price: '16' },
        { name: 'Avocado Toast with Fruit', description: 'Everything seasoning, red pepper flakes & spouts. Drizzled with olive oil.', price: '16' },
        { name: 'Spicy California Omelet', description: 'Salsa, jalapeños, onions, jack and cheddar cheese avocado.', price: '18' },
        { name: 'Priest Ranch Omelet', description: 'Sausage, bell peppers, onions, jack and cheddar cheese.', price: '18' },
        { name: 'Spinach & Feta Omelet', description: 'Fresh spinach with feta cheese.', price: '17' },
        { name: 'Meat Lovers Omelet', description: 'Sausage links, bacon, onions, bell peppers and cheese.', price: '18' },
        { name: 'House Smoked Carnitas Omelet', description: 'With cheddar, red sauce and avocado.', price: '18' },
        { name: 'Veggie Delight Omelet', description: 'Crimini mushrooms, spinach, onions, tomatoes, and bell peppers. Add feta cheese +$1.', price: '17' },
      ]
    },
    starters_salads: {
      title: 'Starters & Salads',
      subtitle: 'Fresh and flavorful beginnings',
      items: [
        { name: 'Deviled Eggs with Cured Salmon', price: '14' },
        { name: 'Chicken Satay with Peanut Sauce', price: '14' },
        { name: 'Zaru Soba Noodles', price: '9' },
        { name: 'Hummus Dip Party with Pita', price: '12' },
        { name: 'Avocado Toast', price: '14' },
        { name: 'Three Cheese Crimini Mushroom Croquette', price: '13' },
        { name: 'Calamari with Lemon & Cocktail Sauce', price: '17' },
        { name: 'Sweet Potato Fries or Onion Rings', price: '11' },
        { name: 'Dolmades (Stuffed Grape Leaves)', price: '9' },
        { name: 'Basket of French Fries or Chips', price: '8' },
        { name: 'Warm Goat Cheese Salad', description: 'Sautéed goat cheese with apple and walnuts on spring greens with balsamic vinaigrette.', price: '18' },
        { name: 'Bobby\'s Salad', description: 'Fried chicken strips on tossed romaine with cranberries, candied walnuts and ranch dressing.', price: '19' },
        { name: 'Cobb Salad', description: 'Chopped salad greens with tomato, crisp bacon, grilled chicken breast, egg, avocado, blue cheese and balsamic vinaigrette.', price: '22' },
        { name: 'Chicken Caesar Salad', description: 'Grilled chicken with croutons and parmesan tossed in romaine lettuce.', price: '19' },
        { name: 'Spinach Salad', description: 'Fresh tossed spinach in balsamic vinaigrette with egg, bacon & parmesan.', price: '16' },
        { name: 'Greek Salad', description: 'Spring salad with cherry tomatoes, cucumbers, red onions, feta and kalamata olives. Served with pita bread.', price: '18' },
        { name: 'Falafel Salad', description: 'Fresh cooked falafel on a romaine & spring mix, cucumber, tomato, red onion & feta. Topped with tzatziki & hot sauce.', price: '18' },
        { name: 'Garden Salad', description: 'Fresh romaine, mixed greens, celery, cucumber, cherry tomatos, carrots & avocado.', price: '16' },
        { name: 'Soup & Salad', description: 'Cup of homemade soup of the day & salad. Bowl of Soup $9, Cup $6.', price: '16' },
      ]
    },
    burgers_sandwiches: {
      title: 'Burgers & Sandwiches',
      subtitle: 'Served with Fries. Upgrade to Onion Rings, Sweet Potato Fries, Cole Slaw, Soup or Salad for $3',
      items: [
        { name: 'Classic Hamburger', price: '17' },
        { name: 'Classic Cheeseburger', price: '18' },
        { name: 'Bacon Cheeseburger', price: '19' },
        { name: 'Priest Au Poivre Burger', description: 'Whiskey peppercorn sauce, brie and spinach.', price: '19.5' },
        { name: 'California Burger', description: 'Sliced avocado & jack cheese.', price: '19' },
        { name: 'Mushroom Swiss Burger', description: 'Sautéed crimini mushrooms & swiss cheese.', price: '19' },
        { name: 'Sassy Brisket Sandwich', description: 'House smoked beef brisket with red cabbage, swiss cheese & honey mustard sauce on toasted ciabatta.', price: '19' },
        { name: 'Steak Sandwich', description: 'New York steak grilled to perfection, served on a ciabatta roll with lettuce, tomato & onion.', price: '27' },
        { name: 'Grilled Salmon Filet Sandwich', description: 'Atlantic salmon filet with tartar & lemon on toasted ciabatta. Add avocado +$3.', price: '22' },
        { name: 'Lamb & Beef Gyro', description: 'Traditional Greek. Wrapped with lettuce, tomato, onion & tzatziki. With Greek salad.', price: '21' },
        { name: 'Pulled Barbecue Pork Sandwich', description: 'Slow roasted pork in barbecue sauce topped with cole slaw on an oil top bun.', price: '18' },
        { name: 'Falafel Sandwich', description: 'Spicy fried chickpea on a pita with tzatziki sauce. Topped with cucumber and avocado.', price: '18' },
      ]
    },
    entrees_drinks: {
      title: 'Entrees & Drinks',
      subtitle: 'Hearty meals and refreshing drinks',
      items: [
        { name: 'Steak Frittes', description: 'New York 27 | Rib Eye 33. Add Whiskey Peppercorn or Bearnaise Sauce +$5, Grilled Mushrooms or Onions +$3.', price: '' },
        { name: 'Salmon Dinner', description: 'With bearnaise sauce, rice & vegetables.', price: '29' },
        { name: 'Lobster Macaroni & Cheese', description: 'Served with seasonal fresh veggies.', price: '26' },
        { name: 'German Bratwurst Plate', description: '2 grilled sausages with home made sauerkraut and traditional slow cooked red cabbage, served with a choice of soup or salad.', price: '24' },
        { name: 'Don\'t Let Your Meat Loaf', description: 'With mashed potatoes, gravy & vegetables.', price: '23' },
        { name: 'Pepper Steak or Asian Chicken & Rice', description: 'Pepper steak with bell peppers & onions or marinated chicken with seasonal fresh vegetables. Chicken 23 | Steak 27 | Vegan Stir Fry 19', price: '' },
        { name: 'Sodas & Iced Drinks', description: 'Pepsi, Diet Pepsi, Dr. Pepper, Starry, Root Beer, Fresh Brewed Iced Tea, Iced Coffee', price: '4' },
        { name: 'Fresh Squeezed Lemonade', description: 'Made daily.', price: '6' },
        { name: 'Milk Shakes & Floats', description: 'Chocolate, Vanilla or Strawberry Shake 9 | Root Beer Float 7', price: '' },
        { name: 'Juices', description: 'Apple, Cranberry or Orange. Small 4 | Large 5', price: '' },
        { name: 'Mimosa', description: 'Orange juice and organic prosecco.', price: '10' },
        { name: 'Beer & Wine', description: 'On Tap: Local brews from Dust Bowl Brewing (Taco Truck Lager, Hops of Wrath IPA) - Pint 8. Bottles and local wine list available upon request.', price: '' },
      ]
    },
  };

  const categories = Object.keys(menuCategories);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="menu" ref={ref} className="py-20 bg-gradient-to-b from-sage-50 to-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
            Our Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
            Comfort food with a Sierra flair, crafted from locally sourced ingredients 
            and time-tested family recipes.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category} 
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${activeCategory === category ? 'bg-redwood-500 text-cream-50 shadow-lg border border-transparent' : 'bg-card text-redwood-600 hover:bg-redwood-50 shadow-md border border-redwood-500'}`}
            >
              {menuCategories[category].title.replace('_', ' & ')}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold text-redwood-800 mb-2">
              {menuCategories[activeCategory].title.replace('_', ' & ')}
            </h3>
            <p className="text-redwood-600 italic">
              {menuCategories[activeCategory].subtitle}
            </p>
          </div>

          <motion.div
            key={activeCategory} // Re-triggers animation on category change
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {menuCategories[activeCategory].items.map((item, index) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Card className="bg-card hover:shadow-lg transition-shadow duration-300 border-redwood-100 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-playfair text-xl font-semibold text-redwood-800 pr-2">
                        {item.name}
                      </h4>
                      {item.price && (
                        <span className="font-bold text-redwood-500 text-lg ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-redwood-600 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-redwood-600 italic">
            Parties of six or more may be charged 18% gratuity.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Menu;