from flask import Flask, render_template, redirect, url_for, request
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config["SECRET_KEY"] = "kkenkegnkeg"
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    surname = db.Column(db.String(20), nullable=False)
    job = db.Column(db.String(20), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    favorite = db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        return f"<Employee {self.name}>"


class AddForm(FlaskForm):
    name = StringField(validators=[InputRequired()])
    surname = StringField(validators=[InputRequired()])
    job = StringField(validators=[InputRequired()])
    phone = StringField(validators=[InputRequired()])
    email = StringField(validators=[InputRequired()])


@app.route('/')
def home():
    employees = Employee.query.all()
    return render_template("home.html", employees=employees)


@app.route('/favorites')
def favorites():
    favori_employee = []
    employees = Employee.query.all()

    for emp in employees:
        if emp.favorite:
            favori_employee.append(emp)

    return render_template("home.html", employees=favori_employee)


@app.route('/add', methods=("GET", "POST"))
def add_employee():
    form = AddForm()

    if form.validate_on_submit():
        emp = Employee(
            name=form.name.data,
            surname=form.surname.data,
            job=form.job.data,
            email=form.email.data,
            phone=form.phone.data,
            favorite=False
        )

        db.session.add(emp)
        db.session.commit()

        return redirect(url_for("home"))
    return render_template("add_user.html", form=form)


@app.route('/employee/<int:id>', methods=["GET", "POST"])
def user(id):
    employee = Employee.query.get(id)

    if request.method == "POST":
        employee.favorite = not employee.favorite
        print(employee.favorite, not employee.favorite)

        db.session.add(employee)
        db.session.commit()

    return render_template("employee.html", emp=employee)


@app.route('/delete/<int:id>', methods=["POST"])
def delete(id):
    employee = Employee.query.get(id)

    db.session.delete(employee)
    db.session.commit()

    return redirect(url_for("home"))
