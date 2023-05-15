from app.models import db, User, environment, SCHEMA, Note, CalendarEvent
from datetime import datetime, time

def seed_events():
    events = [
        {
            'user_id': 1,
            'title': 'Meeting 1',
            'context': 'Plan event',
            'start_date': datetime(2023, 5, 1),
            'end_date': datetime(2023, 5, 1),
            'start_time': time(9, 0),
            'end_time': time(10, 0)
        },
        {
            'user_id': 2,
            'title': 'Meeting 2',
            'context': 'Discuss project',
            'start_date': datetime(2023, 5, 2),
            'end_date': datetime(2023, 5, 2),
            'start_time': time(11, 0),
            'end_time': time(12, 30)
        },
        {
            'user_id': 3,
            'title': 'Meeting 3',
            'context': 'Review presentation',
            'start_date': datetime(2023, 5, 3),
            'end_date': datetime(2023, 5, 3),
            'start_time': time(14, 0),
            'end_time': time(15, 30)
        },
        {
            'user_id': 1,
            'title': 'Meeting 4',
            'context': 'Discuss strategy',
            'start_date': datetime(2023, 5, 4),
            'end_date': datetime(2023, 5, 4),
            'start_time': time(10, 0),
            'end_time': time(11, 0)
        },
        {
            'user_id': 2,
            'title': 'Meeting 5',
            'context': 'Brainstorm ideas',
            'start_date': datetime(2023, 5, 5),
            'end_date': datetime(2023, 5, 5),
            'start_time': time(13, 30),
            'end_time': time(15, 0)
        },
        {
            'user_id': 3,
            'title': 'Meeting 6',
            'context': 'Finalize plans',
            'start_date': datetime(2023, 5, 6),
            'end_date': datetime(2023, 5, 6),
            'start_time': time(9, 30),
            'end_time': time(10, 30)
        }
    ]

    for event in events:
        event = CalendarEvent(**event)
        db.session.add(event)
    db.session.commit()

def undo_events():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.calendar_events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM calendar_events")

    db.session.commit()
