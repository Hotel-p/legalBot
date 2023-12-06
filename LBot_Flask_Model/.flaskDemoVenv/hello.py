# from flask import Flask
# from flask_cors import CORS

# from new import chatbot

# app = Flask(__name__)
# CORS(app)

# @app.route("/predict")
# def helloWorld():
#   return "Hello, cross-origin-world!"


# from flask import Flask, request, jsonify, send_file
# from flask_cors import CORS
# from new import chatbot

# app = Flask(__name__)
# CORS(app)

# @app.route("/predict", methods=["POST"])
# def predict():
#     if request.method == "POST":
#         try:
#             # Assuming the input is in JSON format, you can access it like this:
#             input_data = request.json.get("input_data")

#             # Pass the input to the chatbot function
#             output_data = chatbot(input_data)

#             # Return the output as JSON
#             return jsonify({"output_data": output_data})

#         except Exception as e:
#             return jsonify({"error": str(e)})

# @app.route("/download_pdf", methods=["GET"])
# def download_pdf():
#     try:
#         # Replace 'your_pdf_filename.pdf' with the actual name of your PDF file
#         pdf_filename = 'chat_history_report.pdf'
        
#         # Send the file to the frontend for download
#         return send_file(pdf_filename, as_attachment=True)

#     except Exception as e:
#         return jsonify({"error": str(e)})
        

# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from new import chatbot

app = Flask(__name__)
CORS(app)

# @app.route("/predict")
# def helloWorld():
#   return "Hello, cross-origin-world!"

@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        try:
            # Assuming the input is in JSON format, you can access it like this:
            input_data = request.json.get("input_data")

            # Pass the input to the chatbot function
            output_data = chatbot(input_data)

            # Return the output as JSON
            return jsonify({"output_data": output_data})

        except Exception as e:
            return jsonify({"error": str(e)})


@app.route("/download_pdf", methods=["GET"])
def download_pdf():
    print("download")
    try:
        # Replace 'your_pdf_filename.pdf' with the actual name of your PDF file
        pdf_filename = 'chat_history_report.pdf'
        
        # Send the file to the frontend for download
        return send_file(pdf_filename, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
