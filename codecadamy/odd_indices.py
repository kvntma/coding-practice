def odd_indices(lst):
    new_list = [lst[i] for i in range(1, len(lst), 2)]
    return new_list


print(odd_indices([4, 3, 7, 10, 11, -2]))
