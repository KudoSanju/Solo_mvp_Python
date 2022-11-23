from fastapi import FastAPI, Body, Depends
import schemas
import models

from database import Base, engine, SessionLocal
from sqlalchemy.orm import Session

Base.metadata.create_all(engine)

def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()
app = FastAPI()

@app.get("/outfits")
def getOutfits(session: Session = Depends(get_session)):
    outfits = session.query(models.Outfits).all()
    return outfits

@app.get("/outfits/{id}")
def getOutfit(id:int,session: Session = Depends(get_session)):
    outfits = session.query(models.Outfits).get(id)
    return outfits

@app.post("/outfits")
def addOutfit(outfit:schemas.Outfits, session: Session = Depends(get_session)): 
    outfit = models.Outfits(name = outfit.name, url = outfit.url)
    session.add(outfit)
    session.commit()
    session.refresh(outfit)
    return outfit

@app.put('/outfits/{id}')
def updateOutfit(id:int, outfit:schemas.Outfits, session: Session = Depends(get_session)):
    outfitObject = session.query(models.Outfits).get(id)
    outfitObject.name = outfit.name
    outfitObject.url = outfit.url
    session.commit()
    return outfitObject