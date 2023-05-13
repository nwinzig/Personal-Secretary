from app.models import db, User, environment, SCHEMA, Note, CalendarEvent

def seed_notes():
    notes = [
        {'user_id': 1, 'title': 'My First Note', 'context': 'I created a note!'},
        {'user_id': 2, 'title': 'Shopping List', 'context': 'Milk, Eggs'},
        {'user_id': 2, 'title': 'To Do', 'context': 'Study, Grocery Shopping, Nap'},
        {'user_id': 3, 'title': 'Hi there', 'context': 'Hello I am the developer'}
    ]

    for note in notes:
        note = Note(**note)
        db.session.add(note)

    db.session.commit()

def undo_notes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notes")

    db.session.commit()
