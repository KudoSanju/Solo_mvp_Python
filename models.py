from sqlalchemy import Column, Integer, String
from database import Base
class Outfits(Base):
    __tablename__ = 'outfits'
    id = Column(Integer, primary_key=True)
    name = Column(String(256))
    url = Column(String(256))
    

