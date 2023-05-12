from app.models import User, db, environment, SCHEMA


def seed_users():
    users = [
        {'username': 'jSmith', 'email': 'jSmith@test.com', 'password': 'password'},
        {'username': 'pGriffin', 'email': 'pGriffin@test.com', 'password': 'password'},
        {'username': 'tClark', 'email': 'tClark@test.com', 'password': 'password'}
    ]

    for user in users:
        user = User(**user)
        db.session.add(user)

    db.session.commit()



def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
