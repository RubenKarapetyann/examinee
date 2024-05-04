from cut import path_1, path_2, path_3, get_text_by_pages, tasks_list_from_text_global
import uuid 
from constants import section_10_answers, section_8_answers, section_11_answers
cut_sample = r"([0-9]+\.\s*?)(1\.(.|\n)+?)(2\.(.|\n)+?)(3\.(.|\n)+?)(4\.(.|\n)+?)(5\.(.|\n)+?)(\.|\?|\!)"
import re
import json
import os

def tasks_list_from_text(text):
    # print(cut_sample)
    return tasks_list_from_text_global(text, cut_sample)

def cut_answers(text):
    rep = re.compile(r"([0-9]+\.)\s+(.+?)([0-9]+\s)")
    tuples_list = rep.findall(text)
    answers = [{
            "number" : re.sub(r"\D", "", i[0]),
            "answers" :  re.findall(r"\d",i[1]) + [i[2].strip()]
    } for i in tuples_list]

    return answers

def cut_tasks_list(list, rep):
    # print(list)
    final_list = []
    for i in list:
        final_list.extend(cut_task(i, rep))
    return final_list

def cut_task(task, rep):
    answers = cut_answers(section_11_answers[rep])
    number = int(re.sub(r"\D", "", task[0]))
    tasks_list = []
    for i in [1, 3, 5, 7, 9]:
        tasks_list.append({
        "number" : number, 
        "self_number" : int(task[i][0]),
        "text" : re.sub(r"\n", " ", task[i][2:]).strip() if int(task[i][0]) != 5 else re.sub(r"\n", " ", task[i][2:]).strip() + task[11],
        "id" : str(uuid.uuid4()),
        "repository" : int(rep),
        "correct_answer" : "true" if task[i][0] in answers[number-1]["answers"] else "false"
      })

    return tasks_list
    
    
# tasks1 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_1, 250, 260)), "1")
# tasks2 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_2, 281, 294)), "2")
# tasks3 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_3, 247, 262)), "3")



# tasks = tasks1 + tasks2 + tasks3
# translated_to_json = json.dumps(tasks)

# f = open(os.getcwd()+"/output/sec_11.json", "w", encoding="utf-8")
# f.write(translated_to_json)
# f.close()

print(get_text_by_pages(path_1, 250, 260))