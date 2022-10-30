from typing import Union
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import asyncio
import json
from keras.models import load_model
from PIL import Image, ImageOps, ImageFont, ImageDraw 
import aiofiles
import numpy as np 
import base64

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

@app.get("/")
async def getUnit()-> dict:
    return  "Hellow world"

@app.get("/getUnit")
async def getUnit()-> dict:
    cur = cnx.cursor()
    cur.execute("SELECT * FROM unit")
    select = cur.fetchall()

    return  select
@app.get("/getChapter")
async def getChapter()-> dict:
    cur = cnx.cursor()
    cur.execute("SELECT * FROM chapter")
    select = cur.fetchall()
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
    return  obj

@app.post("/postQuations/{Question_chapter}/{Question_JSON}")
def postQuations(Question_chapter:str,Question_JSON:str)-> dict:
    sql = "INSERT INTO question VALUES (null,%s, %s)"
    val = (Question_chapter, Question_JSON)
    cur = cnx.cursor()
    cur.execute(sql,val)
    cnx.commit()
    return "INSERT SUCCESS"

@app.post("/objectDetection")
async def put_object(file: UploadFile = File(...)):
    async with aiofiles.open('upload/file.jpg', 'wb') as out_file:
        content = await file.read()  # async read
        await out_file.write(content)  # async write
    camera = r'upload/file.jpg'
    np.set_printoptions(suppress=True)
    model = load_model('D:/Wisit_project/backend/keras_model.h5', compile=True)
    class_names = open('D:/Wisit_project/backend/labels.txt', 'r').readlines()
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    image = Image.open('upload/file.jpg').convert('RGB')
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
    data[0] = normalized_image_array
    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index]
    confidence_score = prediction[0][index]
    print(class_name.split(' ')[1].split("\n")[0])
    return class_name.split(' ')[1].split("\n")[0]


# @app.post("/objectDetectionCamera")
#     return "file"
# #     # return 