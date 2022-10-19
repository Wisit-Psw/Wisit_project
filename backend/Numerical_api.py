from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import asyncio
import json
# import requests
# INSERT INTO question VALUES (null,'001','{"root": 2,"number": 9}')

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

cnx = mysql.connector.connect(user='root', password='Wisit.comsci2003', host='localhost', database='numerical_project',raise_on_warnings = True)
@app.get("/getUnit")
async def getUnit()-> dict:
    cur = cnx.cursor()
    cur.execute("SELECT * FROM unit")
    select = cur.fetchall()
    # cnx.close()
    return  select
@app.get("/getChapter")
async def getChapter()-> dict:
    cur = cnx.cursor()
    cur.execute("SELECT * FROM chapter")
    select = cur.fetchall()
    # cnx.close()
    return  select
@app.get("/getQuations/{chapter_id}")
async def getQuations(chapter_id:str)-> dict:
    cur = cnx.cursor()
    cur.execute("SELECT Question_JSON FROM question  WHERE Chapter_id LIKE '"+chapter_id+"'")
    print("SELECT Question_JSON FROM question  WHERE Chapter_id LIKE '"+chapter_id+"'")
    select = cur.fetchall()
    obj = []
    for i in select:
        obj.append(json.loads(i[0]))
    # cnx.close()
    return  obj

@app.post("/postQuations/{Question_chapter}/{Question_JSON}")
def postQuations(Question_chapter:str,Question_JSON:str)-> dict:
    sql = "INSERT INTO question VALUES (null,%s, %s)"
    val = (Question_chapter, Question_JSON)
    cur = cnx.cursor()
    cur.execute(sql,val)
    cnx.commit()
    return "INSERT SUCCESS"