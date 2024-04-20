import os
from PyPDF2 import PdfReader
import re 
from constants import trash_patterns_5, section_3_answers, section_5_answers
import json
import random
import uuid

path_1 = os.getcwd()+"/repositories/rep_1.pdf"
path_2 = os.getcwd()+"/repositories/rep_2.pdf"
path_3 = os.getcwd()+"/repositories/rep_3.pdf"
    
    
def clear_text(text):
    cleared_text = text
    for i in trash_patterns_5:
        cleared_text = re.sub(i, "", cleared_text)
                
    return cleared_text


def get_text_by_pages(path, start, end):
    with open(path, 'rb') as f:
        engine = start
        pages = []
        pdf = PdfReader(f)
        
        while engine < end:
            page = pdf.pages[engine]
            pages.append(page.extract_text().strip())
            engine += 1
        

        return " ".join(pages)

    
def get_answers_by_page(path, page):
    with open(path, 'rb') as f:
        pdf = PdfReader(f)
        current_page = pdf.pages[page]
        print(current_page.extract_text())
        

def tasks_list_from_text(text):
    cleared = clear_text(text)
    tasks_list = []
    reg = re.compile(r"([0-9]+\.)((.+|\n)*?)(a\).+)\n(b\).+)\n(c\).+)\n(d\).+)")
    tasks_list = reg.findall(cleared)

    return tasks_list


def cut_answers(text):
    rep = re.compile(r"[0-9]+\w")
    return rep.findall(text)


def cut_task(task, rep):
    answers = cut_answers(section_5_answers[rep])
    number = int(task[0][:-1])
    finished_task = {
        "number" : number,
        "text" : task[1],
        "variants" : [{
                "text" : i.strip()[2:].strip(),
                "variant" : i.strip()[0],
                "id" : str(uuid.uuid4())
            } for i in list(task)[3:7]],
        "id" : str(uuid.uuid4()),
        "repository" : int(rep),
        "correct_answer" : answers[number-1][len(answers[number-1])-1]
    }
    return finished_task
    
def cut_tasks_list(list, rep):
    return [cut_task(i, rep) for i in list]

#section 3
# tasks1 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_1, 111, 162)), "1")
# tasks2 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_2, 107, 168)), "2")
# tasks3 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_3, 82, 142)), "3")

#section 5
tasks1 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_1, 176, 201)), "1")
tasks2 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_2, 183, 215)), "2")
tasks3 = cut_tasks_list(tasks_list_from_text(get_text_by_pages(path_3, 152, 181)), "3")

tasks = tasks1 + tasks2 + tasks3
translated_to_json = json.dumps(tasks)

# get_answers_by_page(path_3, 294)
# print(cut_answers(section_3_answers["3"]))

# f = open(os.getcwd()+"/output/sec_3.json", "w", encoding="utf-8")
# f.write(translated_to_json)
# f.close()

# f = open(os.getcwd()+"/output/sec_3.txt", "w", encoding="utf-8")
# f.write()
# f.close()



f = open(os.getcwd()+"/output/sec_5.json", "w", encoding="utf-8")
f.write(translated_to_json)
f.close()

# f = open(os.getcwd()+"/output/sec_5.txt", "w", encoding="utf-8")
# f.write(translated_to_json)
# f.close()



# answer cutting
# print(get_text_by_pages(path_2, 328, 329))


