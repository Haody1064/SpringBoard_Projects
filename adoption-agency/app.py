"""Flask app for adopt app."""

from flask import Flask, url_for, render_template, redirect, flash, jsonify

from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm

app = Flask(__name__)

app.config['SECRET_KEY'] = "psss!..."

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///postgres"
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False

connect_db(app)
db.create_all()

# Having the Debug Toolbar show redirects explicitly is often useful;
# however, if you want to turn it off, you can uncomment this line:
#
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)

@app.route("/")
def list_pets():
    """List all pets"""

    pets = Pet.query.all()
    return render_template("pet_list.html", pets = pets)