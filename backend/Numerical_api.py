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
import base64 as base
import io
from starlette.responses import StreamingResponse
import cv2
app = FastAPI()
origins = ["*"]
model = load_model('keras_Model.h5', compile=True)
face_cascade = "haarcascade_frontaifact_default.xml"
class_names = open('labels.txt', 'r').readlines()
face_classifier = cv2.CascadeClassifier(face_cascade)
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
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    image = Image.open('upload/file.png').convert('RGB')
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


@app.post("/objectDetection2")
async def put_object(file: UploadFile = File(...)):
    async with aiofiles.open('upload/file.jpg', 'wb') as out_file:
        content = await file.read()  # async read
        await out_file.write(content)
    np.set_printoptions(suppress=True)

    image_bgr = cv2.imread('upload/file.jpg')
    image_png = cv2.imread('upload/null.png')
    size = (224, 224)
    np.set_printoptions(suppress=True)
    image_bw = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2GRAY)
    image_rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)
    faces = face_classifier.detectMultiScale(image_bw)
    if(len(faces)>0):
        for face in faces:
            x,y,w,h = face
            cface = Image.fromarray(image_bgr[y:y+h,x:x+w])
            data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
            image = ImageOps.fit(cface, size, Image.Resampling.LANCZOS)
            image_array = np.asarray(image)
            normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
            data[0] = normalized_image_array
            prediction = model.predict(data)
            index = np.argmax(prediction)
            class_name = class_names[index]
            confidence_score = prediction[0][index]
            #print('Class:', class_name, end='')
            cv2.rectangle(image_png,(x,y),(x+w,y+h),(0,255,0),2)
            cv2.putText(image_png,class_name.split(' ')[1].split("\n")[0],
                        (x,y-10),cv2.FONT_HERSHEY_SIMPLEX,0.5,(0,255,0),2)
    # else:
    #     image = Image.fromarray(image_rgb)
    #     data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    #     image = ImageOps.fit(image, size, Image.ANTIALIAS)
    #     image_array = np.asarray(image)
    #     normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
    #     data[0] = normalized_image_array
    #     prediction = model.predict(data)
    #     index = np.argmax(prediction)
    #     class_name = class_names[index]
    #     confidence_score = prediction[0][index]
    #     cv2.putText(image_bgr,class_name.split(' ')[1].split("\n")[0],
    #                     (0,10),cv2.FONT_HERSHEY_SIMPLEX,0.5,(0,255,0),2)
    cv2.imwrite('upload/result.png', image_png) 
    img = Image.open("upload/result.png")
    img = img.convert("RGBA")
    datas = img.getdata()
    newData = []
    for item in datas:
        if item[0] == 255 and item[1] == 255 and item[2] == 255:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    img.save("upload/result.png", "PNG")
    return base.b64encode(open('upload/result.png','rb').read() )
@app.get("/live")
async def put_object():
    return base.b64encode(open('upload/result.jpg','rb').read() )