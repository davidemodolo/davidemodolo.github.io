# open the out.txt file
file = open("out.txt", "r", encoding="utf16")
import urllib.request
import re
ID = 1
items = []
names = open("names.txt", "w")
for line in file:
    # get the link inside the line like "data-src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f7/Collectible_Boom%21_icon.png/revision/latest?cb=20210821044036"
    elements = line.split(">")
    if len(elements) < 2: continue
    link = re.findall(r'data-src="([^"]*)"', line)
    if len(link) == 0: continue
    link = link[0].split(".png")[0] + ".png"
    names.write(link.split("/")[-1][12:-9].replace("_", " ").replace("%27", "'").replace("%28", "<").replace("%29", ">").replace("%3D", "=").replace("%21", "!").replace("%3F", "?")+"\n")
    name = f"{ID}_" + link.split("/")[-1][12:-9]+".png"
    # if there is a %2* (that can be %20, %27 and more), replace it with _
    if "%2" in name:
        name = name.split("%2")[0] + "_" + name.split("%2")[1][1:]
    ID += 1
    #download the image and save it in the imgs folder
#     urllib.request.urlretrieve(link, "imgs/"+name)
#     items.append("/imgs/"+name)
#     print("Downloaded", name)
# # save the items in a csv file

# output = open("items.txt", "w")
# for item in items:
#     output.write(item+"\n")

# output.close()# 
names.close()