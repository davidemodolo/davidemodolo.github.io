from glob import glob
import json

# open the sounds folder and subfolders. For each wav or mp3 file, add it to a json file with audio_path = path, title = filename (without extension) and class = parent folder

files = glob('sounds/**/*.wav', recursive=True) + glob('sounds/**/*.mp3', recursive=True)
data = []
for file in files:
    path = file.replace('\\', '/')
    title = path.split('/')[-1].split('.')[0]
    label = path.split('/')[-2]
    data.append({'audio_path': path, 'title': title, 'class': label})

with open('audio_list.json', 'w') as f:
    json.dump(data, f, indent=4)
