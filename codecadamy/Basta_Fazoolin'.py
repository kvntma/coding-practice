class Menu:
    def __init__(self, name, items, start_time, end_time):
        self.name = name
        self.items = items
        self.start_time = start_time
        self.end_time = end_time

    def __repr__(self):
        if self.start_time >= 12:
            menu_times = "{name} menu is available starting from {start}pm to {end}pm".format(
                name=self.name, start=self.start_time - 12, end=self.end_time - 12)
        else:
            menu_times = "{name} menu is available starting from {start}am to {end}pm".format(
                name=self.name, start=self.start_time, end=self.end_time - 12)
        return menu_times

    def calculate_bill(self, purchased_items):
        total = 0
        for item in purchased_items:
            total += self.items[item]
        return "Your total bill is ${total}.".format(total=total)


class Franchise:
    def __init__(self, address, menus):
        self.address = address
        self.menus = menus

    def __repr__(self):
        return "This franchise is located at {address}.".format(address=self.address)

    def available_menus(self, time):

        # code only works if there's multiple menu items
        available_menu = self.menus
        for i in range(len(available_menu)-1, -1, -1):
            if time < available_menu[i].start_time or time > available_menu[i].end_time:
                available_menu.pop(i)
        if not available_menu:  # Always check if a list is empty by its type flexibility.
            return "No Available Times"
        return available_menu


class Business:
    def __init__(self, name, franchises):
        self.name = name
        self.franchises = franchises


brunch_menu = {'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50,
               'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50}

early_bird_menu = {'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00,
                   'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00}

dinner_menu = {'crostini with eggplant caponata': 13.00, 'ceaser salad': 16.00, 'pizza with quattro formaggi': 11.00,
               'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00}

kids_menu = {'chicken nuggets': 6.50,
             'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00}

brunch = Menu("brunch", brunch_menu, 11, 16)
early_bird = Menu("early bird", early_bird_menu, 15, 18)
dinner = Menu("dinner", dinner_menu, 17, 23)
kids = Menu("kids", kids_menu, 11, 21)

# print(dinner)
# print(brunch.calculate_bill(['pancakes', 'home fries', 'coffee']))
# print(early_bird.calculate_bill(
#    ['salumeria plate', 'mushroom ravioli (vegan)']))

flagship_store = Franchise("1232 West End Road", [
    brunch, early_bird, dinner, kids])
new_installment = Franchise("12 East Mulberry Street", [
    brunch, early_bird, dinner, kids])


print(flagship_store.available_menus(17))
basta = Business("Basta Fazoolin' with my Heart", [
                 flagship_store, new_installment])

# Arepa

arepas_menu = {'arepa pabellon': 7.00, 'pernil arepa': 8.50,
               'guayanes arepa': 8.00, 'jamon arepa': 7.50}


arepas = Menu("arepas", arepas_menu, 10, 20)


arepas_place = Franchise("189 Fitzgerald Avenue", [arepas])

arepa = Business("Take a' Arepa", [arepas_place])

print(arepas_place.available_menus(14))
