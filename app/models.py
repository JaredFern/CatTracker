from datetime import datetime

from app import db


class Companies(db.Model):
    __tablename__ = 'Companies'

    id = db.Column(db.String, nullable=False, primary_key=True)
    name = db.Column(db.String, nullable = false)
    address = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    # zipcode =
    # latitude =
    # longitude =
    # email =
