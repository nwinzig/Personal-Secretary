import os
from flask import Flask
# from flask_cors import CORS
# from flask_migrate import Migrate
# from flask_wtf.csrf import CSRFProtect, generate_csrf
# from flask_login import LoginManager
from .config import Config

app = Flask(__name__)

app.config.from_object(Config)



@app.route("/")
def create_app():
    return "Hello World"
