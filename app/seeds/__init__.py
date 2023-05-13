from flask.cli import AppGroup
from .user_seed import seed_users, undo_users
from .note_seed import seed_notes, undo_notes
from app.models.db import db, environment, SCHEMA


seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    if environment == 'production':
        undo_notes()
        undo_users()
    seed_users()
    seed_notes()

@seed_commands.command('undo')
def undo():
    undo_notes()
    undo_users()
