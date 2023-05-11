import os
from flask import Flask
# from flask_cors import CORS
from flask_migrate import Migrate
# from flask_wtf.csrf import CSRFProtect, generate_csrf
# from flask_login import LoginManager
from .models import db
from .config import Config

app = Flask(__name__)

# app.cli.add_command(seed_commands)
app.config.from_object(Config)

db.init_app(app)
Migrate(app,db)

@app.route("/")
def create_app():
    return "Hello World"
