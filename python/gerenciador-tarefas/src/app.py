from flask import Flask
from controllers import task

app = Flask(__name__, static_folder='views/static')


app.register_blueprint(task.bp)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)
