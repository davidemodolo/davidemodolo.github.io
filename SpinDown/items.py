file = open("items.txt", "r")
names = open("names.txt", "r")
names = names.readlines()
for i, line in enumerate(file):
    name = line[6:-5]
    id = line.split("_")[0]
    id = id.split("/")[-1]
    name = name[len(id)+1:]
    print(f"{{id: {id}, name: \"{name}\", suggestion: \"{names[i][:-1]}\" }},")