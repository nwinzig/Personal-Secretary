
from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from datetime import datetime

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)


    def to_dict(self):
        return{
            'id': self.id,
            'username': self.username,
            'email': self.email
        }


class Note(db.Model):
    __tablename__ = 'notes'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    title = db.Column(db.String, nullable = False)
    context = db.Column(db.String)
    creation_date = db.Column(db.Date, nullable = False, default = datetime.now)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'context': self.context,
            'creation_date': self.creation_date.strftime('%m/%d/%Y %I:%M %p')
        }


class CalendarEvent(db.Model):
    __tablename__ = 'calendar_events'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    title = db.Column(db.String, nullable = False)
    context = db.Column(db.String)
    start_date = db.Column(db.Date, nullable = False)
    end_date = db.Column(db.Date, nullable = False)
    start_time = db.Column(db.Time, nullable = False)
    end_time = db.Column(db.Time, nullable = False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'context': self.context,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'start_time': self.end_time,
            'end_time': self.end_time
        }
