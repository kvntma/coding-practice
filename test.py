'''from collections import defaultdict
# Write your frequency_dictionary function here:


def frequency_dictionary(words):
    d = defaultdict(int)
    for word in words:
        d[word] += 1
    return d


# Uncomment these function calls to test your  function:
print(frequency_dictionary(["apple", "apple", "cat", 1]))
# should print {"apple":2, "cat":1, 1:1}
print(frequency_dictionary([0, 0, 0, 0, 0]))
# should print {0:5}
'''


from collections import defaultdict


def unique_values(my_dictionary):
    unique_list = []
    for val in my_dictionary.values():
        if val not in unique_list:
            unique_list.append(val)
    return (len(unique_list))


print(unique_values({0: 3, 1: 1, 4: 1, 5: 3}))


# Create a function named count_first_letter that takes a dictionary named names as a parameter.
# names should be a dictionary where the key is a last name and the value is a list of first names.
# For example, the dictionary might look like this:
# Write your count_first_letter function here:


def count_first_letter(names):
    d = defaultdict(int)
    for key, name in names.items():
        d[key[0]] += len(name)
    return d


# Uncomment these function calls to test your  function:
print(count_first_letter({"Stark": ["Ned", "Robb", "Sansa"], "Snow": [
      "Jon"], "Lannister": ["Jaime", "Cersei", "Tywin"]}))
