from flask.cli import AppGroup
from .user_seed import seed_users, undo_users
from .note_seed import seed_notes, undo_notes
from app.models.db import db, environment, SCHEMA
from .event_seed import seed_events, undo_events

seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    if environment == 'production':
        undo_events()
        undo_notes()
        undo_users()
    seed_users()
    seed_notes()
    seed_events()

@seed_commands.command('undo')
def undo():
    undo_events()
    undo_notes()
    undo_users()
