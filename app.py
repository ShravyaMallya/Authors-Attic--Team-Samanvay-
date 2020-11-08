from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/landingPage.html')
def books():
    return render_template('landingPage.html')
@app.route('/bookDetails.html')
def book():
    return render_template('bookDetails.html')
if __name__ == '__main__':
    app.run(debug = True)
